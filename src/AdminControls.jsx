import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail} from "react-bootstrap";
import Imone  from './images/imone.png'
import Imtwo from './images/imtwo.png'
import Imtree from './images/imtree.png'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import './Style.css'
import './Header.css'

class Admincontrols extends React.Component{
	render()
	{

    


		return(
			<div className="container">
    <Jumbotron >  
  <h2>ADMIN PANEL</h2>
  <h4>Welcome {this.props.admins.username}  </h4>
  
  <u1>
  <li><Link to='/User'>USERS</Link></li>
  <li><Link to='/Product'>PRODUCTS</Link></li>
  </u1>
</Jumbotron>
			</div>
		);
	}
}
function mapStateToProps({admins}) {
  return {admins};
}

export default connect(mapStateToProps)(Admincontrols);