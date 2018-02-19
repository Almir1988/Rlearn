import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";

import {Button,Row,Col,Jumbotron} from "react-bootstrap";

class Content extends React.Component{

	render()
	{

		return(
			<div>
				<Jumbotron>
					
					<center><p>
  This is a content
					</p></center>
				
				</Jumbotron>
			</div>
		);
	}
}

export default Content;