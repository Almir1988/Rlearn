import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail} from "react-bootstrap";
import Imone  from './images/imone.png'
import Imtwo from './images/imtwo.png'
import Imtree from './images/imtree.png'
import Slider from './slider.jsx'
import {Link} from 'react-router-dom';

class Content extends React.Component{

	render()
	{

		

		return(
			<div className="container">
  <center><h3>This is a content</h3></center>
			</div>
		);
	}
}

export default Content;