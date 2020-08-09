import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";
import testData from "../../mocks/test-data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e main-screen`, () => {
  it(`Should article link be pressed`, () => {
    const onAticleClick = jest.fn();
    const div = global.document.createElement(`div`);
    div.setAttribute(`id`, `map`);
    global.document.body.appendChild(div);
    const mainScreen = mount(
        <MainScreen
          onAticleClick = {onAticleClick}
          places = {testData}
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
