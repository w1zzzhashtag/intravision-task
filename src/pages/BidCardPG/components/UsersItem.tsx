import React from 'react'
import cn from 'classnames'
import { UsersDataType } from '../../../featurers/users/usersTypes'
import styles from './UsersItem.module.scss'

interface IProps {
  user: UsersDataType;
  isNested?: boolean;
  handleClick: () => void;
}

const UsersItem: React.FC<IProps> = ({ user, handleClick, isNested }) => {
  return (
    <p onClick={handleClick} className={cn(styles.wrapper, {
      [styles.nested]: isNested
    })}>
      {user.name}
    </p>
  )
}

export default UsersItem
