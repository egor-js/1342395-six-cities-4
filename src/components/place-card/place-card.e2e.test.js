import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

const titles = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];
const i = 0;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e place-card`, () => {
  it(`Should article link be pressed`, () => {
    const onAticleClick = jest.fn();

    const mainScreen = mount(
        <PlaceCard
          title = {titles[0]}
          onAticleClick = {onAticleClick}
          id = {i}
        />
    );
    const article = mainScreen.find(`.place-card__name`).find(`a`).at(0);//  .find(`[id=${0}]`); .at(0)
    article.simulate(`click`, {preventDefault() {}});

    expect(onAticleClick.mock.calls.length).toBe(1);
  });
});
