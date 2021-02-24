import React from 'react'
import { ListModal, UsersItem } from '.'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { Error, Loading } from '../../../components'
import { setDataExecutor } from '../../../featurers/bidsCard/bidsCardSlice'
import { getUsers } from '../../../featurers/users/usersSlice'
import { UsersDataType } from '../../../featurers/users/usersTypes'
import styles from './Users.module.scss'

interface IProps {
  user: UsersDataType
}

const Users: React.FC<IProps> = ({ user }) => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector((state) => state.tenants)
  const { data, isLoaded, error } = useAppSelector((state) => state.users)

  const [listIsOpen, setListIsOpen] = React.useState(false)

  React.useEffect(() => {
    listIsOpen && token && dispatch(getUsers(token))
  }, [listIsOpen, token, dispatch])

  const handleOpenList = () => setListIsOpen(!listIsOpen)

  const selectUser = (item: UsersDataType) => {
    dispatch(setDataExecutor(item))
    handleOpenList()
  }

  return (
    <div className={styles.wrapper}>
      <UsersItem user={user} handleClick={handleOpenList} />

      {listIsOpen && <ListModal>
        {error
          ? <Error error={error} />
          : isLoaded
            ? data.map(item => <UsersItem
                key={item.id}
                user={item}
                handleClick={() => selectUser(item)}
                isNested />)
            : <Loading />
        }
      </ListModal>}
    </div>
  )
}

export default Users
