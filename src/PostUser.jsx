import React from 'react';
import {Form,FormGroup,Button,Jumbotron,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import { Link, withRouter } from "react-router-dom";
import {AddUser} from './actions/actions'
import {connect} from 'react-redux'
class PostUser extends React.Component {  
        constructor(props)
        {
          super(props);
          this.state= {

            FirstName:'',
            LastName:'',
            Email:'',
            Password:''
          };

        }


       

        
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      
         render()
         {

          const {dispatch}=this.props
             return(
                
              <div className="container">



           <Jumbotron>  
             <li><Link to='/User'>RETURN TO USERS</Link></li>
           </Jumbotron>



                <Form horizontal>
  <FormGroup controlId="FirstName" >
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="LastName">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="LastName" placeholder="LastName"value={this.state.LastName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="Email" >
    <Col componentClass={ControlLabel} xs={2}>
    
    </Col>
    <Col xs={10}>
      <FormControl type="email"  name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>

     <FormGroup controlId="Password">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
   
    <Button  bsStyle="info" onClick={() =>dispatch(AddUser(this.state,this.props.history))} >Add User</Button>
      {this.state.msg && <HelpBlock>{this.state.msg}</HelpBlock>}
    </Col>
  </FormGroup>
 
  
</Form>
              </div>

             );

         }
}

export default withRouter(connect()(PostUser));










