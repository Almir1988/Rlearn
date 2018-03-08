export const LOGIN_ADMIN='LOGIN_ADMIN'

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
      //this.props.history.push('/AdminControls');
      history.push('/AdminControls');
    };
  }
  else
  {
    console.log(admin.username);
    console.log(admin.password);
    console.log('error');
    history.push('/Login');
    
  }
}
    
  
