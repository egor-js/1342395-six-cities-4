import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";
import {testData} from "../../mocks/test-data.js";

const onArticleButtonClick = function () {};

describe(`main-screen`, () => {
  it(`snapshot test main screen`, () => {
    const div = global.document.createElement(`div`);
    div.setAttribute(`id`, `map`);
    global.document.body.appendChild(div);
    const tree = renderer
      .create(
          <MainScreen
            onAticleClick = {onArticleButtonClick}
            places = {testData}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
