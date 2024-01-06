// загрузка изображений
const hero = new Image();
const bg = new Image();
const foreground = new Image();
const circle_mask = new Image();
const tree = new Image();
const tree2 = new Image();
const tree3 = new Image();
const gifts = [new Image(), new Image(), new Image(), new Image(), new Image()];
const finish = new Image();
const key = new Image();
const chest = new Image();
const bear = new Image();
const honey = new Image();
const portal = new Image();
const activePortal = new Image();
const magicWand = new Image();
const dialogAnn = new Image();
const dialogPasha = new Image();
const finalBg = new Image();
const tempImg = [new Image(), new Image(), new Image()];

hero.src = "img/heroDown.png";
bg.src = "img/bg.jpg";
foreground.src = "img/foreground.jpg";
circle_mask.src = "img/circle_mask.png";
tree.src = "img/tree.png";
tree2.src = "img/tree2.png";
tree3.src = "img/tree3.png";
finish.src = "img/Ann.png";
key.src = "img/key.png";
chest.src = "img/chest.png";
bear.src = "img/bear.png";
honey.src = "img/honey.png";
portal.src = "img/portal.png";
activePortal.src = "img/activePortal.png";
magicWand.src = "img/MagicWand.png";
finalBg.src = "img/Final_bg.jpg";
dialogAnn.src = "img/DialogAnn.png";
dialogPasha.src = "img/DialogPasha.png";
tempImg[0].src = "img/heroUp.png";
tempImg[1].src = "img/heroRight.png";
tempImg[2].src = "img/heroLeft.png";

// список всех картинок (нужен, чтобы реализовать загрузку)
const allImgs = [hero, tempImg[0], tempImg[1], tempImg[2], bg, foreground, circle_mask, tree, tree2, tree3, finish, key, chest, bear, honey, portal, activePortal, magicWand, finalBg, dialogAnn, dialogPasha];
for (let i = 0; i < gifts.length; i++) {
	gifts[i].src = "img/gift" + i + ".png";
	allImgs.push(gifts[i]);
}

let loadedImgs = 0; // счётчик загруженных изображений (для реализации загрузки)
const totalImgs = allImgs.length; // всего изображений

const INTRO_STRINGS = [
	"Вы оказались в лесу, в котором спрятаны подарки. Нужно найти их все и принести Ане",
	"Зайка, я постараюсь подарить тебе как можно больше", "... и чтобы было много подарков!",
	"Палики, я так хочу волшебный Новый год!", "Дааааа, он уже совсем близко!", "Ух ты, скоро Новый год!"
];
const INTRO_STRINGS_IMGS = [undefined, dialogPasha, dialogAnn, dialogAnn, dialogPasha, dialogAnn];
const STR_OPENING_CHEST = "Вы открыли сундук и нашли волшебную палочку";
const STR_CANNOT_OPEN_CHEST = "Для открытия сундука нужно собрать три ключа";
const STR_FEED_BEAR = "Медведю очень понравился мёд, он решил пропустить тебя дальше";
const STR_CANNOT_FEED_BEAR = "Чтобы медведь ушёл, его надо угостить мёдом";
const STR_OPEN_PORTAL = "С помощью волшебной палочки у тебя получилось открыть портал";
const STR_CANNOT_OPEN_PORTAL = "Без волшебной палочки портал не открыть";

