import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Error, Loading } from '../../components'
import { getBidsCard } from '../../featurers/bidsCard/bidsCardSlice'
import styles from './BidCardPG.module.scss'

interface IParams {
  id: string | undefined
}

const BidCardPG: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { id }: IParams = useParams()
  const { token } = useAppSelector((state) => state.tenants)
  const { data, isLoaded, error } = useAppSelector((state) => state.bidsCard)

  React.useEffect(() => {
    token && id && dispatch(getBidsCard(token, id))
  }, [token, id, dispatch])

  const redirectToBidsPG = () => history.push('/bids')

  console.log(data);
  

  return (
    <div className={styles.wrapper}>
      {error
        ? <Error error={error} />
        : <>
          {isLoaded
            ? <>

              <div className={styles.header}>
                <span className={styles.header__id}>№ {data?.id}</span>
                <span className={styles.header__name}>{data?.name}</span>
                <button className={styles.header__button} onClick={redirectToBidsPG}>&times;</button>
              </div>

              <div className={styles.inner}>
                <div className={styles.content}>
                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Описание</p>
                    <p className={styles.textItem__value}>{data?.description}</p>
                  </div>

                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Коментарий</p>
                    <textarea name="" />
                  </div>

                  <button>Сохранить</button>



                  <div>
                    {data?.lifetimeItems.map(item => (
                      <div key={item.id}>
                        <div></div>
                        <div>
                          <p>{item.userName}</p>
                          <p>{item.createdAt} прокомментировал</p>
                          <p>{item.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.aside}>
                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Заявитель</p>
                    <p className={styles.textItem__value}>Александр Вознесенский</p>
                  </div>

                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Создана</p>
                    <p className={styles.textItem__value}>{data?.initiatorName}</p>
                  </div>

                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Исполнитель</p>
                    <p className={styles.textItem__value}>{data?.executorName}</p>
                  </div>

                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Приоритет</p>
                    <p className={styles.textItem__value}>{data?.priorityName}</p>
                  </div>

                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Срок</p>
                    <input type="date" name="" id="" value={'2018-12-12'} />
                    {/* <p className={styles.textItem__value}>{data?.resolutionDatePlan}</p> */}
                  </div>

                  <div className={styles.textItem}>
                    <p className={styles.textItem__title}>Теги</p>
                    {data?.tags.map(item => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </div>
                </div>

              </div>
            </>
            : <Loading />}
        </>
      }
    </div>
  )
}

export default BidCardPG
