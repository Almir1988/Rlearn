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
					<h1>Rest Api task</h1>
					<p>
  This is a content
					</p>
				
				</Jumbotron>
			</div>
		);
	}
}

export default Content;