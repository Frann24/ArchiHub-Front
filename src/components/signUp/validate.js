export function validate (input){
  const {name,lastName,userName,email,password,confirmPassword} = input
  let errors = {};
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

/* ----- Name validate ----- */
if(!name.trim()) errors.name = "*Name is required"

/* ----- Last name validate ----- */
if(!lastName.trim()) errors.lastName = "*Last name is required"

/* ----- User name validate ----- */
if(!userName.trim()) errors.userName = "*User name is required"

/* ----- Email validate ----- */
if(!regexEmail.test(email.trim())) errors.email = "*Invalid email address format"
if(!email.trim()) errors.email = "*Email is required"


/* ----- Password validate ----- */
if(!password.trim()) errors.password = "*Password is required"

/* ----- confirmPassword validate ----- */
if(confirmPassword !== password) errors.confirmPassword= "* The password confirmation does not match"
if(!confirmPassword.trim()) errors.confirmPassword = "* Confirm password is required"

  return errors
}