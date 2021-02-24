import React from 'react'
import cn from 'classnames'
import { useParams, useHistory } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Button, Error, Loading } from '../../components'
import { Comment, Status, TextItem, Users } from './components'

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


  const [commentValue, setCommentValue] = React.useState('')

  React.useEffect(() => setCommentValue(''), [id])

  const handleChangeCommentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setCommentValue(value)
  }

  const redirectToBidsPG = () => history.push('/bids')

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
                <div className={cn(styles.content, 'withScroll')}>
                  <TextItem title="Описание" >
                    <p className={styles.textItem__value}>{data?.description}</p>
                  </TextItem>

                  <TextItem title="Коментарий" >
                    <textarea
                      value={commentValue}
                      onChange={handleChangeCommentValue}
                      className={styles.textItem__field} />
                  </TextItem>

                  <Button>Сохранить</Button>

                  <div className={styles.comments}>
                    {data?.lifetimeItems.length !== 0
                      && data?.lifetimeItems.map(item => (
                        <Comment key={item.id} data={item} />
                      ))}
                  </div>
                </div>

                <div className={cn(styles.aside, 'withScroll')}>
                  {data && <Status status={{
                    id: data.statusId,
                    name: data.statusName,
                    rgb: data.statusRgb,
                  }} />}

                  <TextItem title="Заявитель" >
                    <p className={styles.textItem__value}>Александр Вознесенский</p>
                  </TextItem>

                  <TextItem title="Создана" >
                    <p className={styles.textItem__value}>{data?.initiatorName}</p>
                  </TextItem>

                  <TextItem title="Исполнитель" >
                    {data && <Users user={{
                      id: data.executorId,
                      name: data.executorName,
                    }} />}                    
                  </TextItem>

                  <TextItem title="Приоритет" >
                    <p className={styles.textItem__value}>{data?.priorityName}</p>
                  </TextItem>

                  <TextItem title="Срок" >
                    <p className={styles.textItem__value}>{data?.resolutionDatePlan}</p>
                    {/* <input type="date" name="" id="" value={'2018-12-12'} /> */}
                  </TextItem>

                  <TextItem title="Теги" >
                    {data?.tags.map(item => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </TextItem>
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
