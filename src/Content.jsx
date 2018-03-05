import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail,Carousel,Image,Collapse,Well} from "react-bootstrap";
import imgbuttom from './images/imgbuttom.jpg'
import imgbuttom2 from './images/imgbuttom2.jpg'
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
   <h1>TOP PRODUCTS</h1>
  <Row>
    <Col xs={6} md={4}>
    <Thumbnail className="TCicons" src={ContentImgOne} alt="242x200" >
        <h3>Philips FC6125/01</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
        </p>
        </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <Thumbnail className="TCicons" src={ContentImgTwo} alt="242x200">
        <h3>Philips 272B7QPJEB/01</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
        </p>
        </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
    <Thumbnail className="TCicons" src={ContentImgTree} alt="242x200">
        <h3>USB Microphone</h3>
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
    <h3>Alcatel HH70B</h3>
    <p>For extra reassurance, our new router also comes with a separate external antenna port 2X SMA MALE. So you can boost your indoor coverage and get the best 4GEE signal you possibly can.</p>
        
    </Col>
  </Row>
     </Grid>
  </div>



<div className="ContentButtom2">
   <Grid >
   <Row className="show-grid">
    <Col xs={6} md={4} className="ContentButtomCol2">

     <h3>PHILIPS</h3>
        <p>Everybody loves a healthy, bright smile. Featuring unique Sonic technology, 5 brushing modes and advanced brush head technology, Philips Sonicare Diamond Clean Rechargeable toothbrush offers Philips Sonicare' s best whitening system and superior plaque removal. ... Everybody loves a healthy, bright smile.</p>
    </Col>  
    <Col xs={12} md={8} >
    <Image className="ContentButtomCol22" src={imgbuttom2} responsive />
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