import {
    createValidator,
    composeValidators,
    combineValidators,
    isRequired,
  } from 'revalidate'


  
  const validateUser = combineValidators({
    email: composeValidators(
      isRequired('Email'),
      isValidEmail('Email')
    )(),
    FirstName: isRequired('First Name'),
    LastName: isRequired('Last Name'),
    Password: isRequired('Phone number')
  });
  export {validateUser}