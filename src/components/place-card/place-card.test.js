import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const onAticleClick = function () {};
const onCardHover = function () {};
const mocks = [
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

describe(`place card`, () => {
  it(`snapshot test place card`, () => {
    const tree = renderer
      .create(
          <PlaceCard
            place = {mocks[0]}
            key = {0 + mocks[0].title[0]}
            onAticleClick = {onAticleClick}
            onCardHover = {onCardHover}
            id = {0 + mocks[0].title[0]}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
