import React from "react";
import PropTypes from 'prop-types';
import {PlaceFeatures} from '../../const.js';
import ReviewsList from "../reviews-list/reviews-list.jsx";
import CityMap from "../city-map/city-map.jsx";
import PlacesList from "../places-list/places-list.jsx";

const PlaceDetail = (props) => {
  const {
    photos, isPremium, price, title,
    type, raiting, bedrooms, guests,
    features, text, description, host} = props.place;
  const raitingpercents = (Math.round(raiting) * 20);

  const featuresLi = features.map((item, i) => {
    return (<li key={i + item[0]} className="property__inside-item">
      {PlaceFeatures[item]}
    </li>);
  });

  const photosdiv = photos.map((item, i) => {
    return (<div key={i + item[0]} className="property__image-wrapper">
      <img className="property__image" src={item} alt="Photo studio" />
    </div>);
  });

  const placesMap = <CityMap
    places = {props.otherPlaces}
    mode = {`detail`}
  />;

  const otherPlaces = <PlacesList
    places = {props.otherPlaces}
    onAticleClick = {props.onAticleClick}
    mode = {`detail`}
  />;

  return <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {photosdiv}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium &&
            <div className="property__mark">
              <span>Premium</span>
            </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${raitingpercents}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{raiting}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {guests} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {featuresLi}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={host.super ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper` : `property__avatar-wrapper user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={host.avatarurl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {text}
                </p>
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList
                reviews = {props.reviews}
              />
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        {placesMap}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            {otherPlaces}

          </div>
        </section>
      </div>
    </main>
  </div>;
};

PlaceDetail.propTypes = {
  onAticleClick: PropTypes.func.isRequired,
  otherPlaces: PropTypes.arrayOf(
      PropTypes.shape({
        photoUrl: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(PropTypes.string.isRequired),
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        raiting: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(PropTypes.string.isRequired),
        host: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatarurl: PropTypes.string.isRequired,
          super: PropTypes.bool.isRequired,
        }),
        city: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
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
  ).isRequired,
  place: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired),
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    raiting: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string.isRequired),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarurl: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }),
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaceDetail;
