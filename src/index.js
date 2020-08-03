import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import places from "./mocks/offers";

const place = {
  offersTitles: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`],
  onAticleClick() {},
};

ReactDOM.render(
    <App
      onAticleClick = {place.onAticleClick}
      places = {places}
    />,
    document.querySelector(`#root`)
);
