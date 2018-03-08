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
      history.push('/AdminControls',{data:admin.username});
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
    
  
