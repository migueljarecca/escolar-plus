import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { UniformsPage } from './pages/UniformsPage'
import { RegisterSchoolPage } from './pages/RegisterSchoolPage'


export const AppRoutes = ({ initialSchoolForm }) => {



    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/uniforms' element={<UniformsPage />}></Route>
            <Route path='/school/register' element={<RegisterSchoolPage initialSchoolForm={initialSchoolForm}/>}></Route>
            <Route path='/school/update/:id' element={<RegisterSchoolPage initialSchoolForm={initialSchoolForm}/>}></Route>
        </Routes>
    )
}