import {FC} from 'react'
import style from "../search/Search.module.css";

const Search:FC = () => {
  return (
    <input 
        className={style.search}
        placeholder='Search'
    />
  )
}

export default Search