import React from "react";
import ReactDOM from "react-dom";
import PostProduct from './PostProduct.jsx'
import {Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Product extends React.Component{
        
          render()
          {

            return(
                <div className="container" >
              <Link to='/PostProduct'>
                       Add Porduct
             </Link>
             <br/>
             <Link to='/Product/PostProduct'>
                       Get All Products
             </Link>
                 </div>
            );
          }

     

}

export default Product;