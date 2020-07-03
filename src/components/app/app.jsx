import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const rentTitles = props;
  return <MainScreen
    titles = {rentTitles}
  />;
};


App.propTypes = {
  titles: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default App;
