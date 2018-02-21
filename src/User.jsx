import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import {Link} from 'react-router-dom';
import {Jumbotron} from "react-bootstrap";
class User extends React.Component{
        
          render()
          {
            return(
              <div className="container">
 <Jumbotron>  
  <h2>Users</h2>
  <li><Link to='/PostUser'>ADD USER</Link></li>
  <li> <Link to='/Users/ListOfAllUsers'>GET USERS</Link></li>
</Jumbotron>
                 </div>
            );
          }
}
export default User;