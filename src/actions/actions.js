export const LOGIN_ADMIN='LOGIN_ADMIN'

export function signInConfirmation(admin) {
  return {
    type: 'SIGNIN_CONFIRMATION',
    admin
  };
}
export function signIn(admin) {
  debugger;
  if(user.username=="admin" && user.password=="admin")
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
    
  
