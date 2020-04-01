import React, { Component } from 'react'
import './style/style.css'
import './style/clock.css'
import './style/greeting.css'
import './style/main-focus.css' 
import './style/randomQuote.css'

import Clock from "./components/Clock"
import Greeting from "./components/Greeting"
import MainFocus from "./components/MainFocus"
import RandomQuote from './components/RandomQuote'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Greeting />
        <MainFocus />
        <RandomQuote />
      </div>
    );
  }
}

export default App;