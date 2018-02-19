import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import {Link} from 'react-router-dom';

class User extends React.Component{
        
          render()
          {
            return(
              <div className="container">
            
            <Link to='/PostUser'>
                       Add User
             </Link>
             <br/>
             <Link to='/GetAllUsers3'>
                       Get All Users
             </Link>

                 </div>
            );
          }

     

}

export default User;