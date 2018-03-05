import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Carousel,Jumbotron,Button,Image,Grid,Thumbnail,Col,Row} from 'react-bootstrap';4
import './Style.css';
import './ProductFront.css'
import Footer from './Footer.jsx';
import ProductSlider from './ProductSlider.jsx';
import Prod1 from './images/Products/Prod1.jpg';
import Prod2 from './images/Products/Prod2.jpg';
import Prod3 from './images/Products/Prod3.jpg';
import Prod4 from './images/Products/Prod4.jpg';
import Prod5 from './images/Products/Prod5.jpg';
import Prod6 from './images/Products/Prod6.jpg';
import Prod7 from './images/Products/Prod7.jpg';
import Prod8 from './images/Products/Prod8.jpg';
import Prod9 from './images/Products/Prod9.jpg';
import Prod10 from './images/Products/Prod10.jpg';
import Prod11 from './images/Products/Prod11.jpg';
import Prod12 from './images/Products/Prod12.jpg';
import Prod13 from './images/Products/Prod13.jpg';
import Prod14 from './images/Products/Prod14.jpg';
import Prod15 from './images/Products/Prod15.jpg';
import Prod16 from './images/Products/Prod16.jpg';
import Prod17 from './images/Products/Prod17.jpg';
import Prod18 from './images/Products/Prod18.jpg';
import Prod19 from './images/Products/Prod19.jpg';
import Prod20 from './images/Products/Prod20.jpg';
import Prod21 from './images/Products/Prod21.jpg';
import Prod22 from './images/Products/Prod22.jpg';
import Prod23 from './images/Products/Prod23.jpg';
import Prod24 from './images/Products/Prod24.jpg';

class Prod  extends React.Component{ 

       render()
       {
           return(
            
<div>
<ProductSlider/>


<div className="GridP" >
<h3>ALL PRODUCTS</h3>
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod1} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
      
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod2} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod3} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
  </Row>
</Grid>
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod4} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod5} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod6} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
  </Row>
</Grid>
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod7} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod8} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod9} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
  </Row>
</Grid>
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod10} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod11} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod12} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
  </Row>
</Grid>
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod13} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod14} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod15} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
  </Row>
</Grid>
     
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod16} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod17} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod18} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
  </Row>
</Grid>
     
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod19} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod20} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod21} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
  </Row>
</Grid>
     
<Grid>
  <Row>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod22} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod23} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
       
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Prod24} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        
      </Thumbnail>
    </Col>
  </Row>
</Grid>
     
</div>    

         <Footer/>
    </div>
           );
       }



}

export default Prod