import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail,Carousel} from "react-bootstrap";
import Imone  from './images/imageone.jpg'
import Imtwo from './images/imagetwo.jpg'
import Imtree from './images/imagetree.jpg'
import {Link} from 'react-router-dom';

class Content extends React.Component{

	render()
	{
		return(
			<div className="container">
  <Carousel>
  <Carousel.Item>
    <img width={2000} height={500} alt="900x500" src={Imone}/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={2000} height={500} alt="900x500" src={Imtwo} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={2000} height={500} alt="900x500" src={Imtree} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</div>
		);
	}
}

export default Content;