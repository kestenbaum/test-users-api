import React, {FC} from 'react'
import style from "../wrapper/Wrapper.module.css";

interface IWrapper {
    children: React.ReactNode
}

const Wrapper:FC<IWrapper> = ({children}) => {
  return (
    <div className={style.wrapper}>
        <div className='container'>
            {children}
        </div>
    </div>
  )
}

export default Wrapper