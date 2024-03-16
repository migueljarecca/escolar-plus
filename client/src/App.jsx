
import { useState } from 'react'
import { UserForm } from './components/UserForm'
import { UserList } from './components/UserList'

  const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
  }

function App() {

  const [userSelect, setUserSelect] = useState(initialUserForm);

  const handlerSelectUser = (user) => {
    setUserSelect(user);
  }

  return (
    <>
      <UserForm 
        initialUserForm={initialUserForm}
        userSelect={userSelect}
        />
      <UserList handlerSelectUser={handlerSelectUser}/>
    </>
  )
}

export default App
