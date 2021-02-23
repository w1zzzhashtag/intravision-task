import React from 'react'
import { Route } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getBids } from '../../featurers/bids/bidsSlice'

import { Error, Loading } from '../../components'
import { TableHeaderRow, TableListRow } from './components'
import { BidCardPG } from '..'

import styles from './BidsPG.module.scss'



const BidsPG: React.FC = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.tenants)
  const { data, isLoaded, error } = useAppSelector((state) => state.bids)

  React.useEffect(() => {
    token && dispatch(getBids(token))
  }, [dispatch, token])

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.header__btn}>Создать заявку</button>
      </div>

      <div className={styles.table}>
        <TableHeaderRow />

        <div className={styles.table__list} >
          {error
            ? <Error error={error} />
            : isLoaded
              ? data.map(item => <TableListRow key={item.id} data={item} />)
              : <Loading />
          }
        </div>
      </div>
      <Route
        path="/bids/:id" component={BidCardPG} />
    </section>
  )
}

export default BidsPG
