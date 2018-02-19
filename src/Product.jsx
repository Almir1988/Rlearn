import React from "react";
import ReactDOM from "react-dom";
import PostProduct from './PostProduct.jsx'
import {Nav, NavItem,Link } from 'react-bootstrap';
class Product extends React.Component{
        
          render()
          {

            return(
                <div className="container" >
              <Link to='/Product/PostProduct'>
                       Add Porduct
             </Link>
                 </div>
            );
          }

     

}

export default Product;