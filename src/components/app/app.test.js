import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {testData} from "../../mocks/test-data.js";

const onArticleButtonClick = function () {};

describe(`app`, () => {
  it(`app test`, () => {
    const div = global.document.createElement(`div`);
    div.setAttribute(`id`, `map`);
    global.document.body.appendChild(div);
    const tree = renderer
      .create(
          <App
            onAticleClick = {onArticleButtonClick}
            places = {testData}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
