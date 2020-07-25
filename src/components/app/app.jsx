import React from "react";
import PropTypes from 'prop-types';
import PlacesList from "../places-list/places-list.jsx";

const App = (props) => {
  const {titles, places, onAticleClick} = props;
  return <PlacesList
    titles = {titles}
    onAticleClick = {onAticleClick}
    places = {places}
  />;
};

App.propTypes = {
  titles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  places: PropTypes.arrayOf(
      PropTypes.shape({
        photoUrl: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        raiting: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
  onAticleClick: PropTypes.func.isRequired,
};

export default App;
