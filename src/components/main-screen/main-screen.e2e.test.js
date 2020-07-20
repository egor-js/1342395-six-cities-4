import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

const titles = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e main-screen`, () => {
  it(`Should article link be pressed`, () => {
    const onAticleClick = jest.fn();

    const mainScreen = mount(
        <MainScreen
          titles = {titles}
          onAticleClick = {onAticleClick}
        />
    );
    const cards = mainScreen.find(`.place-card__name`);
    for (let i = 0; i < cards.length; i++) {
      const article = mainScreen.find(`a`).find(`[id=${i}]`);
      article.simulate(`click`, {preventDefault() {}});
    }
    expect(onAticleClick.mock.calls.length).toBe(cards.length);
  });
});
