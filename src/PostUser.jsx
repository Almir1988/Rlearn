import React from 'react';
import {Form,FormGroup,Button,Jumbotron,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import axios from 'axios';
import {Link} from 'react-router-dom';


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
        AddUser() { 
        const body ={
          FirstName:this.state.FirstName,
          LastName:this.state.LastName,
          Email:this.state.Email,
          Password:this.state.Password
        };
        axios.post(`http://localhost:3000/User`, body)
        .then(res => {
          debugger;
        })
        .catch(err => {
          debugger;
        });
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
         render()
         {
             return(
                
              <div className="container">



           <Jumbotron>  
             <li><Link to='/User'>RETURN TO USERS</Link></li>
           </Jumbotron>



                <Form horizontal>
  <FormGroup controlId="FirstName" >
    <Col componentClass={ControlLabel} xs={2}>
    FirstName
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="LastName">
    <Col componentClass={ControlLabel} xs={2}>
    LastName
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="LastName" placeholder="LastName"value={this.state.LastName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="Email" >
    <Col componentClass={ControlLabel} xs={2}>
    Email
    </Col>
    <Col xs={10}>
      <FormControl type="email"  name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>

     <FormGroup controlId="Password">
    <Col componentClass={ControlLabel} xs={2}>
    Password
    </Col>
    <Col xs={10}>
      <FormControl type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
      <Button onClick={this.AddUser.bind(this)}>Post</Button>
    </Col>
  </FormGroup>
 
  
</Form>
              </div>

             );

         }
}

export default PostUser;










