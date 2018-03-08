export const LOGIN_ADMIN='LOGIN_ADMIN'

export function signInConfirmation(admin) {
  return {
    type: 'LOGIN_ADMIN',
    admin
  };
}
export function signIn(admin) {
  
  if(admin.username=== "admin" && admin.password=== "admin")
  {
      console.log(admin)
      dispatch(signInConfirmation(admin))
      console.log('success');
      //this.props.history.push('/AdminControls');
     
  }
  else
  {
   
    //this.props.history.push('/Login');
      console.log('error');
  }
}
    
  
