import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail,Carousel,Image,Collapse,Well} from "react-bootstrap";
import imgbuttom from './images/imgbuttom.jpg'
import ContentImgOne from './images/Cimgone.jpg'
import ContentImgTwo from './images/Cimgtwo.jpg'
import ContentImgTree from './images/Cimgtree.jpg'
import ButtomContentImg from './images/ButtomContentImg.jpg'
import {Link} from 'react-router-dom';
import Slider from  './slider.jsx'
import Footer from './Footer.jsx'
import './Style.css'
class Content extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
	render()
	{
		return(
			<div>
<Slider/>




<div className="Contenticons">


 <Grid>
  <Row>
    <Col xs={6} md={4}>
    <Thumbnail className="TCicons" src={ContentImgTwo} alt="242x200" >
        <h3>Icon One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
        </p>
        </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <Thumbnail className="TCicons" src={ContentImgTwo} alt="242x200">
        <h3>Icon Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>
        </p>
        </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <Thumbnail className="TCicons" src={ContentImgTwo} alt="242x200">
        <h3>Icon Tree</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>
         
        </p>
        </Thumbnail>
    </Col>
  </Row>
</Grid>






</div>
<div className="" >
<Image className="ContImg" src={ButtomContentImg}responsive />;
</div>


<div className="ContentButtom">
   <Grid >
   <Row className="show-grid">
    <Col xs={12} md={8} >
    <Image className="ContentButtomCol" src={imgbuttom} responsive />;
    </Col>
    <Col xs={6} md={4} className="ContentButtomCol2">
    <h3>LOREM IPSUM DOLOR SIT AMET</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Col>
  </Row>

     </Grid>
  </div>
<Footer/>
			</div>
		);
	}
}

export default Content;