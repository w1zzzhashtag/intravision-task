import React from 'react'
import { Route, useHistory } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getBids } from '../../featurers/bids/bidsSlice'

import { Button, Error, Loading } from '../../components'
import { TableHeaderRow, TableListRow } from './components'
import { BidCardPG, CreateCard } from '..'

import styles from './BidsPG.module.scss'
import { TOKEN } from '../../featurers/commonVariables'



const BidsPG: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleOpenCard = () => history.push('/bids/create')

  const { data, isLoaded, error } = useAppSelector((state) => state.bids)

  React.useEffect(() => dispatch(getBids(TOKEN)), [dispatch, TOKEN])


  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>

        <Button handleClick={handleOpenCard}>
          Создать заявку
        </Button>
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
      <Route
        path="/bids/create" exact component={CreateCard} />
    </section>
  )
}

export default BidsPG
