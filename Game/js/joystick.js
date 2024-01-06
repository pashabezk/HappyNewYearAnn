const joystick = document.getElementById("joystick-wrapper"); // joystick container
const joystickHeader = document.getElementById("joystick-header"); // joystick header (draggable element)

const fixedMargin = 10;  // fixed margin (guarantee margin to browser window screen)
const joystickHeight = joystick.offsetHeight; // joystick container height
const joystickWidth = joystick.offsetWidth; // joystick container width

let joystickPosX = 0, joystickPosY = 0; // joystick position on start drag
let deltaX = 0, deltaY = 0; // drag distance
let screenWidth, screenHeight; // site window width and height

/**
 * Function to set joystick position on drag start
 * @param {number} x
 * @param {number} y
 */
const setStartJoystickContainerPos = (x, y) => {
	joystickPosX = x;
	joystickPosY = y;
};

/**
 * Function to update joystick position on drag
 * @param {number} x
 * @param {number} y
 */
const updateJoystickContainerPos = (x, y) => {
	// calculate new position
	deltaX = joystickPosX - x;
	deltaY = joystickPosY - y;
	joystickPosX = x;
	joystickPosY = y;

	// set new position
	joystick.style.top = (joystick.offsetTop - deltaY) + "px";
	joystick.style.left = (joystick.offsetLeft - deltaX) + "px";
};

/** Function to check if joystick now hidden or not */
const checkIsJoystickHidden = () => joystick.classList.contains("hidden");

/** Function to save joystick position to local storage */
const saveJoystickPosition = () => {
	if (!checkIsJoystickHidden()) { // save only if container visible
		localStorage.setItem("joystickPositionX", joystick.offsetLeft);
		localStorage.setItem("joystickPositionY", joystick.offsetTop);
	}
};

/** Function to save joystick visibility to local storage */
const saveJoystickVisibility = () => {
	localStorage.setItem("joystickHidden", checkIsJoystickHidden());
};

/** Check that joystick is inside screen. If not - set it inside screen */
const checkPositionAndSetMargins = () => {
	const maxPosX = screenWidth - joystickWidth - fixedMargin;
	const maxPosY = screenHeight - joystickHeight - fixedMargin;
	if (joystick.offsetTop >= maxPosY) {
		joystick.style.top = maxPosY + "px";
	}
	if (joystick.offsetLeft >= maxPosX) {
		joystick.style.left = maxPosX + "px";
	}
	if (joystick.offsetTop <= fixedMargin) {
		joystick.style.top = fixedMargin + "px";
	}
	if (joystick.offsetLeft <= fixedMargin) {
		joystick.style.left = fixedMargin + "px";
	}
	saveJoystickPosition();
};

/** Function to toggle visibility of joystick */
const toggleJoystickVisibility = () => {
	if (checkIsJoystickHidden()) {
		joystick.classList.remove("hidden");
		checkPositionAndSetMargins();
	} else {
		joystick.classList.add("hidden");
	}
	saveJoystickVisibility();
};

/** Function to load joystick preferences to local storage */
const loadJoystickPreferences = () => {
	const hidden = localStorage.getItem("joystickHidden");
	const x = localStorage.getItem("joystickPositionX");
	const y = localStorage.getItem("joystickPositionY");
	if (hidden && checkIsJoystickHidden() !== (hidden === "true")) {
		toggleJoystickVisibility();
	}
	if (x && y) {
		joystick.style.left = x + "px";
		joystick.style.top = y + "px";
	}
};

/** Handler for screen resize event */
const onResizeHandler = () => {
	screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (!checkIsJoystickHidden()) { // save only if container visible
		checkPositionAndSetMargins();
	}
}
window.addEventListener('resize', onResizeHandler, true); // add listener to window resize

/* Add drag handlers for desktop */

/** Handler for mouse move event */
const onMouseMove = (e) => {
	e = e || window.event;
	e.preventDefault();
	updateJoystickContainerPos(e.clientX, e.clientY);
};

/** Handler for mouse up event */
const onMouseUp = () => {
	checkPositionAndSetMargins();

	// clear document handlers
	document.removeEventListener("mouseup", onMouseUp);
	document.removeEventListener("mousemove", onMouseMove);
};

joystickHeader.addEventListener("mousedown", (e) => {
	e = e || window.event;
	e.preventDefault();

	setStartJoystickContainerPos(e.clientX, e.clientY);

	// set document handlers to handle move
	document.addEventListener("mouseup", onMouseUp);
	document.addEventListener("mousemove", onMouseMove);
});

/* Add drag handlers for mobile */

joystickHeader.addEventListener("touchstart", (e) => {
	const touchPos = e.targetTouches[0];
	setStartJoystickContainerPos(touchPos.clientX, touchPos.clientY);
}, {passive: true});

joystickHeader.addEventListener("touchmove", (e) => {
	const touchPos = e.targetTouches[0];
	updateJoystickContainerPos(touchPos.clientX, touchPos.clientY);
}, {passive: true});

joystickHeader.addEventListener("touchend", checkPositionAndSetMargins);

/* Set handlers for open/hide joystick buttons */

document.getElementById("joystick-btn-close").onclick = toggleJoystickVisibility;
document.getElementById("show-hide-joystick-btn").onclick = toggleJoystickVisibility;

loadJoystickPreferences(); // load preferences
onResizeHandler(); // calculate screen size
