export function validate (input, value = undefined, err = false){
  const {name,lastName,userName,email,password,confirmPassword} = input
  let errors = {};
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

/* ----- Name validate ----- */
if(value === "name" || err.name || value === undefined ){
  if(!name.trim()) errors.name = "*Name is required"
}

/* ----- Last name validate ----- */
if(value === "lastName" || err.lastName || value === undefined){
  if(!lastName.trim()) errors.lastName = "*Last name is required"
}
/* ----- User name validate ----- */
if(value === "userName" || err.userName || value === undefined){
  if(!userName.trim()) errors.userName = "*User name is required"
}
/* ----- Email validate ----- */
if(value === "email" || err.email || value === undefined){
  if(!regexEmail.test(email.trim())) errors.email = "*Invalid email address format"
  if(!email.trim()) errors.email = "*Email is required"
}

/* ----- Password validate ----- */
if(value === "password" || err.password || value === undefined){
  if(!password.trim()) errors.password = "*Password is required"
}
/* ----- confirmPassword validate ----- */
if(value === "confirmPassword" || err.confirmPassword || value === undefined){
  if(confirmPassword !== password) errors.confirmPassword= "* The password confirmation does not match"
  if(!confirmPassword.trim()) errors.confirmPassword = "* Confirm password is required"
}
  return errors
}