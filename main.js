import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './src/User.jsx';
import Product from './src/Product.jsx';
import Header from './src/Header.jsx';
import Footer from './src/Footer.jsx';
import Content from './src/Content.jsx'  
import PostUser from './src/PostUser.jsx'
import PostProduct from './src/PostProduct.jsx'
import ListOfAllUsers from './src/Users/ListOfAllUsers.jsx'
import ListOfAllProducts from './src/Product/ListOfAllProducts.jsx'


ReactDOM.render(<BrowserRouter> 
    <div>

      <Header/>
      <Switch>

        <Route path='/User' component={User}/>
        <Route path='/PostUser' component={PostUser}/>
        <Route path='/Users/ListOfAllUsers' component={ListOfAllUsers}/>


        <Route path='/Product' component={Product}/>
        <Route path='/PostProduct' component={PostProduct}/>
        <Route path='/Product/ListOfAllProducts' component={ListOfAllProducts}/>


        <Route path='/' component={Content}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();