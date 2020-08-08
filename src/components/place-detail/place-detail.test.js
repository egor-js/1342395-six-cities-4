import React from "react";
import renderer from "react-test-renderer";
import PlaceDetail from "./place-detail";
import {testData, reviews} from "../../mocks/test-data.js";

describe(`place detail`, () => {
  it(`snapshot test place detail`, () => {
    const div = global.document.createElement(`div`);
    div.setAttribute(`id`, `map`);
    global.document.body.appendChild(div);
    const tree = renderer
      .create(
          <PlaceDetail
            place = {testData[0]}
            reviews = {reviews}
            otherPlaces = {testData}
            onAticleClick= {() => {}}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
