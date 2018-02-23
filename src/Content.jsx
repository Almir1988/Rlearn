import React from "react";
import ReactDOM from "react-dom";
import {Media} from "react-bootstrap";
import {Button,Row,Col,Jumbotron,Grid,Thumbnail,Carousel,Image,Collapse,Well} from "react-bootstrap";
import Imone  from './images/imone.png'
import Imtwo from './images/imtwo.png'
import Imtree from './images/imtree.png'
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

<div className="container">
<Jumbotron>
  <h1>Home page</h1>
  <p>
  Lorem ipsum dolor sit amet, ne possit evertitur scripserit pro. Quo eu meis option volumus, vel ullum lobortis at, eu falli elaboraret vix. Alienum fastidii et vix, et nec augue comprehensam, ei choro numquam vis. Ne eros prompta eam, partem convenire dissentiet pro ex. At magna error appellantur his, an duo facer errem, has accusamus omittantur reprehendunt te. Ne idque virtute adipiscing qui, munere civibus officiis eu ius.
  </p>
  <p>
  

         <Button className="BtnColor" bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
          Read more about us
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
            Lorem ipsum dolor sit amet, ne possit evertitur scripserit pro. Quo eu meis option volumus, vel ullum lobortis at, eu falli elaboraret vix. Alienum fastidii et vix, et nec augue comprehensam, ei choro numquam vis. Ne eros prompta eam, partem convenire dissentiet pro ex. At magna error appellantur his, an duo facer errem, has accusamus omittantur reprehendunt te. Ne idque virtute adipiscing qui, munere civibus officiis eu ius.
            </Well>
          </div>
        </Collapse>
  </p>
</Jumbotron>
</div>





        
        <Grid>

           
  <Row>            
    <Col xs={6} md={4}>
      <Thumbnail src={Imone} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Eu ac dui elit vestibulum, arcu morbi in euismod mauris fringilla sollicitudin, non at, amet sed ad. </p>
        <p>
        
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Imtwo} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Eu ac dui elit vestibulum, arcu morbi in euismod mauris fringilla sollicitudin, non at, amet sed ad. </p>
        <p>
          
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src={Imtree} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Eu ac dui elit vestibulum, arcu morbi in euismod mauris fringilla sollicitudin, non at, amet sed ad. </p>
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