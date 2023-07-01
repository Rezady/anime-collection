import { UserType } from "../../context/types";

const USER_DATA_STORAGE = "USER-DATA"

export const getUserHelper = ():UserType | undefined => {
  if (!localStorage) return ;

  const value: string | null = localStorage.getItem(USER_DATA_STORAGE)
  if (!value) return ;

  try {
    const user = JSON.parse(value) 
    if (user) return user
  } catch (error) {
    console.error('USER_DATA_STORAGE PARSE ERROR', error)
  }
}

export const setUserHelper = (user:UserType) => {
  if (!localStorage) {
    return
  }

  try {
    const value = JSON.stringify(user)
    localStorage.setItem(USER_DATA_STORAGE, value)
  } catch (error) {
    console.error('USER_DATA_STORAGE SAVE ERROR', error)
  }
}
