import React from "react";
import renderer from "react-test-renderer";
import PlaceDetail from "./place-detail";

const mocks = [
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
  },
];

describe(`place detail`, () => {
  it(`snapshot test place detail`, () => {
    const tree = renderer
      .create(
          <PlaceDetail
            place = {mocks[0]}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
