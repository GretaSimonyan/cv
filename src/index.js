import React from "react";
import ReactDOM from "react-dom";
// import { createStore } from "redux";
import App from "./App.js";

// const initialState = 0;

// function reducer(state = initialState, action){
//     switch(action.type){
//         case 'INCREMENT': return state + 1;
//         case 'DECREMENT': return state - 1;
//         default : return state;
//     }
// }

// const store = createStore(reducer);

// // console.log(store);
// // console.log(store.getState());

// // store.dispatch({type: 'INCREMENT'})
// // store.dispatch({type: 'DECREMENT'})

// class App extends React.Component{
//     inc(){
//         store.dispatch({type: 'INCREMENT'})
//         this.forceUpdate()
//     }
//     dec(){
//         store.dispatch({type: 'DECREMENT'})
//         this.forceUpdate()
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.dec.bind(this)}>-</button>
//                 <span>{store.getState()}</span>
//                 <button onClick={this.inc.bind(this)}>+</button>
//             </div>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         }
//         this.increment = this.increment.bind(this);
//     }
//     increment () {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <button>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);