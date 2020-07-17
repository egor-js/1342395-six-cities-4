import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const titles = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];
const onAticleClick = function () {};
const id = 0;

describe(`main-screen`, () => {
  it(`snapshot test main screen`, () => {
    const tree = renderer
      .create(
          <PlaceCard
            title = {titles[0]}
            key = {0 + titles[0][0]}
            onAticleClick = {onAticleClick}
            id = {id}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
