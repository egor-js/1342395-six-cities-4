import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import testReviews from "../../mocks/test-reviews.js";

describe(`reviews test`, () => {
  it(`snapshot test review list`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            reviews = {testReviews}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
