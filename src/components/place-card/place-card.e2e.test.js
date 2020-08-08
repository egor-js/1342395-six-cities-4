import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";
import {testData} from "../../mocks/test-data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e place-card`, () => {
  it(`Should article link be pressed`, () => {
    const onAticleClick = jest.fn();
    const onCardHover = function () {};
    const mainScreen = mount(
        <PlaceCard
          place = {testData[0]}
          key = {0 + testData[0].title[0]}
          onAticleClick = {onAticleClick}
          onCardHover = {onCardHover}
          id = {0 + testData[0].title[0]}
          mode = {`main`}
        />
    );
    const article = mainScreen.find(`.place-card__name`).find(`a`).at(0);
    article.simulate(`click`, {preventDefault() {}});

    expect(onAticleClick.mock.calls.length).toBe(1);
  });
  it(`Should card be hovered`, () => {
    const onCardHover = jest.fn();
    const onAticleClick = function () {};
    const mainScreen = mount(
        <PlaceCard
          place = {testData[0]}
          key = {0 + testData[0].title[0]}
          onAticleClick = {onAticleClick}
          onCardHover = {onCardHover}
          id = {0 + testData[0].title[0]}
          mode = {`main`}zzZ
        />
    );
    const article = mainScreen.find(`.cities__place-card.place-card`);
    // console.log(article.debug());
    article.simulate(`mouseover`); // , {preventDefault() {}}

    expect(onCardHover.mock.calls.length).toBe(1);
  });
});
