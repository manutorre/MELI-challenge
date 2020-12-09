import React, {useState} from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import Results from '../Results/Results'
import Detail from '../Detail/Detail'
import Home from '../Home/Home'
import './App.scss'

const App = () => {
  const [show, toggle] = useState(true)
  return (
    <div className="container">
      <button onClick={() => toggle(!show)}>toggle</button>
      {show && <h1> Hola Mundo! </h1>}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/results">Results</NavLink>
        </li>
        <li>
          <NavLink to="/detail">Detail</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/detail" component={Detail} />
        <Route component={() => <div>Not found</div>} />
      </Switch>            
    </div>
  )
}

export default App
