import React, {/*useEffect,*/  useState} from 'react'
import { Route, Switch /*, NavLink*/ } from 'react-router-dom';
import Results from '../Results/Results'
import Detail from '../Detail/Detail'
//import Home from '../Home/Home';
import SearchBar from '../SearchBar';
import style from './App.scss'
//import axios from 'axios';

const App = (props:any) => {
  const [results] = useState(props.fetchResult.results)
  return (
    <div className={style.container}>
      <SearchBar/>
      <div className={style.routeContainer}>
        <Switch>
          <Route exact path="/" component={() => <div></div>}/> 
          <Route exact path="/items" component={() => <Results items={results}/>} />
          <Route exact path="/items/:id" component={() => <Detail detalle={'Manu'}/>} />
          <Route component={() => <div>Not found</div>} />
        </Switch>            
      </div>
    </div>
  )
}

export default App