const STR_TRY_ONE_MORE_TIME = "Попробуй поискать подарки ещё, и в этот раз ищи лучше";
const STR_TRY_TO_FIND_MORE_GIFTS = "В лесу спрятано больше подарков, поробуй найти их все";
const STR_FINAL = [
	[STR_TRY_ONE_MORE_TIME, "Аня, пожалуйста, не надо! Я обязательно их найду!", "Теперь я буду плакать", "Прости, зайка, они очень хорошо прятались", "Палики, ты что совсем не собрал для меня подарков?"],
	[STR_TRY_ONE_MORE_TIME, "Я точно уверена, что в лесу их больше", "Всего один?", "Ух ты подарок!", "С новым годом! Это тебе"],
	[STR_TRY_TO_FIND_MORE_GIFTS, "Я рад, что тебе понравилось!", "Ух ты, Палики! Целых два подарка. Спасибо!", "С Новым годом!"],
	[STR_TRY_TO_FIND_MORE_GIFTS, "Рад, что тебе понравиллось!", "Палики, так много подарков! Спасибо тебе большое!", "С новым годом, солнышко!"],
	[STR_TRY_TO_FIND_MORE_GIFTS, "Уверена, этот год у меня пройдет просто чудесно!", "Спасибо тебе большое!", "Ух тыыыыыыыыыыыы! Так много!", "Хочу вручить тебе эту гору подарков!", "Аня, поздравляю тебя с Новым годом!"],
	["Чтобы вернуться в игру нажми пробел или 'Enter'. Теперь тебе будет видна вся карта!", "Поздравляю! Ты собрал все подарки для Ани!", "Это просто волшебный Новый год!", "Паликииии! Спасибо большое!", "Наслаждайся каждым днём своей жизни!", "Мечтай! Ставь перед собой великие цели и обязательно добивайся их!", "Пусть этот год станет самым удивительным в твоей жизни!", "Аня, поздравляю тебя с Новым Годом!"]
];
const STR_FINAL_IMGS = [
	[undefined, dialogPasha, dialogAnn, dialogPasha, dialogAnn],
	[undefined, dialogAnn, dialogAnn, dialogAnn, dialogPasha],
	[undefined, dialogPasha, dialogAnn, dialogPasha],
	[undefined, dialogPasha, dialogAnn, dialogPasha],
	[undefined, dialogAnn, dialogAnn, dialogAnn, dialogPasha, dialogPasha],
	[undefined, undefined, dialogAnn, dialogAnn, dialogPasha, dialogPasha, dialogPasha, dialogPasha]
];

// модальное окно с текстовым сообщением (mb = message box)
const mbModal = document.getElementById("messageBox");
const mbText = document.getElementById("mbText");
const mbButton = document.getElementById("mbButton");
const mbImage = document.getElementById("mbImage");
mbButton.onclick = closeMessageBox;

const cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
const textHeight = 12;
ctx.font = textHeight + "px Calibri";

let curGrid = 0; // номер текущего игрового поля
let gameGrid = grids[curGrid]; // текущее игровое поле
function setGrid(newGrid) {
	curGrid = newGrid;
	gameGrid = grids[curGrid];
}

// перечисление сцен (stage)
const STAGES = {
	LOADING: 0, // загрузка
	GAME: 1, // игра
	FINAL: 2, // финальная сцена
};
let stage = STAGES.LOADING; // текущая сцена

let cellSize = 50; // размер клетки
const cellsAmountX = 19; // количество клеток минус одна (т.к. считаем с нуля)
const cellsAmountY = 19;
let heroPosX = 9; // позиция героя
let heroPosY = 11;

let isMapInvisible = true; // является ли карта невидимой (если true, то видно только небольшой радиус вокруг персонажа)

// функция изменения размеров canvas
function onResize() {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let size = (width < height) ? width : height;
	size -= 20; //небольшие поля
	cvs.height = size;
	cvs.width = size - size / 11; // вычитаем 1/11, так как высота на 1/11 больше ширины
	ctx = cvs.getContext("2d");
	ctx.font = textHeight + "px Calibri";
	cellSize = cvs.width / (cellsAmountX + 1);
}
window.addEventListener('resize', onResize, true); //добавление прослушивателя на изменения размеров окна

// создание массива изображений. Массив совпадает с расшифровкой клеток (см. пояснение перед массивом grid)
const cellType = ["", tree, tree2, tree3, gifts[0], gifts[1], gifts[2], gifts[3], gifts[4], finish, key, chest, bear, honey, portal, activePortal];

let inventory = []; // инвентарь
// подсчёт количества объектов в инвентаре. В качестве obj передаются объекты, который были объявлены, как Image
function countInInventory(obj) {
	return inventory.filter(elem => elem == obj).length;
}

const messageBoxList = []; // массив с сообщениями
class MessageBox {
	constructor(text, image) {
		this.text = text;
		this.image = image;
	}

	doOnClose() {}
}

