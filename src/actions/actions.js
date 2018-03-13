export const LOGIN_ADMIN='LOGIN_ADMIN'
export const SIGN_UP='SIGN_UP'
export const ADD_PRODUCT='ADD_PRODUCT'
export const ADD_USER='ADD_USER'
export const DELETE_PRODUCT='DELETE_PRODUCT'
export const SHOW_PRODUCTS='SHOW_PRODUCTS'
export const SHOW_USERS='SHOW_USERS'
export const DELETE_USER='DELETE_USER'
import axios from 'axios';

//ADMIN ACTIONS 
export function signInConfirmation(admin) {
  return {
    type: 'LOGIN_ADMIN',
    admin
  };
}
export function signIn(admin,history) {
  
 
  console.log(admin.username);
  console.log(admin.password);
  console.log(admin);
  
  if(admin.username=== "admin" && admin.password=== "admin")
  {
    return dispatch=>{  
      dispatch(signInConfirmation(admin))
      console.log('success');
      history.push('/AdminControls');
    };
  }
  else
  {
    return dispatch=>{
    console.log(admin.username);
    console.log(admin.password);
    console.log('error');
    history.push('/Login');
    admin.username='';
    admin.password='';
    };
  }
}

//PRODUCT ACTIONS
export function AddProductConfirmation(product)
{
  return {
    type: 'ADD_PRODUCT',
    product
  };
}
export function AddProduct(product,history){

 return dispatch => axios.post('http://localhost:3000/Product',product)
  .then((res) => {
   
    console.log(res.data);
    dispatch(AddProductConfirmation(res.data));
    console.log('success')
    history.push('/Prod/ListOfAllProducts');
    
  }).catch(()=>{
  
    console.log('error'),
    history.push('/PostProduct')
}
  );
}
export function DeleteProductConfirmation(id)
{
  return {
    type: 'DELETE_PRODUCT',
    id
  };

}
export function DeleteProduct(id,history)
{
  
  console.log(id)
  
  return dispatch => axios.delete('http://localhost:3000/Product/'+id)
  .then((res) => {
    dispatch(DeleteProductConfirmation(id));
    console.log('success')
  })
  .catch(()=>{
    console.log('error'),
    history.push('/Product')
}
  );
}
export function ShowProducts(prod)
{
  return {
    type: 'SHOW_PRODUCTS',
    prod
  };
}
export function ShowAllProducts()
{
 
 return dispatch => axios.get(`http://localhost:3000/Product`).then(res => {
               
               console.log(res.data);
               dispatch(ShowProducts(res.data));
              
            }).catch(()=>{

              console.log('error')
           
          }
            );
}
//USER ACTIONS 
export function AddUserConfirmation(user)
{
  return {
    type: 'ADD_USER',
    user
  };
}
export function AddUser(user,history){


  return dispatch => axios.post('http://localhost:3000/User', user)
  .then((res) => {
    dispatch(AddUserConfirmation(res.data));
    console.log('success')
  
    history.push('/Users/ListOfAllUsers');
  }).catch(()=>{
  
    console.log('error'),
    history.push('/PostUser')
}
  );

}
export function ShowUser(use)
{
  return {
    type: 'SHOW_USERS',
    use
  };
}
export function ShowAllUsers()
{
  return dispatch => axios.get(`http://localhost:3000/User`).then(res => {
               
    console.log(res.data);
    dispatch(ShowUser(res.data));
    
 }).catch(()=>{

   console.log('error')

}
 );
}
export function DeleteUserConfirmation(id)
{
  return {
    type: 'DELETE_USER',
    id
  };
}
export function DeleteUser(id,history)
{

  console.log(id)  
   
  return dispatch => axios.delete('http://localhost:3000/User/'+id)
  .then((res) => {
    dispatch(DeleteUserConfirmation(id));
    console.log('success')
    
  })
  .catch(()=>{
    debugger;
    console.log('error'),
    history.push('/User')
}
  );
}
export function signUpConfirmation(admin) {
  return {
    type: 'SIGN_UP',
    admin
  };
}
export function SignUp(admin,history){
  

  
  return dispatch => axios.post('http://localhost:3000/User', admin)
  .then((res) => {
    dispatch(signUpConfirmation(res.data));
    console.log('success')
    history.push('/Home');
  })
  .catch(
    
    console.log('error'),
    history.push('/Registration')
   
  );

}