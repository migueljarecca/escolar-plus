
import { useState } from 'react'
// import { UserForm } from './components/UserForm'
// import { UserList } from './components/UserList'
// import { SchoolForm } from './components/SchoolForm';
import { AppRoutes } from './AppRoutes';

  const initialUserForm = {
    id: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
  }

  const initialSchoolForm = {
    id: '',
    name:'',
    address: '',
    schoolCode: '',
  }

function App() {

  const [userSelect, setUserSelect] = useState(initialUserForm);
  const [schoolSelect, setSchoolSelect] = useState(initialSchoolForm);

  const handlerSelectUser = (user) => {
    setUserSelect(user);
  }

  return (
    <>
      <AppRoutes 
        initialSchoolForm={initialSchoolForm}
        
        />

      {/* <SchoolForm initialSchoolForm={initialSchoolForm}/> */}

      {/* <UserForm 
        initialUserForm={initialUserForm}
        userSelect={userSelect}
        />
      <UserList handlerSelectUser={handlerSelectUser}/> */}
    </>
  )
}

export default App
