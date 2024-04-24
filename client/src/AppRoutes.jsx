import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { UniformsPage } from './pages/UniformsPage'
import { RegisterSchoolPage } from './pages/RegisterSchoolPage'
import { RegisterUniformPage } from './pages/RegisterUniformPage'
import { UniformDetailsPage } from './pages/UniformDetailsPage'


export const AppRoutes = () => {



    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>

            <Route path='/uniforms/:id' element={<UniformsPage />}></Route>

            <Route path='/uniform/details' element={<UniformDetailsPage />}></Route>

            <Route path='/school/register' element={<RegisterSchoolPage />}></Route>
            <Route path='/school/update/:id' element={<RegisterSchoolPage />}></Route>

            <Route path='/uniform/register' element={<RegisterUniformPage/>}></Route>
            <Route path='/uniform/update/:id' element={<RegisterUniformPage/>}></Route>

        </Routes>
    )
}