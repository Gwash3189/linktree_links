import React from 'react'

// TODO
// Using a context here allows me to avoid props drilling user information
// down to the avatar and username level. It also allows me to lean onto
// the hooks API that react provides

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
