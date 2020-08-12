import React from "react";
import PropTypes from 'prop-types';
import PlacesList from "../places-list/places-list.jsx";
import CityMap from "../city-map/city-map.jsx";
import {connect} from "react-redux";
import CitiesList from "../cities-list/cities-list.jsx";
import {getPlacesInCity, getCitiesNames} from '../../utils.js';

const MainScreen = (props) => {
  const {onAticleClick, placesInCity, city, citiesNames} = props;
  const placeCount = placesInCity.length;
  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
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

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList
            city={city}
            citiesNames={citiesNames}
          />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placeCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <select className="places__sorting-type" id="places-sorting">
                <option className="places__option" value="popular">Popular</option>
                <option className="places__option" value="to-high">Price: low to high</option>
                <option className="places__option" value="to-low">Price: high to low</option>
                <option className="places__option" value="top-rated">Top rated first</option>
              </select>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <PlacesList
                places={placesInCity}
                onAticleClick={onAticleClick}
                mode = {`main`}
              />
            </div>
          </section>
          <div className="cities__right-section">
            {placesInCity ? <CityMap
              places={placesInCity}
              mode={`main`}
            /> : ``}
          </div>
        </div>
      </div>
    </main>
  </div>;
};

MainScreen.propTypes = {
  city: PropTypes.string.isRequired,
  citiesNames: PropTypes.arrayOf(PropTypes.string.isRequired),
  placesInCity: PropTypes.arrayOf(
      PropTypes.shape({
        photoUrl: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        raiting: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
      }).isRequired
  ).isRequired,
  onAticleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  placesInCity: getPlacesInCity(state),
  citiesNames: getCitiesNames(state.places),
});

export {MainScreen};
export default connect(mapStateToProps, null)(MainScreen);

