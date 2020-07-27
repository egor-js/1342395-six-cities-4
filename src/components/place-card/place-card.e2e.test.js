import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";


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

describe(`e2e place-card`, () => {
  it(`Should article link be pressed`, () => {
    const onAticleClick = jest.fn();
    const onCardHover = function () {};
    const mainScreen = mount(
        <PlaceCard
          place = {mocks[0]}
          key = {0 + mocks[0].title[0]}
          onAticleClick = {onAticleClick}
          onCardHover = {onCardHover}
          id = {0 + mocks[0].title[0]}
        />
    );
    const article = mainScreen.find(`.place-card__name`).find(`a`).at(0);//  .find(`[id=${0}]`); .at(0)
    article.simulate(`click`, {preventDefault() {}});

    expect(onAticleClick.mock.calls.length).toBe(1);
  });
  it(`Should card be hovered`, () => {
    const onCardHover = jest.fn();
    const onAticleClick = function () {};
    const mainScreen = mount(
        <PlaceCard
          place = {mocks[0]}
          key = {0 + mocks[0].title[0]}
          onAticleClick = {onAticleClick}
          onCardHover = {onCardHover}
          id = {0 + mocks[0].title[0]}
        />
    );
    const article = mainScreen.find(`.cities__place-card.place-card`);
    // console.log(article.debug());
    article.simulate(`mouseover`); // , {preventDefault() {}}

    expect(onCardHover.mock.calls.length).toBe(1);
  });
});
