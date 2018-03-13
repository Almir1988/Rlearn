import React from 'react';

import axios from 'axios';
import {Link,withRouter} from "react-router-dom";
import {Table,Button,Jumbotron,Modal} from 'react-bootstrap';

import {DeleteProduct ,ShowAllProducts} from '../actions/actions'
import {connect} from 'react-redux'

class Listofallproducts extends React.Component {
    constructor(props) {
        super(props);
         this.state={
            data:[
                {
                    _id:'',
                    ProductName:'',
                    Quantity:''
                }
            ]
         }
     }
     componentDidMount(){
         this.load();
    }
    
    load() {
       
        this.props.dispatch(ShowAllProducts());
    }
    
    render()
    {
        
        const {dispatch}=this.props
        
         return (
             <div className="container">
           <Jumbotron>  
             <li><Link to='/Product'>RETURN TO PRODUCTS</Link></li>
           </Jumbotron>
            <Table striped bordered condensed hover>

            <thead>
                 <tr>
                     <td><b>Id</b></td>
                     <td><b>Product Name</b></td>
                     <td><b>Quantity</b></td>
                     <td><b>Delete</b></td>
                     <td><b>Edit</b></td>
                 </tr>  
            </thead>
            <tbody>
  
               {(this.props.products || []).map((product, i) => <TableRow key = {i} 
                  data = {product} deleteProduct={(id) =>dispatch(DeleteProduct(product._id,this.props.history))}/>)}
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
             <td>{this.props.data.ProductName}</td>
             <td>{this.props.data.Quantity}</td>
             <td><Button bsStyle="danger" onClick={this.props.deleteProduct}>Delete</Button></td>
             <td><Button bsStyle="success">Edit</Button></td>
             
          </tr>
          
       );
    }
 }
 function mapStateToProps({products}) {
    return {products};
  }
 
 export default connect(mapStateToProps)(Listofallproducts);
