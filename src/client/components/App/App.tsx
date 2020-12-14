import React, {/*useEffect,*/  useState} from 'react'
import { Route, Switch /*, NavLink*/ } from 'react-router-dom';
import Results from '../Results/Results'
import Detail from '../Detail/Detail'
//import Home from '../Home/Home';
import SearchBar from '../SearchBar';
import style from './App.scss'
//import axios from 'axios';

const App = (props:any) => {
  const [apiData] = useState(props.apiResponse) //from now on, the data is managed on the react code
  return (
    <div className={style.container}>
      <SearchBar/>
      <div className={style.routeContainer}>
        <Switch>  
          <Route exact path="/" component={() => <div></div>}/> 
          <Route exact path="/items" component={() => <Results items={apiData.results}/>} />
          <Route exact path="/items/:id" component={() => <Detail detail={apiData.item} path={apiData.path_from_root}/>} />
          <Route component={() => <div>Not found</div>} />
        </Switch>
      </div>
    </div>
  )
}

export default App
