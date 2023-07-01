import { FC, createContext, useContext, useState } from 'react'
import { setUserHelper, getUserHelper } from '../helpers/functions/UserHelpers';
import { InitialContext, UserType } from './types';
import { STATUS } from '../helpers/constants/anime';

const initialData = {
  id: 0,
  name: "",
  collectionList: STATUS,
  collection: {"Watching": []}
}


const initialContext = {user: initialData, saveUser:() => {}}

const UserDataContext = createContext<InitialContext>(initialContext)

export const useUserContext = () => useContext(UserDataContext)

const UserContext:FC<{children: JSX.Element | JSX.Element[] }> = ({children}) => {

  const [user, setUser] = useState<UserType | undefined>(getUserHelper())
  const saveUser = (data:UserType) => {
    setUser(data)
    if (data) {
      setUserHelper(data)
    } 
  }

  return (
    <UserDataContext.Provider value={{user, saveUser} as {user:UserType, saveUser: (user:UserType) => void}}>
			{children}
		</UserDataContext.Provider>
  )
}

export default UserContext