// обновление текста на модальном окне с сообщением
function updateMessageBoxText() {
	const mb = messageBoxList[messageBoxList.length - 1];
	mbText.innerText = mb.text; // помещаем текст в модальное окно
	mbButton.innerText = messageBoxList.length > 1 ? "Далее" : "Закрыть"; // устанавливаем текст на кнопке

	// добавляем или убираем картинку
	if (mb.image) {
		mbImage.src = mb.image.src;
		mbImage.classList.remove("hidden");
		mbText.classList.remove("center-text");
	} else {
		mbImage.classList.add("hidden");
		mbText.classList.add("center-text");
	}
}

// добавление сообщения в список на вывод и открытие модального окна
function addMessageBox(text, image) {
	const mb = new MessageBox(text, image);
	messageBoxList.push(mb);

	if (mbModal.classList.contains("hidden") || mbText.innerText !== text) {
		mbModal.classList.remove("hidden");
		mbButton.focus();
		updateMessageBoxText();
	}
}

// закрытие сообщения
function closeMessageBox() {
	if (messageBoxList.length !== 0) { // если есть messageBox, то закрыть его
		messageBoxList[messageBoxList.length - 1].doOnClose();
		messageBoxList.pop();
	}
	if (messageBoxList.length === 0) { // спрятать модальное окно
		mbModal.classList.add("hidden");
	} else { // или изменить текст
		updateMessageBoxText();
	}
}

for (let i = 0; i < INTRO_STRINGS.length; i++) // заполнение массива сообщений стартовыми репликами
	addMessageBox(INTRO_STRINGS[i], INTRO_STRINGS_IMGS[i]);

// функция проверки: можно ли дальше идти (также выполняет действия с вещами)
// получает на вход новые координаты персонажа
function checkCell(x, y) {
	let canIGo = true;
	const oldCell = gameGrid[heroPosY][heroPosX];
	if (oldCell < 0) {

		// перемещение между полями
		// нужна, чтобы собранные предметы инвентаря не отрисовывались снова при возврате в "комнату"
		function relocation() {
			grids[curGrid] = gameGrid;
			setGrid(oldCell * (-1) - 1);
		}

		if (y > cellsAmountY) {
			relocation();
			heroPosY -= cellsAmountY;
			return false;
		}
		if (y < 0) {
			relocation();
			heroPosY += cellsAmountY;
			return false;
		}
		if (x > cellsAmountX) {
			relocation();
			heroPosX -= cellsAmountX;
			return false;
		}
		if (x < 0) {
			relocation();
			heroPosX += cellsAmountX;
			return false;
		}
	}

	function addToInventory(obj) {
		inventory.push(obj); // добавление предмета в инвентарь
		gameGrid[y][x] = 0;	// удаление элемента с карты
	}

	function removeFromInventory(obj) {
		inventory = inventory.filter(elem => elem != obj);
	}

	const newCell = gameGrid[y][x];
	switch (newCell) {
		case 0:
			break;
		case 1:
		case 2:
		case 3:
			canIGo = false;
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			addToInventory(gifts[newCell - 4]);
			break;
		case 9:
			let giftsCollected = 0; //счёт количества собранных подарков
			for (let i of gifts)
				giftsCollected += countInInventory(i); //добавление финальных реплик в зависимости от количества подарков
			for (let i = 0; i < STR_FINAL[giftsCollected].length; i++) {
				addMessageBox(STR_FINAL[giftsCollected][i], STR_FINAL_IMGS[giftsCollected][i]);
			}
			if (giftsCollected === 5) {//если собраны все подарки
				messageBoxList[0].doOnClose = function changeStage() {stage = STAGES.FINAL;}; // смена сцены на финальную открытку
				isMapInvisible = false; //сделать карту видимой
			}
			canIGo = false;
			break;
		case 10:
			addToInventory(key);
			break;
		case 11:
			if (countInInventory(key) === 3) {
				addMessageBox(STR_OPENING_CHEST);
				removeFromInventory(key);
				addToInventory(magicWand);
			} else {
				addMessageBox(STR_CANNOT_OPEN_CHEST);
				canIGo = false;
			}
			break;
		case 12:
			if (countInInventory(honey) === 1) {
				addMessageBox(STR_FEED_BEAR);
				removeFromInventory(honey);
				gameGrid[y][x] = 0;	// удаление элемента с карты
			} else {
				addMessageBox(STR_CANNOT_FEED_BEAR);
				canIGo = false;
			}
			break;
		case 13:
			addToInventory(honey);
			break;
		case 14:
			if (countInInventory(magicWand) !== 0) {
				addMessageBox(STR_OPEN_PORTAL);
				gameGrid[y][x] = 15; // сменить значение ячейки на активный портал
			} else addMessageBox(STR_CANNOT_OPEN_PORTAL);
			canIGo = false;
			break;
		case 15:
			// поиск координат портала и смена координат персонажа на координаты портала
			const portalHero = () => {
				for (let i = 0; i < gameGrid.length; i++) {
					for (let j = 0; j < gameGrid[i].length; j++) {
						if (gameGrid[i][j] === 15) {
							heroPosX = j;
							heroPosY = i;
						}
					}
				}
			}

			if (curGrid !== 9) {
				setGrid(9); // смена поля игры на бонусный уровень
				portalHero();
			} else {
				setGrid(7); // возвращение с бонусного уровня на основную карту
				portalHero();
			}
			canIGo = false;
			break;
	}
	return canIGo;
}

