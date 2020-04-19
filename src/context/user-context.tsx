import React from 'react'

export type UserData = {
  username: string,
  avatar: string
}

const defaultUserData = () => ({
  username: '',
  avatar: '',
})

const UserDataContext = React.createContext<UserData>(defaultUserData())

export const useUserData = (): [UserData, Function] => {
  const context = React.useContext(UserDataContext)
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider')
  }

  return context as unknown as [UserData, Function]
}

export const UserDataProvider = (props: any) => {
  const [userData, setUserData] = React.useState(props.userData || defaultUserData)
  return <UserDataContext.Provider value={[userData, setUserData]} {...props} />
}
