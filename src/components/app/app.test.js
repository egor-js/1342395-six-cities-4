import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const onArticleButtonClick = function () {};
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

describe(`app`, () => {
  it(`app test`, () => {
    const tree = renderer
      .create(
          <App
            onAticleClick = {onArticleButtonClick}
            places = {mocks}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
