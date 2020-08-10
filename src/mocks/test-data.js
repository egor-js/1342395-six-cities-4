export const testData = [
  {
    photoUrl: `img/apartment-01.jpg`,
    photos: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    isPremium: true,
    price: 50,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Apartment`,
    raiting: 4.8,
    bedrooms: 2,
    guests: 3,
    features: [
      `wifi`,
      `washingmachine`,
      `towels`,
      `dishwasher`,
      `cabeltv`,
      `fridge`,
    ],
    host: {
      name: `Angelina`,
      avatarurl: `img/avatar-angelina.jpg`,
      super: true,
    },
    city: `Amsterdam`,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  {
    photoUrl: `img/apartment-02.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isPremium: true,
    price: 85,
    title: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Room`,
    raiting: 4.5,
    bedrooms: 1,
    guests: 1,
    features: [
      `wifi`,
      `towels`,
      `kitchen`,
      `fridge`,
    ],
    host: {
      name: `Angelina`,
      avatarurl: `img/avatar-angelina.jpg`,
      super: false,
    },
    city: `Amsterdam`,
    coordinates: [52.369553943508, 4.85309666406198],
  },
  {
    photoUrl: `img/apartment-03.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isPremium: false,
    price: 42,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `House`,
    raiting: 3.8,
    bedrooms: 4,
    guests: 8,
    features: [
      `wifi`,
      `washingmachine`,
      `towels`,
      `heating`,
      `coffeemachine`,
      `babyseat`,
      `kitchen`,
      `dishwasher`,
      `cabeltv`,
      `fridge`,
    ],
    host: {
      name: `Angelina`,
      avatarurl: `img/avatar-angelina.jpg`,
      super: true,
    },
    city: `Amsterdam`,
    coordinates: [52.3909553943508, 4.929309666406198],
  },
  {
    photoUrl: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isPremium: false,
    price: 22,
    title: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    text: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: `Hotel`,
    raiting: 2.9,
    bedrooms: 2,
    guests: 4,
    features: [
      `wifi`,
      `towels`,
      `coffeemachine`,
      `cabeltv`,
      `fridge`,
    ],
    host: {
      name: `Angelina`,
      avatarurl: `img/avatar-angelina.jpg`,
      super: false,
    },
    city: `Amsterdam`,
    coordinates: [52.3809553943508, 4.939309666406198],
  },
];

export const reviews = [
  {
    id: `00`,
    placeid: `0B`,
    raiting: 4,
    date: `2019-04-24`,
    user: {
      name: `Max`,
      avatarurl: `img/avatar-max.jpg`,
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    id: `01`,
    placeid: `1W`,
    raiting: 4,
    date: `2019-04-24`,
    user: {
      name: `Max`,
      avatarurl: `img/avatar-max.jpg`,
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    id: `02`,
    placeid: `2C`,
    raiting: 4,
    date: `2019-04-24`,
    user: {
      name: `Max`,
      avatarurl: `img/avatar-max.jpg`,
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    id: `03`,
    placeid: `3N`,
    raiting: 4,
    date: `2019-04-24`,
    user: {
      name: `Max`,
      avatarurl: `img/avatar-max.jpg`,
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    id: `04`,
    placeid: `1W`,
    raiting: 4,
    date: `2019-04-24`,
    user: {
      name: `Max`,
      avatarurl: `img/avatar-max.jpg`,
    },
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }
];
