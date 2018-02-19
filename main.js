import React from "react";
import ReactDOM from "react-dom";
import App from './src/App.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './src/User.jsx';
import Product from './src/Product.jsx';

ReactDOM.render(<BrowserRouter> 
    <div>
      <Switch>
        <Route path='/User' component={User}/>
        <Route path='/Product' component={Product}/>
        <Route path='/' component={App}/>
      </Switch>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();