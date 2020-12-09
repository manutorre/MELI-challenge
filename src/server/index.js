import express from 'express'
import React from 'react';
import ReactDOM from 'react-dom/server';
import App from '../client/components/App/App';
import path from 'path';
import { StaticRouter } from 'react-router-dom';

const app = express();
//get assets for JS hydate and CSS
app.use('/static', express.static('dist'))
app.use('/static', express.static(path.join('server-build', 'css')))
app.get('*', (req, res) => {

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
                    <App/>
                </StaticRouter>              
              </div>
              <script src="./static/bundle.js"></script>
          </body>
      </html>
    res.send(ReactDOM.renderToString(html));
})

app.listen(3000, () => console.log("server started at http://localhost:3000"))