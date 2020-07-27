import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e main-screen`, () => {
  it(`Should article link be pressed`, () => {
    const onAticleClick = jest.fn();

    const mainScreen = mount(
        <MainScreen
          onAticleClick = {onAticleClick}
          places = {mocks}
        />
    );
    const cards = mainScreen.find(`.place-card__name`);
    for (let i = 0; i < cards.length; i++) {
      const article = mainScreen.find(`.place-card__name`).find(`a`).at(0);
      article.simulate(`click`, {preventDefault() {}});
    }
    expect(onAticleClick.mock.calls.length).toBe(cards.length);
  });
});
