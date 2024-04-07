import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Uniforms } from './pages/Uniforms'
import { SchoolFormPage } from './pages/SchoolFormPage'


export const AppRoutes = ({ initialSchoolForm }) => {



    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/uniforms' element={<Uniforms />}></Route>
            <Route path='/school/register' element={<SchoolFormPage/>}></Route>
            <Route path='/school/update/:id' element={<SchoolFormPage initialSchoolForm={initialSchoolForm}/>}></Route>
        </Routes>
    )
}