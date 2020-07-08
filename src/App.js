import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Game from './screen/Game/Game'
import GameSelect from './screen/GameSelect/GameSelect'
import Login from './screen/Login/Login'
import Score from './screen/Score/Score'
import Welcome from './screen/Welcome/Welcome'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Game" component={Game}/>
        <Route path="/GameSelect" component={GameSelect}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Score" component={Score}/>
        <Route path="/" component={Welcome}/>
      </Switch>
    </div>
  );
}

export default App;
