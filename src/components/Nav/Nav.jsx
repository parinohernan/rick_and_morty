import SearchBar from '../SearchBar/SearchBar.jsx'
//import styles from './Nav.module.css'

export default function Nav({onSearch ,length}) {
   console.log("nav",length);
   return (
        <SearchBar onSearch={onSearch} length={length} />
   );
}