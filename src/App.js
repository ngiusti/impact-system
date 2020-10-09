import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Game from './screen/game/game'
import GameSelect from './screen/game-select/game-select'
import Login from './screen/login/login'
import Score from './screen/score/score'
import Welcome from './screen/welcome/welcome'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Game" component={Game}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/GameSelect" component={GameSelect}/>
        <Route exact path="/Score" component={Score}/>
        <Route path="/" component={Welcome}/>
      </Switch>
    </div>
  );
}

export default App;
