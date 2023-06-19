import SearchBar from '../SearchBar/SearchBar.jsx'
import {Link} from 'react-router-dom'

export default function Nav({onSearch ,length}) {
  
   return (
      <>
      <Link to="/home">
         <button>HOME</button>
      </Link>
      {/* <Link to="/">
         <button>HOME</button>
      </Link> */}
      <Link to="/about">
         <button>ABOUT</button>
      </Link>
      <SearchBar onSearch={onSearch} length={length} />
      </>
   );
}