import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Details from './components/Details/Details.jsx';
import About from './Views/About/About.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Form from './components/Form/Form';
import Favorites from './components/Favorites/'
function App() {

   const location = useLocation();
   //defini el estilo inline para practicar ya que no necesitaba darle muchas reglas
   const AppStyle = {
      height: `100vh`,
      width: `100%`,
    //  position: ,
      top: `0`,
      left: `0`,
      right: `0`,
      bottom: `0`,
      //background: `linear-gradient(to bottom right, #000000, #000040, #000020)`,
      backgroundImage: 'url("https://wallpapercave.com/wp/wp7227842.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // 'overflow-y': 'scroll'
   };
   const navigate = useNavigate();
   const [access,setAccess] = useState(false);
   const EMAIL = "parinohernan@gmail.com";
   const PASSWORD = "qwerty1234";

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {   
      //console.log("login",userData.email, userData.password);
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   
   function logout() {
      setAccess(false);
      navigate('/');
   }
   const [characters, setCharacters] = useState([]); //defino el hook characters
   
   function onClose(id) {
      const filteredCharacters = characters.filter((card) => card.id !== id);
      setCharacters(filteredCharacters);
   }
   

   async function onSearch(id) {
      let repetido = false;
      await characters.forEach(element => {
         if (element.id == id) {
            repetido = true;
         }
      });
      if (repetido) {
         window.alert('¡personaje repetido!');
         return;
      }
      if (!/^(?:[1-9]\d{0,2}|826)$/.test(id)) {
         window.alert('¡no hay personajes con ese ID!');
         return;
      }

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
   const visible = location.pathname == "/" ? 'noVisible' : 'visible';
   
   return (
    <div className='App' style={AppStyle}>
      <Nav className="NAV" logout={logout} onSearch={onSearch} length={826} visible={visible}></Nav>
      <Routes>
         {/* <Route path="/" element= <Cards characters={characters} onClose={onClose}/> /> */}
         <Route path="/" element= <Form login= {login}/> />
         <Route path="/favorites" element= <Favorites/> />
         <Route path="/about" element= <About/> />
         <Route path="/home" element= <Cards characters={characters} onClose={onClose}/> />
         <Route path="/details/:id" element=<Details/> />
      </Routes>
  </div>
   );
}

export default App;

