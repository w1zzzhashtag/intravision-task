import React from 'react'
import styles from './CardTextItem.module.scss'

interface IProps {
  title: string
  children: React.ReactNode
}

const CardTextItem: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  )
}

export default CardTextItem
