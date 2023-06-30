import React from "react";
import Styles from "./Form.module.css";
import validate from "./validation";
//import "./Form.module.css";

export default function Form({login}) {

    const [userData,setUserData] = React.useState ({
    email: "",
    password: "",
});

const [errors,setErrors] = React.useState ({
    // email: "",
    // password: "",
    // inicio:"x"
});


const handleChange = (e) => {setUserData({
    //esta funcion de solo dos lineas cambia el estado cada ver que cambia uno de los inputs
      ...userData,
      [e.target.name]: e.target.value,
    //las sig lineas validan los inputs y guardan los errores en el estado
    });
   setErrors(
      validate({
         ...userData,
         inicio:'', //borro inicio esta key solo tiene valor cuando inicia la pagina
         [e.target.name]: e.target.value,
      })
   );
      console.log("errors",errors);
    }

const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
}

return <div className= {Styles.divContainer}><h2 >Login</h2>
<form  onSubmit={handleSubmit}>
    <label >Email:</label> <br></br>
    <input
    type="text"
    name="email"
    placeholder="Escribe tu email..."
    onChange={handleChange}
    className={ errors.email && Styles.warning}
    value={userData.email}
    /><br></br>
    <p className={Styles.danger}>{errors.email}</p>
  <label>Password:</label><br></br>
    <input
    type="password"
    name="password"
    placeholder="contraseña"
    onChange={handleChange}
    className={Styles.warning}
    value={userData.password}
    /><br></br>
  <p className={Styles.danger}>{errors.password}</p>
  <button type='submit'  >Enviar</button>
</form>
</div>
}
