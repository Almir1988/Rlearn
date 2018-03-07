export const LOGIN_ADMIN='LOGIN_ADMIN'

export function signInConfirmation(admin) {
  return {
    type: 'LOGIN_ADMIN',
    admin
  };
}
export function signIn(admin) {
  debugger;
  if(admin.username=="admin" && admin.password=="admin")
  {
    debugger;
      dispatch(signInConfirmation(admin))
      console.log('success');
      history.push('/AdminControls');
  }
  else
  {
    debugger;
      history.push('/Login');
      console.log('error');
  }
}
    
  