function heroUp() {
	if (messageBoxList.length === 0) { // если нет messageBox'ов
		hero.src = "img/heroUp.png";
		if (checkCell(heroPosX, heroPosY - 1)) {
			heroPosY -= 1;
		}
	}
}

function heroDown() {
	if (messageBoxList.length === 0) { // если нет messageBox'ов
		hero.src = "img/heroDown.png";
		if (checkCell(heroPosX, heroPosY + 1)) {
			heroPosY += 1;
		}
	}
}

function heroLeft() {
	if (messageBoxList.length === 0) { // если нет messageBox'ов
		hero.src = "img/heroLeft.png";
		if (checkCell(heroPosX - 1, heroPosY)) {
			heroPosX -= 1;
		}
	}
}

function heroRight() {
	if (messageBoxList.length === 0) { // если нет messageBox'ов
		hero.src = "img/heroRight.png";
		if (checkCell(heroPosX + 1, heroPosY)) {
			heroPosX += 1;
		}
	}
}

// координаты нажатия для отслеживания свайпов
let touchPositionStartX;
let touchPositionStartY;
let touchPositionEndX;
let touchPositionEndY;

// направления свайпов
const DIRECTIONS = {
	UP: 0,
	DOWN: 1,
	RIGHT: 2,
	LEFT: 3
};

// запоминаем координаты начала нажатия
cvs.addEventListener('touchstart', (event) => {
	touchPositionStartX = event.touches[0].pageX;
	touchPositionStartY = event.touches[0].pageY;
}, {passive: true});

// во время перемещения пальца по экрану - запоминаем последнюю координату, где был палец
cvs.addEventListener('touchmove', (event) => {
	touchPositionEndX = event.touches[0].pageX;
	touchPositionEndY = event.touches[0].pageY;
}, {passive: true});

// отслеживание конца нажатия
cvs.addEventListener('touchend', () => {
	let dir; // направление (смотри DIRECTIONS)
	let distX = touchPositionEndX - touchPositionStartX;
	let distY = touchPositionEndY - touchPositionStartY;
	if (
		touchPositionEndX !== 0 && touchPositionEndY !== 0 // если было перемещение, то эти переменные не будут равны нулю
		&& (Math.abs(distX) > 10 || Math.abs(distY) > 10) // и если перемещение было больше, чем на 10 px
	) {
		if (Math.abs(distX) > Math.abs(distY))
			dir = (distX < 0) ? DIRECTIONS.LEFT : DIRECTIONS.RIGHT;
		else dir = (distY < 0) ? DIRECTIONS.UP : DIRECTIONS.DOWN;
		switch (dir) {
			case DIRECTIONS.UP: //вверх
				heroUp();
				break;
			case DIRECTIONS.DOWN: //вниз
				heroDown();
				break;
			case DIRECTIONS.LEFT: //влево
				heroLeft();
				break;
			case DIRECTIONS.RIGHT: //вправо
				heroRight();
				break;
		}
	}

	// очистка данных о нажатиях
	touchPositionEndX = 0;
	touchPositionEndY = 0;
}, {passive: true});

// отслеживание нажатий
document.addEventListener('keydown', checkKey);

