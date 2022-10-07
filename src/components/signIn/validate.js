export function validate (input){
  const {email, password} = input
  let errors = {};
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  
/* ----- Email validate ----- */
if(!regexEmail.test(email.trim())) errors.email = "Invalid email address format"
if(!email.trim()) errors.email = "Email is required"

/* ----- Password validate ----- */
if(!password.trim()) errors.password = "Password is required"

  return errors
}