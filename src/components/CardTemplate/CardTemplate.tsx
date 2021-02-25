import React from 'react'
import styles from './CardTemplate.module.scss'


interface IProps {
  children: React.ReactNode;
  headerTitle: string;
  handleOpenCard: () => void
}

const CardTemplate: React.FC<IProps> = ({ 
  children, headerTitle, handleOpenCard 
}) => {  
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.header__title}>{headerTitle}</span>
        <button
          className={styles.header__button}
          onClick={handleOpenCard}
        >&times;</button>
      </div>

      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}

export default CardTemplate
