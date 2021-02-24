import React from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: React.ReactNode;
  handleClick: () => void
}

const Button:React.FC<IProps> = ({children, handleClick}) => {
  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button
