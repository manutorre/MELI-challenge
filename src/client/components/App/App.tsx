import React, {/*useEffect,  useState*/} from 'react'
import { Route, Switch /*, NavLink*/ } from 'react-router-dom';
import Results from '../Results/Results'
import Detail from '../Detail/Detail'
//import Home from '../Home/Home';
import SearchBar from '../SearchBar';
import style from './App.scss'
//import axios from 'axios';

const App = (props:any) => {
  //const [searchText, changeSearchText] = useState('')
  //const [results] = useState(props.fetchResult.results)

  /*const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      axios.get('http://localhost:3000/api/items?q=' + event.target.value).then(
        res => {
            changeResults(res.data.results);
        }
    )
    }
  }*/

  /*useEffect(() => {
    axios.get('http://localhost:3000/api/items?q=' + searchText).then(
        res => {
            changeResults(res.data.results);
        }
    )
  , [searchText]})*/

  return (
    <div className={style.container}>
      <SearchBar onEnter={() => console.log("manu")}/>
      {/*<button onClick={() => toggle(!show)}>toggle</button>
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
      */}
      <div className={style.routeContainer}>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}/> 
          <Route path="/items" component={() => <Results items={props.fetchResult.results}/>} />
          <Route path="/detail" component={() => <Detail detalle={'Manu'}/>} />
          <Route component={() => <div>Not found</div>} />
        </Switch>            
      </div>
    </div>
  )
}

export default App
