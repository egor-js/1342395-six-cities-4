import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {rentCount} = props;
  return <MainScreen
    count = {rentCount}
  />;
};

export default App;
