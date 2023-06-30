import styles from './Card.module.css'
import { Link, NavLink, useLocation} from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
//import store from '../../redux/store';



function Card (props) {
   
   const [isFav,setIsFav] = useState(false);
   const direction = useLocation().pathname;
   const {id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites} = props;
   
   const inFavorites = () => { //se fija si estamos en la vista de favorites retorna true o false 
      return (direction == "/favorites" ) 
    }

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   //   console.log("dentro el useEfect",myFavorites);
   }, [myFavorites]);
      
   function handleFavorite() {
     console.log("hola desde card", props.id);
      if (isFav) {
         setIsFav(false)
         removeFav(props.id)
         
      } else{
         setIsFav(true)
         addFav(props) 
      }
   }

   const handleButtonClick = () => {
      //console.log("quiero cerrar el id",props.id);
      props.onClose(id); // Llama a la función onClose del componente padre (App) y pasa el ID como argumento
    };

   return (
      <div className={styles.divCard} >
         {
         inFavorites() ? (
            <></>
         ) : (
         <button className={styles.btnCard} onClick={handleButtonClick}>X</button> 
         )
         }
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         <Link to={'/details/'+id} ><h2 className={styles.name}>{props.name}</h2></Link>
         <h2 className={styles.espacial}>{props.status}</h2>
         <h2 className={styles.espacial}>{props.species}</h2>
         <h2 className={styles.espacial}>{props.gender}</h2>
         <h2 className={styles.espacial}>{props.origin}</h2>
         
         <img className={styles.imgCard} src={props.image} alt='Perfil' />
         <div className={styles.divInfo}>
         </div>
      </div>
   );
}
const mapDispatchToProps = (dispatch) =>{
   console.log("entro al matchToProps");
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: function (id) {
         dispatch(removeFav(id))
      },
   }
}

const mapStateToProps = (state) => {
   
   //console.log("en mapStateToProps", state.myFavorites);
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Card) ;