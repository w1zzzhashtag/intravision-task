import React from 'react'
import styles from './Button.module.scss'

interface IProps {
  children: React.ReactNode
}

const Button:React.FC<IProps> = ({children}) => {
  return (
    <button className={styles.wrapper}>
      {children}
    </button>
  )
}

export default Button
