import express from 'express'
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../client/components/App/App';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import {routeQuerySwitch} from './utils'
import axios from 'axios';


const app = express();
var cors = require('cors')
//get assets for JS hydate and CSS
app.use(cors())
app.use('/static', express.static('dist'))
app.use('/static', express.static(path.join('server-build', 'css')))

import api from './api';
api(app);

app.get('*', async (req, res) => {

    const response = await axios('http://localhost:3000' + routeQuerySwitch(req));
    const result = response.data;
     const html = 
      <html>
          <head>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>React</title>
              <link rel="stylesheet" href="./static/main.css"/>
          </head>            
          <body>
              <div id="app">
                <StaticRouter location={req.url}>
                    <App fetchResult={result}/>
                </StaticRouter>              
              </div>
              {/* Inject server side fetched data inti client side __data__ window object. This is used in src/index.js as props for App component*/}
              <script dangerouslySetInnerHTML={{
                  __html: `window.__data__ = ${JSON.stringify(result)};`
              }}/>
              <script src="./static/bundle.js"></script>
          </body>
      </html>
    res.send(ReactDOM.renderToString(html));
})


app.listen(3000, () => console.log("server started at http://localhost:3000"))