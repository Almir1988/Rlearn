import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import {Link } from 'react-bootstrap';

class User extends React.Component{
        
          render()
          {
            return(
              <div className="container">
            
            <Link to='/User/PostUser'>
                       Add User
             </Link>

                 </div>
            );
          }

     

}

export default User;