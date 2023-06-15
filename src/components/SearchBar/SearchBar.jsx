import styles from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch, length}) {
   const [id, setId] = useState(''); //defino el hook ID
   
   const handleChange = (event) => {
      console.log("hook",event.target.value);
      setId(event.target.value);
   }

   const handleAdd = () => {
      onSearch(id);
      setId('');
    };

     const handleRandom = () => {
      setId(Math.floor(Math.random() * length) + 1); //826 es la cantidad count en https://rickandmortyapi.com/api/character
      //console.log("random",length, id);
    };

   return (
   <div className={styles.divBar}>
         <h2 className={styles.random} onClick={handleRandom}>!?</h2>
         <input className={styles.inputBar} type='search' value={id} onChange={handleChange} />
         
         <button className={styles.botonBar} onClick={handleAdd}>Agregar</button>
   
   </div>
   );
}
