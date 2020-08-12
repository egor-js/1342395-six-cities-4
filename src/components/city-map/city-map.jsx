import React, {PureComponent, createRef} from "react";
import PropTypes from 'prop-types';
import leaflet from "leaflet";
import {Cities} from '../../const.js';

const ZOOM = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39],
});

export default class CityMap extends PureComponent {
  constructor(props) {
    console.log(props);
    super(props);
    this._map = null;
    this._markers = null;
    this._mapRef = createRef();
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}} ref={this._mapRef}></div>
    );
  }

  componentDidMount() {
    const mapRef = this._mapRef.current;
    const city = `Amsterdam`; // this.props.places[0].city;

    this._createMap(mapRef, city);
    this._setMapView(city);
    this._addTileLayer(this._map);
    this._addMarkers(this._map);

    //   const {places} = this.props;
    //   const zoom = 12;
    //   const mapCentre = Cities[places[0].city]; // [52.38333, 4.9];
    //   const icon = leaflet.icon({
    //     iconUrl: `img/pin.svg`,
    //     iconSize: [30, 30]
    //   });
    //   const map = leaflet.map(`map`, {
    //     center: mapCentre,
    //     zoom,
    //     zoomControl: false,
    //     marker: true
    //   });
    //   map.setView(mapCentre, zoom);

    //   leaflet
    //   .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    //     attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    //   })
    //   .addTo(map);

  //   places.forEach((item) => {
  //     leaflet
  //     .marker(item.coordinates, {icon})
  //     .addTo(map);
  //   });
  }
  _addMarkers(map) {
    const {places} = this.props;
    this._markers = leaflet.layerGroup();

    places.forEach((item) => {
      leaflet
        .marker(item.coordinates, {icon})
        .addTo(this._markers);
    });

    this._markers.addTo(map);
  }


  _clearMarkers() {
    this._markers.clearLayers();
  }

  _createMap(mapRef, city) {
    this._map = leaflet.map(mapRef, {
      center: Cities[city],
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });
  }

  _setMapView(city) {
    this._map.setView(Cities[city], ZOOM);
  }

  _addTileLayer(map) {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
  }
}

CityMap.propTypes = {
  mode: PropTypes.string.isRequired,
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
