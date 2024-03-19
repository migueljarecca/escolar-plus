
import { useState } from 'react'
import { UserForm } from './components/UserForm'
import { UserList } from './components/UserList'
import { Header } from './components/Header';



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
      <Header />
      <UserForm 
        initialUserForm={initialUserForm}
        userSelect={userSelect}
        />
      <UserList handlerSelectUser={handlerSelectUser}/>
    </>
  )
}

export default App
