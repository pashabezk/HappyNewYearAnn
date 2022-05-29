// игровые поля:
// 0 - пусто
// 1-3 - деревья
// 4-8 - подарки
// 9 - финиш
// 10 - ключ
// 11 - сундук
// 12 - медведь
// 13 - мёд
// 14 - неактивный портал
// 15 - активный портал
// отрицательное значение - переход между картами (переход совершается на номер указанного поля минус единица)
var grids = [
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2],
[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
[1, 4, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
[1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
[1, 1, -4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -4, 1, 1, 1, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 11, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
[1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
[1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, -3],
[1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, -5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 1],
[1, 0, 2, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 1],
[1, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2, 0, 0, 2, 0, 2, 0, 2, 0, 1],
[1, 0, 2, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 1],
[1, 0, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
[-2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 2, 0, 2, 0, 2, 2, 2, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 1],
[1, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
[1, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 0, 0, 1],
[1, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 2, 0, 2, 0, 1],
[1, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1],
[1, -6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
[1, 1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
[1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],
[1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1],
[1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
[1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, -5],
[1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
[1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
[1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 6, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -7, 1, 1, 1, 1, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, -2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
[1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
[1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
[1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
[-4, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
[1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 9, 0, 0, 2, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 0, -6],
[1, 1, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
[1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
[1, 10, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
[1, -3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
[1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
[1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
[-5, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 7, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -9, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -4, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 2, 2, 0, 1, 1, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
[1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1],
[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 1],
[1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
[1, 0, 0, 0, 1, 1, 10, 0, 1, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 2, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
[1, 0, 2, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
[1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 0, 1],
[1, 0, 2, 0, 0, 0, 2, 0, 1, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0, -8],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 13, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -9],
[1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
[1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 1, 0, 0, 1, 14, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
[1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
[1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
[1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
[-7, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -6, 1],
[-8, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 8, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 0, 12, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 0, 10, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	[
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 3, 3, 3, 0, 0, 1],
[1, 0, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 1],
[1, 0, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 0, 0, 0, 1],
[1, 0, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 1],
[1, 0, 3, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 3, 3, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 2, 2, 2, 0, 1],
[1, 0, 2, 0, 2, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 2, 0, 2, 0, 1],
[1, 0, 2, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1],
[1, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	]
];

var INTRO_STRINGS = ["Вы оказались в лесу, в котором спрятаны подарки. Нужно найти их все и принести Ане",
	"Паша: Зайка, я постараюсь собрать как можно больше", "Аня: ... и чтобы было много подарков!",
	"Аня: Палики, я так хочу волшебный Новый год!", "Паша: Дааааа", "Аня: Ух ты, скоро Новый год!"
];
var STR_PRESS_SPACE_TO_CONTINUE = "Нажмите пробел, чтобы продолжить";
var STR_PRESS_SPACE_TO_CLOSE = "Нажмите пробел, чтобы закрыть";
var STR_START_JOURNEY = "Нажми пробел, чтобы начать приключение!";
var STR_OPENING_CHEST = "Вы открыли сундук и нашли волшебную палочку";
var STR_CANNOT_OPEN_CHEST = "Для открытия сундука нужно собрать три ключа";
var STR_FEED_BEAR = "Медведю очень понравился мёд, он решил пропустить тебя дальше";
var STR_CANNOT_FEED_BEAR = "Чтобы медведь ушёл, его надо угостить мёдом";
var STR_OPEN_PORTAL = "С помощью волшебной палочки у тебя получилось открыть портал";
var STR_CANNOT_OPEN_PORTAL = "Без волшебной палочки портал не открыть";

var STR_HAPPY_NEW_YEAR = "С новым годом!";
var STR_TRY_ONE_MORE_TIME = "Попробуй поискать подарки ещё, и в этот раз ищи лучше";
var STR_TRY_TO_FIND_MORE_GIFTS = "В лесу спрятано больше подарков, поробуй найти их все";
var STR_FINAL = [
	[STR_TRY_ONE_MORE_TIME, "Паша: Аня, пожалуйста, не надо! Я обязательно их найду!", "Аня: Теперь я буду плакать", "Паша: Прости, зайка, они очень хорошо прятались", "Аня: Палики, ты что совсем не собрал для меня подарков?"],
	[STR_TRY_ONE_MORE_TIME, "Аня: Я точно уверена, что в лесу их больше", "Аня: Всего один?", "Аня: Ух ты подарок!", "Паша: С новым годом! Это тебе"],
	[STR_TRY_TO_FIND_MORE_GIFTS, "Паша: Я рад, что тебе понравилось!", "Аня: Ух ты, Палики! Целых два подарка. Спасибо!", "Паша: С Новым годом!"],
	[STR_TRY_TO_FIND_MORE_GIFTS, "Паша: Рад, что тебе понравиллось!", "Аня: Палики, так много подарков! Спасибо тебе большое!", "Паша: С новым годом, солнышко!"],
	[STR_TRY_TO_FIND_MORE_GIFTS, "Аня: Уверена, этот год у меня пройдет просто чудесно!", "Аня: Спасибо тебе большое!", "Аня: Ух тыыыыыыыыыыыы! Так много!", "Паша: Хочу вручить тебе эту гору подарков!", "Паша: Аня, поздравляю тебя с Новым годом!"],
	["Поздравляю! Ты собрал все подарки для Ани!", "Аня: Это просто волшебный Новый год!", "Аня: Паликииии! Спасибо большое!", "Паша: Наслаждайся каждым днём своей жизни!", "Паша: Мечтай! Ставь перед собой великие цели и обязательно добивайся их!", "Паша: Пусть этот год станет самым удивительным в твоей жизни!", "Паша: Аня, поздравляю тебя с Новым Годом!"]
];

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var textHeight = 12;
ctx.font = textHeight + "px Calibri";
var scale = 1; // масштаб 

var curGrid = 0; // номер текущего игрового поля
var gameGrid = grids[curGrid]; // текущее игровое поле
function setGrid(newGrid) {
	curGrid = newGrid;
	gameGrid = grids[curGrid];
}

// stage - сцена
// 0 - загрузка
// 1 - игра
// 2 - финал
var stage = 0;

var cellSize = 50; //размер клетки
var cellsAmountX = 19; //количество клеток минус одна (т.к. считаем с нуля)
var cellsAmountY = 19;
var heroPosX = 0; //позиция героя
var heroPosY = 0;

var isMapInvisible = true; //является ли карта невидимой (если true, то видно только небольшой радиус вокруг персонажа)

// функция изменения размеров canvas
function onResize (event) {
	const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	size = (width<height) ? width : height;
	size -= 30; //небольшие поля
	cvs.height = size;
	cvs.width = size-size/11; // вычитаем 1/11, так как высота на 1/11 больше ширины
	ctx = cvs.getContext("2d");
	ctx.font = textHeight + "px Calibri";
	scale = cvs.width/1000; //делим на 1000, т.к. изначально вся разметка прописывалась исходя из гирины в 1000px
	cellSize = cvs.width/(cellsAmountX+1);
}
window.addEventListener('resize', onResize, true); //добавление прослушивателя на изменения размеров окна

// загрузка изображений
var hero = new Image();
var bg = new Image();
var foreground = new Image();
var circle_mask = new Image();
var tree = new Image();
var tree2 = new Image();
var tree3 = new Image();
var gifts = [new Image(), new Image(), new Image(), new Image(), new Image()];
var finish = new Image();
var key = new Image();
var chest = new Image();
var bear = new Image();
var honey = new Image();
var portal = new Image();
var activePortal = new Image();
var magicWand = new Image();
var finalBg = new Image();


hero.src = "img/heroUp.png";
hero.src = "img/heroLeft.png";
hero.src = "img/heroRight.png";
hero.src = "img/heroDown.png"; // изначальная позиция героя - вниз, но остальные картинки тоже надо загрузить заранее
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
finalBg.src = "img/Final bg.jpg";

var allImgs = [hero, bg, foreground, circle_mask, tree, tree2, tree3, finish, key, chest, bear, honey, portal, activePortal, magicWand, finalBg]; // список всех картинок (нужен, чтобы реализовать загрузку)

for (var i=0; i<gifts.length; i++) {
	gifts[i].src = "img/gift"+i+".png";
	allImgs.push(gifts[i]);
}

var loadedImgs = 0; // счётчик загруженных изображений (для реализации загрузки)
var totalImgs = allImgs.length; // всего изображений

// создание массива изображений. Массив совпадает с расшифровкой клеток (см. пояснение перед массивом grid)
var cellType = ["", tree, tree2, tree3, gifts[0], gifts[1], gifts[2], gifts[3], gifts[4], finish, key, chest, bear, honey, portal, activePortal];

var inventory = new Array(); // инвентарь
// количество объектов в инвентаре. В качестве obj передаются объекты, который были объявлены, как Image
function countInInventory(obj) {
	return inventory.filter(elem => elem==obj).length;
}

var messageBoxList = new Array(); // массив с сообщениями
class MessageBox {
	constructor(text, subText) {
		this.text = text;
		this.subText = subText;
	}

	doOnClose() {;}
}

for (var i of INTRO_STRINGS) // заполнение массива стартовыми репликами
	messageBoxList.push(new MessageBox(i, STR_PRESS_SPACE_TO_CONTINUE));
messageBoxList[0].subText = STR_START_JOURNEY;

// функция проверки: можно ли дальше идти (также выполняет действия с вещами)
// получает на вход новые координаты персонажа
function checkCell (x, y) {	
	var canIGo=true;
	var oldCell = gameGrid[heroPosY][heroPosX];
	if (oldCell < 0) {

		// перемещение между полями
		// нужна, чтобы собранные предметы инвентаря не отрисовывались снова при возврате в "комнату"
		function relocation() {
			grids[curGrid] = gameGrid;
			setGrid(oldCell*(-1)-1);
		}

		if(y>cellsAmountY) {
			relocation();
			heroPosY -= cellsAmountY;
			return false;
		}
		if(y<0) {
			relocation();
			heroPosY += cellsAmountY;
			return false;
		}
		if(x>cellsAmountX) {
			relocation();
			heroPosX -= cellsAmountX;
			return false;
		}
		if(x<0) {
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

	var newCell = gameGrid[y][x];
	switch(newCell) {
		case 0: break;
		case 1:
		case 2:
		case 3:
			canIGo=false;
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			addToInventory(gifts[newCell-4]);
			break;
		case 9:
			var giftsCollected = 0; //счёт количества собранных подарков
			for (var i of gifts)
				giftsCollected += countInInventory(i);
			for(var i of STR_FINAL[giftsCollected]) //добавление финальных реплик в зависимости от количества подарков
				messageBoxList.push(new MessageBox(i, STR_PRESS_SPACE_TO_CONTINUE));
			if(giftsCollected == 5) {//если собраны все подарки
				messageBoxList[0].subText = STR_HAPPY_NEW_YEAR;
				messageBoxList[0].doOnClose = function changeStage() {stage=2;}; // смена сцены на финальную открытку
				isMapInvisible = false; //сделать карту видимой
			}
			canIGo=false;
			break;
		case 10:
			addToInventory(key);
			break;
		case 11:
			if (countInInventory(key) == 3) {
				messageBoxList.push(new MessageBox(STR_OPENING_CHEST, STR_PRESS_SPACE_TO_CLOSE));
				removeFromInventory(key);
				addToInventory(magicWand);
			}
			else {
				messageBoxList.push(new MessageBox(STR_CANNOT_OPEN_CHEST, STR_PRESS_SPACE_TO_CLOSE));
				canIGo=false;
			}
			break;
		case 12:
			if (countInInventory(honey) == 1) {
				messageBoxList.push(new MessageBox(STR_FEED_BEAR, STR_PRESS_SPACE_TO_CLOSE));
				removeFromInventory(honey);
				gameGrid[y][x] = 0;	// удаление элемента с карты
			}
			else {
				messageBoxList.push(new MessageBox(STR_CANNOT_FEED_BEAR, STR_PRESS_SPACE_TO_CLOSE));
				canIGo=false;
			}
			break;
		case 13:
			addToInventory(honey);
			break;
		case 14:
			if (countInInventory(magicWand) != 0) {
				messageBoxList.push(new MessageBox(STR_OPEN_PORTAL, STR_PRESS_SPACE_TO_CLOSE));
				gameGrid[y][x] = 15; // сменить значение ячейки на активный портал
			}
			else messageBoxList.push(new MessageBox(STR_CANNOT_OPEN_PORTAL, STR_PRESS_SPACE_TO_CLOSE));
			canIGo=false;
			break;
		case 15:
			// поиск координат портала и смена координат персонажа на координаты портала
			function portalHero() {
				for (var i=0; i<gameGrid.length; i++) {
					for (var j=0; j<gameGrid[i].length; j++) {
						if(gameGrid[i][j] == 15) {
							heroPosX = j;
							heroPosY = i;
						}
					}
				}
			}

			if (curGrid != 9) {
				setGrid(9); // смена поля игры на бонусный уровень
				portalHero();
			}
			else {
				setGrid(7); // возвращение с бонусного уровня на основную карту
				portalHero();
			}
			canIGo=false;
			break;
	}
	return canIGo;
}

//отслеживание нажатий
document.addEventListener('keydown', function(event) {checkKey(event);});
function checkKey(e) {
	switch(stage) {
		case 1: //игра
			// если есть messageBox, то закрыть его по нажатию пробела
			if (messageBoxList.length != 0) {
					if(e.code == 'Space') {
						messageBoxList[messageBoxList.length-1].doOnClose();
						messageBoxList.pop();
					}
			}
			else {
				if (e.code == 'ArrowUp') { //вверх
					hero.src = "img/heroUp.png";
					if(checkCell(heroPosX, heroPosY-1)) {
						heroPosY -= 1;
					}
				}

				if (e.code == 'ArrowDown') { //вниз
					hero.src = "img/heroDown.png";
					if(checkCell(heroPosX, heroPosY+1)) {
						heroPosY += 1;
					}
				}

				if(e.code == 'ArrowLeft') { //влево
					hero.src = "img/heroLeft.png";
					if(checkCell(heroPosX-1, heroPosY)) {
						heroPosX-=1;
					}
				}

				if(e.code == 'ArrowRight') { //вправо
					hero.src = "img/heroRight.png";
					if(checkCell(heroPosX+1, heroPosY)) {
						heroPosX+=1;
					}
				}
			}
			break;

		case 2: //финальная открытка
			if(e.code == 'Enter')
				stage=1; //вернуться в игру
			break;
	}		
}

// эмуляция рисунка MessageBox
function drawMessageBox() {
	var text = messageBoxList[messageBoxList.length-1].text; //текст для вывода
	var textParams = ctx.measureText(text);
	var subText = messageBoxList[messageBoxList.length-1].subText; //текст с инструкцией
	var subTextParams = ctx.measureText(subText);
	var margins = 20; // поля
	var msgBoxWidth = margins*2 + ((textParams.width>subTextParams.width) ? textParams.width : subTextParams.width); //определение ширины
	var msgBoxHeight = margins*6 + textHeight*2; // определение высоты
	ctx.fillStyle = "white";
	ctx.fillRect((cvs.width - msgBoxWidth)/2, (cvs.height - msgBoxHeight)/2, msgBoxWidth, msgBoxHeight);
	ctx.fillStyle = "black";
	ctx.fillText(text, cvs.width/2 - textParams.width/2, cvs.height/2  - textHeight);
	ctx.fillStyle = "darkviolet";
	ctx.fillText(subText, cvs.width/2 - subTextParams.width/2, cvs.height/2 + margins/2 + textHeight);
}

// функция отрисовки
function draw () {
	switch(stage) {
		case 0: // загрузка
			ctx.drawImage(bg, 0, 0, cvs.width, cvs.height); // фон
			var text = "Загрузка изображений (" + loadedImgs + "/" + totalImgs + ")";
			var textParams = ctx.measureText(text);
			ctx.fillStyle = "black";
			ctx.fillText(text, cvs.width/2 - textParams.width/2, cvs.height/2  - textHeight);
			ctx.strokeStyle = "green";
			var margin = cvs.width/10;
			ctx.strokeRect(margin, cvs.height/2 + margin, cvs.width - margin*2, margin/2);
			ctx.fillStyle = "green";
			ctx.fillRect(margin, cvs.height/2 + margin, (cvs.width - margin*2)*(loadedImgs/totalImgs), margin/2);
			break;

		case 1: //игра
			ctx.drawImage(bg, 0, 0, cvs.width, cvs.height); // фон

			var i=0, j=0;
			for (var row of gameGrid) {
				i=0;
				for (var cell of row) {
					if(cell>0)
						ctx.drawImage(cellType[cell], cellSize*i, cellSize*j, cellSize, cellSize); //игровое поле
					i++;
				}
				j++;
			}

			ctx.drawImage(hero, heroPosX*cellSize, heroPosY*cellSize, cellSize, cellSize); //персонаж

			//убрать все, кроме видимой области (если карта не видна или если не бонусный уровень)
			if (isMapInvisible) {
				if (curGrid != 9) {
					ctx.globalCompositeOperation = 'destination-in';
					ctx.drawImage(circle_mask, cellSize*heroPosX-cellSize*4, cellSize*heroPosY-cellSize*4, cellSize*10, cellSize*10);
					ctx.globalCompositeOperation = 'source-over';
				}
			}

			ctx.drawImage(foreground, 0, cvs.width, cvs.height, cvs.height/10); // плашка для инвентаря
			if(inventory.length != 0) {
				for (var i=0; i < inventory.length; i++) {
					ctx.drawImage(inventory[i], cellSize*i*2, cellSize*(cellsAmountY+1), cellSize*2, cellSize*2); //предметы инвентаря
				}
			}

			if(messageBoxList.length != 0)
				drawMessageBox();
			break;

		case 2: // финальная сцена
			ctx.drawImage(finalBg, 0, 0, cvs.width, cvs.height); // фон
			break;
	}

	requestAnimationFrame(draw); //зацикливание отрисовки
}

// функция запуска. Задаёт параметры начального расположения героя на сетке
function start (hero_x, hero_y) {
	heroPosX = hero_x;
	heroPosY = hero_y;
	stage = 1; // переход к игре
}

// добавление счётчика на загрузку картинок (для реализации загрузки)
for (var img of allImgs) {
	img.onload = function() {
		loadedImgs += 1;
	}
}

// функция запуска запуска. Нужна, чтобы загрузились все картинки перед игрой
finalBg.onload = function() {
	loadedImgs += 1;
	start(9, 11);
}
onResize(); // запуск подбора размера canvas и элементов
draw(); // запуск отрисовки