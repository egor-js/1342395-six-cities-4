import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import leaflet from "leaflet";
import {Cities} from '../../const.js';

export default class CityMap extends PureComponent {
  render() {
    return (
      <section id="map" className="cities__map map" />
    );
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {coordinates} = this.props;
    const zoom = 12;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const map = leaflet.map(`map`, {
      center: Cities.Amsterdam,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(Cities.Amsterdam, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    leaflet
    .marker([52.369553943508, 4.85309666406198], {icon})
    .addTo(map);

    leaflet
    .marker(coordinates, {icon})
    .addTo(map);
  }
}

CityMap.propTypes = {
  city: PropTypes.string.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number.isRequired),
};
