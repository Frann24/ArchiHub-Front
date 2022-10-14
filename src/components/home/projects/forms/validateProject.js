export function validate (form, value = undefined, err = false){
    const {title, description, project_file, pdf_file} = form
    let errors = {};
    
  /* ----- Email validate ----- */
  if(value === "title" || err.title || value === undefined ){
    if(!title.trim()) errors.title = "Title is required"
  }
  /* ----- Password validate ----- */
  if(value === "description" || err.description || value === undefined ){
    if(!description.trim()) errors.description = "Description is required"
  }
    return errors
}