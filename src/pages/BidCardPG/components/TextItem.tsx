import React from 'react'
import styles from './TextItem.module.scss'

interface IProps {
  title: string
  children: React.ReactNode
}

const TextItem: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  )
}

export default TextItem
