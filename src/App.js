import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
//import characters, { Rick } from './data.js';
import { useState } from 'react';
import axios from 'axios';


function App() {
   //defini el estilo inline para practicar ya que no necesitaba darle muchas reglas
   const AppStyle = {
      height: `100%`,
      width: `100%`,
      position: `fixed`,
      top: `0`,
      left: `0`,
      right: `0`,
      bottom: `0`,
      // background: `linear-gradient(to bottom right, #000000, #000040, #000020)`
      backgroundImage: 'url("https://wallpapercave.com/wp/wp7227842.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
   };
   const [characters, setCharacters] = useState([]); //defino el hook characters
   
   function onClose(id) {
      const filteredCharacters = characters.filter((card) => card.id !== id);
      setCharacters(filteredCharacters);
   }
   
   function onSearch(id) {
      characters.forEach(element => {
         if (element.id == id) {
            window.alert('¡personaje repetido!');
            return;
         }
      });
      try {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      } catch (error) {
         console.log("Error intentando obtener datos");
      }
   }
   
   return (
      <div className='App' style={AppStyle}>
         <Nav classNme="NAV" onSearch={onSearch} length={826}></Nav>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;

{/* <Card
   id={Rick.id}
   name={Rick.name}
   status={Rick.status}
   species={Rick.species}
   gender={Rick.gender}
   origin={Rick.origin.name}
   image={Rick.image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
/> */}