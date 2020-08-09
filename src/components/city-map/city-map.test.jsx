import React from "react";
import renderer from "react-test-renderer";
import CityMap from "./city-map.jsx";
import testData from "../../mocks/test-data.js";

describe(`city map`, () => {
  it(`snapshot test city map`, () => {
    const div = global.document.createElement(`div`);
    div.setAttribute(`id`, `map`);
    global.document.body.appendChild(div);
    const tree = renderer
      .create(
          <CityMap
            places = {testData}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
