import React, { Component } from "react";
import GlobalStyles from './styled/globalStyles';
import Home from './pages/Home';
// import {hot} from "react-hot-loader";

class App extends Component{
  render(){
    return(
      <>
        <GlobalStyles/>
        <Home/>
      </>
    );
  }
}

export default App;