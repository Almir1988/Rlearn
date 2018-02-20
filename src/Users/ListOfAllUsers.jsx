import React from 'react';
import Header from '../Header.jsx';
import axios from 'axios';
import {Table} from 'react-bootstrap';

class Listofallusers extends React.Component {
    
    constructor(props) {
        super(props);
         this.state={

            data:[
                {
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
            <Table striped bordered condensed hover>
            <tbody>
               {this.state.data.map((person, i) => <TableRow key = {i} 
                  data = {person}/>)}
            </tbody>
            </Table>          
         );
}
}
class TableRow extends React.Component {
    render() {
       return (
        
          <tr>
             <td>{this.props.data.FirstName}</td>
             <td>{this.props.data.LastName}</td>
             <td>{this.props.data.Email}</td>
             <td>{this.props.data.Password}</td>
          </tr>
          
       );
    }
 }


 export default Listofallusers;
