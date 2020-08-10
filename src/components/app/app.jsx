import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";
import PlaceDetail from "../place-detail/place-detail.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import reviews from '../../mocks/reviews.js';


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleTitleClick = this._handleTitleClick.bind(this);
    this.props = props;

    this.state = {
      detailedCardId: `XX`,
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
              reviews = {reviews}
              otherPlaces = {places}
              onAticleClick= {this._clickTitleHandler}
            />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderMainScreen() {
    const {detailedCardId} = this.state;
    const {places} = this.props;

    if (detailedCardId !== `XX`) {
      const reviewsByPlace = reviews.filter((item) => {
        return item.placeid === detailedCardId;
      });
      const otherPlaces = places.filter((item) => {
        return item.id !== detailedCardId;
      });

      return (
        <PlaceDetail
          place = {places[detailedCardId[0]]}
          otherPlaces = {otherPlaces}
          reviews = {reviewsByPlace}
          onAticleClick= {this._clickTitleHandler}
        />
      );
    }

    return (
      <MainScreen
        onAticleClick={this._handleTitleClick}
        places = {places}
      />
    );
  }

  _handleTitleClick(id) {
    this.setState({detailId: id});

  }
}

App.propTypes = {
  places: PropTypes.arrayOf(
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
};

export default App;
