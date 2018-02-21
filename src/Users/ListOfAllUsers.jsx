import React from 'react';
import Header from '../Header.jsx';
import axios from 'axios';
import {Table,Button,Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Listofallusers extends React.Component {
    
    constructor(props) {
        super(props);
         this.state={

            data:[
                {
            _id:'',
            FirstName:'',
            LastName:'',
            Email:'',
            Password:''
                }
            ]
         }
     }
     componentDidMount(){
            axios.get(`http://localhost:3000/User`).then(res => {
               
               this.setState({data: res.data})
        
            });
    }
    render()
    {
         return (
        
            
             <div className="container">

             
             <Jumbotron>  
             <li><Link to='/User'>RETURN TO USERS</Link></li>
           </Jumbotron>

            <Table striped bordered condensed hover>

            <thead>
                 <tr>
                     <td><b>Id</b></td>
                     <td><b>First Name</b></td>
                     <td><b>Last Name</b></td>
                     <td><b>Email</b></td>
                     <td><b>Password</b></td>
                     <td><b>Delete</b></td>
                     <td><b>Edit</b></td>
                 </tr>  
            </thead>
            <tbody>
               {this.state.data.map((person, i) => <TableRow key = {i} 
                  data = {person}/>)}
            </tbody>
            </Table>

             
            </div>          
         );
}
}
class TableRow extends React.Component {
    render() {
       return (
        
          <tr>
             <td>{this.props.data._id}</td> 
             <td>{this.props.data.FirstName}</td>
             <td>{this.props.data.LastName}</td>
             <td>{this.props.data.Email}</td>
             <td>{this.props.data.Password}</td>
             <td><Button bsStyle="danger">Delete</Button></td>
             <td><Button bsStyle="success">Edit</Button></td>
          </tr>
          
       );
    }
 }

 export default Listofallusers;
