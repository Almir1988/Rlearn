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
            ProductName:'',
            Quantity:'',
           
                }
            ]
         }
     }
     componentDidMount(){
            axios.get(`http://localhost:3000/Products`).then(res => {
               
               this.setState({data: res.data})
        
            });
    }
    render()
    {
         return (
            <Table striped bordered condensed hover>
            <tbody>
               {this.state.data.map((product, i) => <TableRow key = {i} 
                  data = {product}/>)}
            </tbody>
            </Table>          
         );
}
}
class TableRow extends React.Component {
    render() {
       return (
        
          <tr>
             <td>{this.props.data.ProductName}</td>
             <td>{this.props.data.Quantity}</td>
             
          </tr>
          
       );
    }
 }


 export default Listofallusers;
