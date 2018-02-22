import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail,Carousel,Image} from "react-bootstrap";
import Imone  from './images/imone.png'
import Imtwo from './images/imtwo.png'
import Imtree from './images/imtree.png'
import {Link} from 'react-router-dom';
import Slider from  './slider.jsx'
import Footer from './Footer.jsx'
import './Style.css'
class Content extends React.Component{

	render()
	{
		return(
			<div>





<Slider/>

<div className="container">
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>
</div>





        
        <Grid>

           
  <Row>            
    <Col xs={6} md={4}>
      <Thumbnail src={Imone} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
        
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Imtwo} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Imtree} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
        
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>

<Jumbotron>
 

    
  
</Jumbotron>;

<Footer/>
			</div>
		);
	}
}

export default Content;