import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { UniformsPage } from './pages/UniformsPage'
// import { RegisterSchoolPage } from './pages/RegisterSchoolPage'
// import { RegisterUniformPage } from './pages/RegisterUniformPage'
import { UniformDetailsPage } from './pages/UniformDetailsPage'
import { ShopCart } from './pages/ShopCart'
import { Wishlist } from './pages/Wishlist'
import { UserLoginPage } from './pages/UserLoginPage'
import { UserRegisterPage } from './pages/UserRegisterPage'
import { Perfil } from './pages/Perfil'
import { UserUpdatePage } from './pages/UserUpdatePage'
import { AdminDashboard } from './components/admin/AdminDashboard'
import { User } from './components/admin/User'
import { Schools } from './components/admin/School'
import { Uniform } from './components/admin/Uniform'
import { PerfilContent } from './components/PerfilContent'
import { AppInfo } from './pages/AppInfo'


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>

            <Route path='/uniforms/:id' element={<UniformsPage />}></Route>

            <Route path='/uniform/details/:id' element={<UniformDetailsPage />}></Route>

            {/* <Route path='/school/register' element={<RegisterSchoolPage />}></Route> */}
            {/* <Route path='/school/update/:id' element={<RegisterSchoolPage />}></Route> */}

            {/* <Route path='/uniform/register' element={<RegisterUniformPage />}></Route> */}
            {/* <Route path='/uniform/update/:id' element={<RegisterUniformPage />}></Route> */}

            <Route path='/cart' element={<ShopCart />}></Route>

            <Route path='/wishlist' element={<Wishlist />}></Route>

            <Route path='/user/login' element={<UserLoginPage />}></Route>
            <Route path='/user/register' element={<UserRegisterPage />}></Route>
            {/* <Route path='/user/update/:id' element={<UserUpdatePage />}></Route> */}

            <Route path='/user/update/:id' element={<UserRegisterPage />}></Route>

            <Route path='/perfil' element={<Perfil />}>
                <Route path='' element={<PerfilContent />}></Route>
                <Route path='update' element={<UserUpdatePage />}></Route>
            </Route>    

            <Route path='/admin/dashboard' element={<AdminDashboard />}>
                <Route path='users' element={<User />}></Route>
                <Route path='schools' element={<Schools />}></Route>
                <Route path='uniforms' element={<Uniform />}></Route>
            </Route>

            <Route path='/app-info' element={<AppInfo />}></Route>

 


        </Routes>
    )
}