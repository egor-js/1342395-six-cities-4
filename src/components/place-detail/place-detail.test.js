import React from "react";
import renderer from "react-test-renderer";
import PlaceDetail from "./place-detail";
import testData from "../../mocks/test-data.js";

describe(`place detail`, () => {
  it(`snapshot test place detail`, () => {
    const tree = renderer
      .create(
          <PlaceDetail
            place = {testData[0]}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
