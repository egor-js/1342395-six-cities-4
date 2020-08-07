import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import leaflet from "leaflet";
import {Cities} from '../../const.js';

export default class CityMap extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="map" className="cities__map map" />
    );
  }
  componentDidMount() {
    const {places} = this.props;
    const zoom = 12;
    const mapCentre = Cities[places[0].city];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const map = leaflet.map(`map`, {
      center: mapCentre,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(mapCentre, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    places.forEach((item) => {
      leaflet
      .marker(item.coordinates, {icon})
      .addTo(map);
    });
  }
}

CityMap.propTypes = {
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
