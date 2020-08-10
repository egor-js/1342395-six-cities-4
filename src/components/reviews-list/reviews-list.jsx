import React from "react";
import PropTypes from 'prop-types';
import ReviewsItem from "../reviews-item/reviews-item.jsx";

const ReviewsList = (props) => {
  const {reviews} = props;
  const reviewsList = reviews.map((item) => {
    return <ReviewsItem
      review = {item}
      key = {item.id}
    />;
  });
  const reviewsCount = reviews.length;
  return (
    <React.Fragment>
      <h2 className="reviews__title">
      Reviews &middot;
        <span className="reviews__amount">
          {reviewsCount}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
    </React.Fragment>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        placeid: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        raiting: PropTypes.number.isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatarurl: PropTypes.string.isRequired,
        }),
      }).isRequired
  ).isRequired
};

export default ReviewsList;
