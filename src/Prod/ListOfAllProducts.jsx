import React from 'react';
import Header from '../Header.jsx';
import axios from 'axios';
import {Table,Button,Jumbotron,Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {DeleteProduct} from '../actions/actions'
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
        axios.get(`http://localhost:3000/Product`).then(res => {
               this.setState({data: res.data})
            });
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
               {this.state.data.map((product, i) => <TableRow key = {i} 
                  data = {product} deleteProduct={(id) => dispatch(DeleteProduct(this.props.data._id))}/>)}
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
             <td><Button bsStyle="danger" onClick={() =>dispatch(DeleteProduct(this.props.data._id))}>Delete</Button></td>
             <td><Button bsStyle="success">Edit</Button></td>
             
          </tr>
          
       );
    }
 }

 
 export default connect()(Listofallproducts);
