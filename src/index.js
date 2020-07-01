import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  rentCount: 7,
};

ReactDOM.render(
    <App
      rentCount = {settings.rentCount}
    />,
    document.querySelector(`#root`)
);
