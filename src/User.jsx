import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.jsx'
import Formone from './Formone.jsx'

class User extends React.Component{
        
          render()
          {

            return(
              <div>
              <Header/>
              <Formone/>
                 </div>
            );
          }

     

}

export default User;