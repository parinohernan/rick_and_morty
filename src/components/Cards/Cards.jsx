import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'
// Opcion 1 directamente props
export default function Cards(props) {

// Opcion 2 destructuring
// export default function Cards({ characters}) {

   // opcion 3 destructuring
const { characters} = props;
const { onClose} = props;
//console.log('close',  onClose );
return (
   <div className={styles.divCards}>
      {characters.map((personaje) => {
         const {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
         } = personaje;
         
         return (
            <Card
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
         )
      })}
   </div>
   );
}
