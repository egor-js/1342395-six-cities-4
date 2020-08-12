import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";
import PlaceDetail from "../place-detail/place-detail.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import reviews from '../../mocks/reviews.js';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import mockPlaces from "../../mocks/offers";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
    this._handleTitleClick = this._handleTitleClick.bind(this);

    this.state = {
      detailedCard: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._render()}
          </Route>
          <Route exact path="/dev-component">
            {}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    this.props.onLoad(mockPlaces[0].city, mockPlaces);
  }

  _render() {
    const {detailedCard} = this.state;
    const {places} = this.props;
    if (detailedCard !== null) {
      console.log(detailedCard);
      const reviewsByPlace = reviews.filter((item) => {
        return item.placeid === detailedCard;
      });
      const otherPlaces = places.filter((item) => {
        return item.id !== detailedCard;
      });

      return <PlaceDetail
        place={detailedCard}
        otherPlaces = {otherPlaces}
        reviews = {reviewsByPlace}
        onAticleClick={this._handleTitleClick}
      />;
    }

    return (
      <MainScreen
        onAticleClick={this._handleTitleClick}
      />
    );
  }

  _handleTitleClick(place) {
    console.log(place);
    this.setState({detailedCard: place});
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
  onLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  places: state.places,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(city, places) {
    console.log(places);
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.setAllPlaces(places));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
