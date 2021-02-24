import React from 'react'
import cn from 'classnames'
import { Route } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getBids } from '../../featurers/bids/bidsSlice'

import { Button, Error, Loading } from '../../components'
import { TableHeaderRow, TableListRow } from './components'
import { BidCardPG } from '..'

import styles from './BidsPG.module.scss'
import { TOKEN } from '../../featurers/commonVariables'



const BidsPG: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data, isLoaded, error } = useAppSelector((state) => state.bids)

  React.useEffect(() => {
    dispatch(getBids(TOKEN))
  }, [dispatch, TOKEN])

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Button handleClick={() => {}}>
          Создать заявку
        </Button>
      </div>

      <div className={styles.table}>
        <TableHeaderRow />

        <div className={cn(styles.table__list, 'withScroll')} >
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
