import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import {Link} from 'react-router-dom';

class Product extends React.Component{
        
          render()
          {

            return(
                <div className="container" >
              <Link to='/PostProduct'>
                       Add Product
             </Link>
             <br/>
             <Link to='/Product/ListOfAllProducts'>
                       Get All Products
             </Link>
                 </div>
            );
          }
}
export default Product;