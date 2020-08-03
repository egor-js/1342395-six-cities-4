import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this._hoverCardHandler = this._hoverCardHandler.bind(this);
    this.state = {
      activeCardId: `XX`,
    };
  }

  _hoverCardHandler(id) {
    this.setState({activeCardId: id});
  }

  render() {
    const {places, onAticleClick} = this.props;
    return places.map((item, i) => {
      return <PlaceCard
        place = {item}
        key = {i + item.title[0]}
        id = {i + item.title[0]}
        onCardHover = {this._hoverCardHandler}
        onAticleClick = {onAticleClick}
      />;
    });
  }
}

PlacesList.propTypes = {
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

export default PlacesList;
