import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {titles, onAticleClick} = props;
  return <MainScreen
    titles = {titles}
    onAticleClick = {onAticleClick}
  />;
};

App.propTypes = {
  titles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onAticleClick: PropTypes.func.isRequired,
};

export default App;
