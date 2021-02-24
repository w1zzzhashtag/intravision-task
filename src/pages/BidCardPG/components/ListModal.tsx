import React from 'react'
import cn from 'classnames'
import styles from './ListModal.module.scss'

interface IProps {
  children: React.ReactNode
}

const ListModal: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default ListModal
