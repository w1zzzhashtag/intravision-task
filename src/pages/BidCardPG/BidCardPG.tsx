import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Button, CardTemplate, CardTextItem, Error, Loading, TextAreaField } from '../../components'
import { Comment, Status, Tags, Users } from './components'

import { getBidsCard, putBidsCard } from '../../featurers/bidsCard/bidsCardSlice'
import styles from './BidCardPG.module.scss'
import { TOKEN } from '../../featurers/commonVariables'
import { parseDate, } from '../../featurers/commonFeaturers'

interface IParams {
  id: string | undefined
}


const BidCardPG: React.FC = ({ }) => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { id }: IParams = useParams()
  const { data, isLoaded, error, putBidsCardIsComplete } = useAppSelector((state) => state.bidsCard)

  const redirectToBidsPG = () => history.push('/bids')

  React.useEffect(() => {
    id && id !== 'create' && dispatch(getBidsCard(TOKEN, id))
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
    <>
      {error
        ? <Error error={error} />
        : isLoaded
          ? <CardTemplate
            headerTitle={`№ ${data?.id} ${data?.name}`}
            handleOpenCard={redirectToBidsPG}
          >
            <div className={styles.content}>
              <CardTextItem title="Описание" >
                <p className={styles.textItem__value}>{data?.description}</p>
              </CardTextItem>

              <CardTextItem title="Коментарий" >
                <TextAreaField
                  name="comments"
                  value={commentValue}
                  handleChange={handleChangeCommentValue} />
              </CardTextItem>

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

            <aside className={styles.aside}>
              {data && <Status status={{
                id: data.statusId,
                name: data.statusName,
                rgb: data.statusRgb,
              }} />}

              <CardTextItem title="Заявитель" >
                <p className={styles.textItem__value}>Александр Вознесенский</p>
              </CardTextItem>

              <CardTextItem title="Создана" >
                <p className={styles.textItem__value}>{data?.initiatorName}</p>
              </CardTextItem>

              <CardTextItem title="Исполнитель" >
                {data && <Users user={{
                  id: data.executorId,
                  name: data.executorName,
                }} />}
              </CardTextItem>

              <CardTextItem title="Приоритет" >
                <p className={styles.textItem__value}>{data?.priorityName}</p>
              </CardTextItem>

              {data && (
                <CardTextItem title="Срок" >
                  <p className={styles.textItem__date}>
                    {parseDate(data.resolutionDatePlan, 'dd.mm.yy')}
                  </p>
                </CardTextItem>
              )}

              <CardTextItem title="Теги" >
                {data && <Tags tags={data.tags} />}
              </CardTextItem>
            </aside>
          </CardTemplate>
          : <Loading />
      }
    </>
  )
}

export default BidCardPG
