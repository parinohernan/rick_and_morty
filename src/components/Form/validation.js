const validate = (input) => {
    let errors={};
    const regexPassword = /^(?=.*\d).{6,10}$/;
    const regexEmail = /\S+@\S+\.\S+/;
    //console.log("input.name",input.name);
    
    if (input.email == "") {
        errors.email='no puede estar vacio';
    }else{
        if( regexEmail.test(input.email)) {
            errors.email='';
        } else {
            errors.email='tiene que ser un email';
        }
    }
    if( regexPassword.test(input.password)) {
        errors.password = '';
    } else {
        errors.password = "Ingrese password";
    }    
    
    //console.log("errors",errors);
    return errors
}

export default validate;