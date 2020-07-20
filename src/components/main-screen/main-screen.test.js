import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";

const titles = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];
const onArticleButtonClick = function () {};

describe(`main-screen`, () => {
  it(`snapshot test main screen`, () => {
    const tree = renderer
      .create(
          <MainScreen
            titles = {titles}
            onAticleClick = {onArticleButtonClick}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
