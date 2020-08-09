import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import testData from "../../mocks/test-data.js";

const onAticleClick = function () {};
const onCardHover = function () {};

describe(`place card`, () => {
  it(`snapshot test place card`, () => {
    const tree = renderer
      .create(
          <PlaceCard
            place = {testData[0]}
            key = {0 + testData[0].title[0]}
            onAticleClick = {onAticleClick}
            onCardHover = {onCardHover}
            id = {0 + testData[0].title[0]}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
