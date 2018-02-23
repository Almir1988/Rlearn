import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Carousel,Jumbotron,Button} from 'react-bootstrap';4
import './Style.css';
import Footer from './Footer.jsx'


class About  extends React.Component{ 

       render()
       {
           return(
        <div>
          <div class="container">
         <h1>About Us</h1>
         <Jumbotron className="Cbackground">
  <h1>Lorem ipsum dolor sit amet</h1>
  <p>
  Lorem ipsum dolor sit amet, ne possit evertitur scripserit pro. Quo eu meis option volumus, vel ullum lobortis at, eu falli elaboraret vix. Alienum fastidii et vix, et nec augue comprehensam, ei choro numquam vis. Ne eros prompta eam, partem convenire dissentiet pro ex. At magna error appellantur his, an duo facer errem, has accusamus omittantur reprehendunt te. Ne idque virtute adipiscing qui, munere civibus officiis eu ius.
  </p>
  
</Jumbotron>

          </div>
         <Footer/>
</div>
           );
       }



}

export default About