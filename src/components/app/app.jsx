import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";
import PlaceDetail from "../place-detail/place-detail.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  const {places, onAticleClick} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            onAticleClick = {onAticleClick}
            places = {places}
          />;
        </Route>
        <Route exact path="/dev-component">
          <PlaceDetail
            place = {places[0]}
          />;
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
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
