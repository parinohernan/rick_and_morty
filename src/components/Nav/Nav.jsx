import SearchBar from '../SearchBar/SearchBar.jsx'
import {Link} from 'react-router-dom'


export default function Nav({onSearch ,length, visible, logout}) {
   
   //console.log(visible);
   if (visible == "visible") {
      return (
         <div >
         <Link to="/home">
            <button > HOME </button>
         </Link>
         <Link to="/favorites">
            <button>FAVORITES</button>
         </Link>
         <Link to="/about">
            <button>ABOUT</button>
         </Link>
         <Link to="/">
            <button onClick={logout}>LOGOUT</button>
         </Link>
         <SearchBar onSearch={onSearch} length={length} />
         </div>
      );
   }
  return <div></div>
}