import React from 'react';
import Header from '../Header.jsx';
import axios from 'axios';
import {Table,Button,Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {DeleteUser,ShowAllUsers} from '../actions/actions'
import {connect} from 'react-redux'



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
           this.load();
    }
    load()
    {
        this.props.dispatch(ShowAllUsers());
    }
    render()
    {
         const {dispatch}=this.props
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
               {(this.props.users || []).map((person, i) => <TableRow key = {i} 
                  data = {person} deleteUser={(id) =>dispatch(DeleteUser(person._id,this.props.history))}/>)}
            </tbody>
            </Table>

             
            </div>          
         );
}
}
class TableRow extends React.Component {
    render() {
        const {dispatch}=this.props
       return (
        
          <tr>
             <td>{this.props.data._id}</td> 
             <td>{this.props.data.FirstName}</td>
             <td>{this.props.data.LastName}</td>
             <td>{this.props.data.Email}</td>
             <td>{this.props.data.Password}</td>
             <td><Button bsStyle="danger" onClick={this.props.deleteUser}>Delete</Button></td>
             <td><Button bsStyle="success">Edit</Button></td>
          </tr>
          
       );
    }
 }

 function mapStateToProps({users}) {
    return {users};
  }

 export default connect(mapStateToProps)(Listofallusers);
