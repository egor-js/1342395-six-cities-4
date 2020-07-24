import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {titles, places, onAticleClick} = props;
  return <MainScreen
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
