import React from 'react'

const defaultUserData = {
  email: '',
  id: 0,
  image: '',
  name: '',
  password: '',
  token: ''
}
const UserDataContext = React.createContext(defaultUserData)

export default UserDataContext;