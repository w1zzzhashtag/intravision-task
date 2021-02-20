import React from 'react'
import cn from 'classnames'
import styles from './BidsPG.module.scss'


const BidsPG: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.header__btn}>Создать заявку</button>
      </div>

      <div className={styles.table}>
        <div className={cn(styles.table__row, styles.table__header__row)}>
          <span className={cn(styles.table__item, styles.id)}>ID</span>
          <span className={cn(styles.table__item, styles.name)}>Название</span>
          <span className={cn(styles.table__item, styles.status)}>Статус</span>
          <span className={styles.table__item}>Исполнитель</span>
        </div>

        <div className={styles.table__list} >
          {Array(20).fill(undefined).map((item, i) => (
            <div className={cn(styles.table__row, styles.table__list__row)}>
              <span className={cn(styles.table__item, styles.id)}>50 061</span>
              <span className={cn(styles.table__item, styles.name)}>Не работает кнопка печати</span>
              <span className={cn(styles.table__item, styles.status)}>
                <span className={styles.status__name}>открыта</span>
              </span>
              <span className={styles.table__item}>Менеджеров Сергей</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BidsPG
