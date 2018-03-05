import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Carousel,Jumbotron,Button,Image} from 'react-bootstrap';4
import './Style.css';
import './About.css';
import Footer from './Footer.jsx'
import AboutImage from './images/AboutImage.jpg'

class About  extends React.Component{ 

       render()
       {
           return(
        <div>
          <div className="container">
         
         <Jumbotron>
  <h1>START SELL ONLINE</h1>
  <p>
  Everything you need to start an online store and sell online. Selling online with your own ecommerce website has never been easier, faster, or more scalable. Impress your customers with a beautiful store. 
  </p>
  
</Jumbotron>
</div>
<div>
<Image className="AboutBootomImg" src={AboutImage}responsive />;
</div>

          
         <Footer/>
</div>
           );
       }



}

export default About