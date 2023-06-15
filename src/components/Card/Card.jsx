import styles from './Card.module.css'

export default function Card(props) {
   // const id=props.id;
  // console.log("id borrar",id);
   //console.log("fn",props.onClose);
   const handleButtonClick = () => {
      console.log("quiero cerrar el id",props.id);
      props.onClose(props.id); // Llama a la función onClose del componente padre (App) y pasa el ID como argumento
    };

   return (
      <div className={styles.divCard} >
         <button className={styles.btnCard} onClick={handleButtonClick}>X</button>
         <h2 className={styles.name}>{props.name}</h2>
         <h2 className={styles.espacial}>{props.status}</h2>
         <h2 className={styles.espacial}>{props.species}</h2>
         <h2 className={styles.espacial}>{props.gender}</h2>
         <h2 className={styles.espacial}>{props.origin}</h2>
         <img className={styles.imgCard} src={props.image} alt='' />
      </div>
   );
}

