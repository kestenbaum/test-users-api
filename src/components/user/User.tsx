import {FC} from 'react'
import style from "../user/User.module.css";

type UserProps = {
    name: string;
    email: string;
    address: string;
}

const User:FC<UserProps> = ({name, email, address}) => {
  return (
    <div className={style.wrapper}>
      <span>{name}</span>
      <span>{email}</span>
      <span>{address}</span>
    </div>
  )
}

export default User