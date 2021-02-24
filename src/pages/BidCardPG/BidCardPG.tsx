import React from 'react'
import cn from 'classnames'
import { useParams, useHistory } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Button, Error, Loading } from '../../components'
import { Comment, Status, Tags, TextItem, Users } from './components'

import { getBidsCard, putBidsCard } from '../../featurers/bidsCard/bidsCardSlice'
import styles from './BidCardPG.module.scss'
import { TOKEN } from '../../featurers/commonVariables'
import { parseDate } from '../../featurers/users/commonFeaturers'

interface IParams {
  id: string | undefined
}

const BidCardPG: React.FC = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { id }: IParams = useParams()
  const { data, isLoaded, error, putBidsCardIsComplete } = useAppSelector((state) => state.bidsCard)

  const redirectToBidsPG = () => history.push('/bids')


  React.useEffect(() => {
    id && dispatch(getBidsCard(TOKEN, id))
  }, [id, dispatch, TOKEN])


  const [commentValue, setCommentValue] = React.useState('')

  React.useEffect(() => setCommentValue(''), [id])

  const handleChangeCommentValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setCommentValue(value)
  }


  const sendBidCardChanges = () => {
    data && dispatch(putBidsCard(TOKEN, {
      id: data.id,
      name: data.name,
      description: data.description,
      comment: commentValue,
      price: data.price,
      taskTypeId: data.taskTypeId,
      statusId: data.statusId,
      priorityId: data.priorityId,
      serviceId: data.serviceId,
      resolutionDatePlan: data.resolutionDatePlan,
      tags: data.tags.map(item => item.id),
      initiatorId: data.initiatorId,
      executorId: data.executorId,
      executorGroupId: data.executorGroupId
    }))
  }
  React.useEffect(() => {
    putBidsCardIsComplete && id && dispatch(getBidsCard(TOKEN, id))
  }, [putBidsCardIsComplete, id, TOKEN, dispatch])

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

                  <Button handleClick={sendBidCardChanges}>
                    Сохранить
                  </Button>

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

                  {data && (
                    <TextItem title="Срок" >
                      <p className={styles.textItem__date}>
                        {parseDate(data.resolutionDatePlan, 'dd.mm.yy')}
                      </p>
                    </TextItem>
                  )}

                  <TextItem title="Теги" >
                    {data && <Tags tags={data.tags} />}
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
