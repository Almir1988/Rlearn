export const LOGIN_ADMIN='LOGIN_ADMIN'
export const SIGN_UP='SIGN_UP'
export const ADD_PRODUCT='ADD_PRODUCT'
export const ADD_USER='ADD_USER'
export const DELETE_PRODUCT='DELETE_PRODUCT'
import axios from 'axios';
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
export function signUpConfirmation(user) {
  return {
    type: 'SIGN_UP',
    user
  };
}
export function SignUp(user,history){
  

  
  return dispatch => axios.post('http://localhost:3000/User', user)
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
export function AddProductConfirmation(product)
{
  return {
    type: 'ADD_PRODUCT',
    product
  };
}
export function AddProduct(product,history){

  return dispatch => axios.post('http://localhost:3000/Product', product)
  .then((res) => {
    dispatch(AddProductConfirmation(res.data));
    console.log('success')
    history.push('/Product');
  })
  .catch(
    
    console.log('error'),
    history.push('/PostProduct')
   
  );

}
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
    history.push('/User');
  })
  .catch(
    
    console.log('error'),
    history.push('/PostUser')
   
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
    debugger;  
    dispatch(DeleteProductConfirmation(res.data));
    console.log('success')
    history.push('/ListOfAllProducts');
  })
  .catch(()=>{
    debugger;
    console.log('error'),
    history.push('/Product')
}
  );


}