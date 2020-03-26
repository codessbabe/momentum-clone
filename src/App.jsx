import React, { Component } from 'react'
import './style/style.css'

import Clock01 from "./components/Clock01"
import Clock02 from './components/Clock02'
import Greeting from "./components/Greeting"
import InputTest from './components/InputTest'
import StarwarsAPI from './components/StarwarsAPI'
import TodoList from './components/TodoList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock01 />
        <Clock02 />
        <Greeting />
        <InputTest />
        {/* <StarwarsAPI /> */}
        {/* <TodoList />   */}
      </div>
    );
  }
}

export default App;
