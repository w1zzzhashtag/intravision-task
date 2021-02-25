import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Button, CardTemplate, CardTextItem, TextAreaField } from '../../components'
import { postBidsCard, setPostBidsCardIsComplete } from '../../featurers/bidsCard/bidsCardSlice'
import { TOKEN } from '../../featurers/commonVariables'
import styles from './CreateCard.module.scss'


interface IValuesState {
  [index: string]: { value: string; name: string }
}

const CreateCard: React.FC = ({ }) => {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const redirectToBidsPG = () => history.push('/bids')

  React.useEffect(() => {
    dispatch(setPostBidsCardIsComplete(null))
  }, [])

  const { postBidsCardIsComplete } = useAppSelector((state) => state.bidsCard)

  const [isRedirect, setIsRedirect] = React.useState(false)
  const [values, setValues] = React.useState<IValuesState>({
    name: { value: '', name: 'Название' },
    description: { value: '', name: 'Описание' }
  })

  const handleChangeValues = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: { ...prev[name], value } }))
  }

  const sendDataBids = () => {
    if (values.name.value.trim() !== '' && values.description.value.trim() !== '') {
      dispatch(postBidsCard(TOKEN, {
        name: values.name.value,
        description: values.description.value,
        comment: '',
        price: 0,
        taskTypeId: 0,
        statusId: 0,
        priorityId: 0,
        serviceId: 0,
        resolutionDatePlan: new Date().toDateString(),
        tags: [],
        initiatorId: 0,
        executorId: 0,
        executorGroupId: 0
      }))
    } else alert('Заполните все поля')
  }

  
  React.useEffect(() => {
    postBidsCardIsComplete && setIsRedirect(true)
  }, [postBidsCardIsComplete])


  if (isRedirect) return <Redirect to={`/bids/${postBidsCardIsComplete}`} />

  return (
    <CardTemplate
      headerTitle="Новая заявка"
      handleOpenCard={redirectToBidsPG}
    >
      <div className={styles.content}>
        {Object.keys(values).map(item => (
          <CardTextItem
            key={values[item].name}
            title={values[item].name}
          >
            <TextAreaField
              name={item}
              value={values[item].value}
              handleChange={handleChangeValues} />
          </CardTextItem>
        ))}

        <Button handleClick={sendDataBids}>
          Сохранить
        </Button>
      </div>
    </CardTemplate>
  )
}

export default CreateCard
