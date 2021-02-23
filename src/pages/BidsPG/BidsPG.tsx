import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getBids } from '../../featurers/bids/bidsSlice'
import { Error, Loading } from '../../components'

import styles from './BidsPG.module.scss'


const BidsPG: React.FC = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.tenants)
  const { data, isLoaded, error } = useAppSelector((state) => state.bids)
  console.log(data);

  React.useEffect(() => {
    token && dispatch(getBids(token))
  }, [dispatch, token])

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
          {error
            ? <Error error={error} />
            : <>
              {!isLoaded ? data.map(item => (
                <Link
                  key={item.id}
                  to={`bids/${item.id}`}
                  className={cn(
                    styles.table__row,
                    styles.table__list__row
                  )}>

                  <span className={cn(
                    styles.table__item,
                    styles.id
                  )}>{item.id}</span>

                  <span className={cn(
                    styles.table__item,
                    styles.name
                  )}>
                    {item.name.length > 70 ? item.name.substr(0, 70) + '...' : item.name}
                  </span>

                  <span className={cn(
                    styles.table__item,
                    styles.status
                  )}>
                    <span
                      className={styles.status__name}
                      style={{ backgroundColor: item.statusRgb }}
                    >{item.statusName}</span>
                  </span>

                  <span className={styles.table__item}>
                    {item.executorName}
                  </span>
                </Link>
              )) : <Loading />}
            </>
          }
        </div>
      </div>
    </section>
  )
}

export default BidsPG
