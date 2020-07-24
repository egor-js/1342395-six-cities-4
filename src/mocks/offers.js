export default [
  {
    photoUrl: `img/apartment-01.jpg`,
    isPremium: false,
    price: 50,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    raiting: 5,
  },
  {
    photoUrl: `img/apartment-02.jpg`,
    isPremium: true,
    price: 85,
    title: `Wood and stone place`,
    type: `Room`,
    raiting: 4,
  },
  {
    photoUrl: `img/apartment-03.jpg`,
    isPremium: false,
    price: 42,
    title: `Canal View Prinsengracht`,
    type: `House`,
    raiting: 3,
  },
  {
    photoUrl: `img/apartment-01.jpg`,
    isPremium: false,
    price: 22,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Hotel`,
    raiting: 2,
  },
];

/*
Каждая карточка в списке предложений содержит информацию:

    Изображение. Фотография жилья.
    Премиальность. Метка «Premium».
    Стоимость за ночь. Стоимость всегда отображается в евро.
    Заголовок. Краткое описание предложения. Например: «Beautiful & luxurious apartment at great location».
    Тип жилья. Одно из нескольких значений: apartment, room, house, hotel.
    Рейтинг. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5. Оценка пользователя округляется до ближайшего целого. Например, оценка 3.1 округляется до 3-х. Оценка 4.5 округляется до 5.
*/
