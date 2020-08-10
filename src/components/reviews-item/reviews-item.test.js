import React from "react";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import renderer from "react-test-renderer";
import testReviews from "../../mocks/test-reviews.js";

describe(`reviews test`, () => {
  it(`snapshot test review item`, () => {
    const tree = renderer
      .create(
          <ReviewsItem
            review = {testReviews[0]}
          />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
