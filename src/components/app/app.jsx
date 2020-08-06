import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";
import PlaceDetail from "../place-detail/place-detail.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";


class App extends PureComponent {
  constructor(props) {
    super(props);
    this._clickTitleHandler = this._clickTitleHandler.bind(this);
    this.props = props;
    this.state = {
      detailId: `XX`,
    };
  }

  render() {
    const {places} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/dev-component">
            <PlaceDetail
              place = {places[0]}
            />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderMainScreen() {
    const {detailId} = this.state;
    const {places, onAticleClick} = this.props;
    if (detailId !== `XX`) {
      return (
        <MainScreen
          places = {places}
          onAticleClick= {onAticleClick}
        />
      );
    }
    return (
      <MainScreen
        onAticleClick= {this._clickTitleHandler}
        places = {places}
      />
    );
  }

  _clickTitleHandler(id) {
    console.log(`clicked on` + id);
    this.setState({detailId: id});
  }
}

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