function checkKey(e) {
	switch (stage) {
		case STAGES.GAME: //игра
			if (e.code === 'ArrowUp' || e.code === 'KeyW') heroUp(); //вверх
			else if (e.code === 'ArrowDown' || e.code === 'KeyS') heroDown(); //вниз
			else if (e.code === 'ArrowLeft' || e.code === 'KeyA') heroLeft(); //влево
			else if (e.code === 'ArrowRight' || e.code === 'KeyD') heroRight(); //вправо
			break;

		case STAGES.FINAL: //финальная открытка
			if ((e.code === 'Enter') || (e.code === 'Space'))
				stage = STAGES.GAME; //вернуться в игру
			break;
	}
}

// добавляем обработчики нажатий для джойстика
document.getElementById("joystick-btn-top").onclick = heroUp;
document.getElementById("joystick-btn-bottom").onclick = heroDown;
document.getElementById("joystick-btn-left").onclick = heroLeft;
document.getElementById("joystick-btn-right").onclick = heroRight;
document.getElementById("joystick-btn-center").onclick = () => {
	if (messageBoxList.length === 0 && stage === STAGES.FINAL) { //финальная открытка
		stage = STAGES.GAME; //вернуться в игру
	} else {
		closeMessageBox();
	}
};

// предупреждение о том, что перезагрузка страницы сбросит игровой процесс
window.onbeforeunload = function () { return 'Перезагрузка или закрытие игры сбросят игровой процесс'; }

// функция отрисовки
function draw() {
	switch (stage) {
		case STAGES.LOADING: // загрузка
			ctx.drawImage(bg, 0, 0, cvs.width, cvs.height); // фон
			const text = "Загрузка изображений (" + loadedImgs + "/" + totalImgs + ")";
			const textParams = ctx.measureText(text);
			ctx.fillStyle = "black";
			ctx.fillText(text, cvs.width / 2 - textParams.width / 2, cvs.height / 2 - textHeight);
			ctx.strokeStyle = "green";
			const margin = cvs.width / 10;
			ctx.strokeRect(margin, cvs.height / 2 + margin, cvs.width - margin * 2, margin / 2);
			ctx.fillStyle = "green";
			ctx.fillRect(margin, cvs.height / 2 + margin, (cvs.width - margin * 2) * (loadedImgs / totalImgs), margin / 2);
			break;

		case STAGES.GAME: //игра
			ctx.drawImage(bg, 0, 0, cvs.width, cvs.height); // фон

			let i = 0, j = 0;
			for (let row of gameGrid) {
				i = 0;
				for (let cell of row) {
					if (cell > 0)
						ctx.drawImage(cellType[cell], cellSize * i, cellSize * j, cellSize, cellSize); //игровое поле
					i++;
				}
				j++;
			}

			ctx.drawImage(hero, heroPosX * cellSize, heroPosY * cellSize, cellSize, cellSize); //персонаж

			//убрать все, кроме видимой области (если карта не видна или если не бонусный уровень)
			if (isMapInvisible) {
				if (curGrid !== 9) {
					ctx.globalCompositeOperation = 'destination-in';
					ctx.drawImage(circle_mask, cellSize * heroPosX - cellSize * 4, cellSize * heroPosY - cellSize * 4, cellSize * 10, cellSize * 10);
					ctx.globalCompositeOperation = 'source-over';
				}
			}

			ctx.drawImage(foreground, 0, cvs.width, cvs.height, cvs.height / 10); // плашка для инвентаря
			if (inventory.length !== 0) {
				for (let i = 0; i < inventory.length; i++) {
					ctx.drawImage(inventory[i], cellSize * i * 2, cellSize * (cellsAmountY + 1), cellSize * 2, cellSize * 2); //предметы инвентаря
				}
			}
			break;

		case STAGES.FINAL: // финальная сцена
			ctx.drawImage(finalBg, 0, 0, cvs.width, cvs.height); // фон
			break;
	}

	requestAnimationFrame(draw); //зацикливание отрисовки
}

// добавление счётчика на загрузку картинок (для реализации загрузки)
// после загрузки последней картинки запускается игра
for (let img of allImgs) {
	img.onload = function () {
		loadedImgs += 1;
		if (loadedImgs === totalImgs)
			stage = STAGES.GAME; // переход к игре
	}
}
onResize(); // запуск подбора размера canvas и элементов
draw(); // запуск отрисовки
