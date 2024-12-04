import {FC} from 'react'
import style from "../header/Header.module.css";

const Header:FC = () => {
  return (
    <header className={style.header}>
        <div className="container">
            <header className={style.wrapper}>
                <a href="#">Logo</a>
                <a href="#">Avatar</a>
            </header>
        </div>
    </header>
  )
}

export default Header