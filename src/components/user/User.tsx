import {FC} from 'react'
import style from "../user/User.module.css";

const User:FC<UserData> = ({name, email, address}) => {
  return (
    <div className={style.wrapper}>
      <span>{name}</span>
      <span>{email}</span>
      <span>{address.city}</span>
    </div>
  )
}

export default User