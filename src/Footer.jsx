import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';
class Footer extends React.Component{ 
  render()
  {
         return(
         
            <div>
          <footer className="footer">
          <div className="container">
              
              <u1>
             <li>
                 <Link   to="/">
                 Home
                 </Link>
             </li>
             <li>
             <Link  to="/About">
                 About
                 </Link>
             </li>
             <li>
             <Link  to="/">
                 Products
                 </Link>
             </li>
             <li>
             <Link  to="/Contact">
               Contact
                 </Link>
             </li>
             <li>
             <Link  to="/Login">
               Sign In
                 </Link>
             </li>
             <li>
             <Link  to="/Registration">
               Sign Up
                 </Link>
             </li>

             <li className="Copy">
             © 2018 - 2018 All rights reserved.
             </li>
            </u1>
            
            
          </div>
          
      </footer>
      
            </div>
  );
}
}   
export default Footer;