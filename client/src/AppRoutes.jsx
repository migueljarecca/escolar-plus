import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { UniformsPage } from './pages/UniformsPage'
import { RegisterSchoolPage } from './pages/RegisterSchoolPage'


export const AppRoutes = ({ initialSchoolForm }) => {



    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>

            <Route path='/uniforms/:id' element={<UniformsPage />}></Route>

            <Route path='/school/register' element={<RegisterSchoolPage />}></Route>
            <Route path='/school/update/:id' element={<RegisterSchoolPage />}></Route>
        </Routes>
    )
}