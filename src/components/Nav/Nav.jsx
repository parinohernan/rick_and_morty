import SearchBar from '../SearchBar/SearchBar.jsx'
import {Link} from 'react-router-dom'


export default function Nav({onSearch ,length, visible}) {
   
   console.log(visible);
   if (visible == "visible") {
      return (
         <div >
         <Link to="/home">
            <button>HOME</button>
         </Link>
         
         <Link to="/about">
            <button>ABOUT</button>
         </Link>
         <SearchBar onSearch={onSearch} length={length} />
         </div>
      );
   }
  return <div></div>
}