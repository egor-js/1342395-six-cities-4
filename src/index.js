import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import places from "./mocks/offers";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer.js";

const store = createStore(reducer);

const place = {
  offersTitles: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`],
  onAticleClick() {},
};

ReactDOM.render(
    <Provider store = {store}>
      <App
        onAticleClick = {place.onAticleClick}
        places = {places}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
