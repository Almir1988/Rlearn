import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import {Link} from 'react-router-dom';
import {Jumbotron} from "react-bootstrap";

class Product extends React.Component{
        
          render()
          {

            return(
                
                <div className="container">
  <Jumbotron>  
             <li><Link to='/AdminControls'>RETURN TO PANEL</Link></li>
           </Jumbotron>
                
 <Jumbotron>  
  <h2>PRODUCTS</h2>
  <li><Link to='/PostProduct'>ADD PRODUCTS</Link></li>
  <li> <Link to='/Prod/ListOfAllProducts'>GET PRODUCTS</Link></li>
</Jumbotron>
               
                 </div>
            );
          }
}
export default Product;
