import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";


const CitiesList = (props) => {
  const {city, citiesNames, onCityClick} = props;
  const sixNames = (citiesNames ? citiesNames : []);
  const sixCities = sixNames.slice(0, 6);
  return (
    <ul className="locations__list tabs__list">
      {sixCities.map((item) => {
        return (
          <li key={item} className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onCityClick(item);
              }}
              className={`locations__item-link tabs__item ${city === item ? `tabs__item--active` : ``}`}
              href="#"
            >
              <span>{item}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  citiesNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
