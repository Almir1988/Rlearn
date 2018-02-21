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
    <Jumbotron>  
  <h2>HOME</h2>
  <li><Link to='/User'>USERS</Link></li>
  <li><Link to='/Product'>PRODUCTS</Link></li>
</Jumbotron>
			</div>
		);
	}
}

export default Content;