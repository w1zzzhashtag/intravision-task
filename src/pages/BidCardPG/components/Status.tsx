import React from 'react'
import { ListModal, StatusItem } from '.'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { Error, Loading } from '../../../components'
import { setDataStatus } from '../../../featurers/bidsCard/bidsCardSlice'
import { getBidsStatus } from '../../../featurers/bidsStatus/bidsStatusSlice'
import { BidsStatusDataType } from '../../../featurers/bidsStatus/bidsStatusTypes'
import { TOKEN } from '../../../featurers/commonVariables'
import styles from './Status.module.scss'

interface IProps {
  status: {
    id: number;
    name: string;
    rgb: string;
  }
}

const Status: React.FC<IProps> = ({ status }) => {
  const dispatch = useAppDispatch()
  const { data, error, isLoaded } = useAppSelector((state) => state.bidsStatus)

  const [listIsOpen, setListIsOpen] = React.useState(false)
  const handleListOpen = () => setListIsOpen(!listIsOpen)

  React.useEffect(() => {
    listIsOpen && dispatch(getBidsStatus(TOKEN))
  }, [dispatch, TOKEN, listIsOpen])

  const selectStatus = (item: BidsStatusDataType) => {
    dispatch(setDataStatus(item))
    handleListOpen()
  }

  return (
    <div className={styles.wrapper}>
      <StatusItem
        status={{
          id: status.id,
          name: status.name,
          rgb: status.rgb
        }}
        handleClick={handleListOpen} />


      {listIsOpen && <ListModal>
        {error
          ? <Error error={error} />
          : isLoaded
            ? data.map(item => (
              <StatusItem
                key={item.id}
                status={{
                  id: item.id,
                  name: item.name,
                  rgb: item.rgb
                }}
                handleClick={() => selectStatus(item)}
                isNested />
            ))
            : <Loading />
        }
      </ListModal>}
    </div>
  )
}

export default Status
