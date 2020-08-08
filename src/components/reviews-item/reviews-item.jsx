import React from "react";
import PropTypes from 'prop-types';

const ReviewsItem = (props) => {
  const {review} = props;
  const {id, raiting, date, text, user} = review;
  const raitingpercents = (Math.round(raiting) * 20);

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={user.avatarurl} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${raitingpercents}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {text}
      </p>
      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
    </div>
  </li>;
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
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
};

export default ReviewsItem;
