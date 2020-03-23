import React, { Component } from "react";
import Home from './pages/Home';

// import {hot} from "react-hot-loader";

class App extends Component{
  render(){
    return(
      <div>
        <Home/>
        {/* <h1>Hello, World!</h1> */}
      </div>
    );
  }
}

export default App;
// export default hot(module)(App);