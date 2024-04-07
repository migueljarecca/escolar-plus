import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Uniforms } from './pages/Uniforms'


export const AppRoutes = () => {



    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/uniforms' element={<Uniforms />}></Route>
        </Routes>
    )
}