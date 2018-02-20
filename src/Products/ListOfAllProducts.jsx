import React from 'react';
import Header from '../Header.jsx';
import axios from 'axios';
import {Table} from 'react-bootstrap';

class Listofallproducts extends React.Component {
    
    constructor(props) {
        super(props);
         this.state={

            data:[
                {
                    ProductName:'',
                    Quantity:''
           
                }
            ]
         }
     }
     componentDidMount(){
            axios.get(`http://localhost:3000/Product`).then(res => {
               
               this.setState({data: res.data})
        
            });
    }
    render()
    {
         return (
             <div className="container">
            <Table striped bordered condensed hover>

            <thead>
                 <tr>
                     <td><b>Product Name</b></td>
                     <td><b>Quantity</b></td>
                 </tr>  
            </thead>
            <tbody>
               {this.state.data.map((product, i) => <TableRow key = {i} 
                  data = {product}/>)}
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
             <td>{this.props.data.ProductName}</td>
             <td>{this.props.data.Quantity}</td>
             
          </tr>
          
       );
    }
 }

 
 export default Listofallproducts;
