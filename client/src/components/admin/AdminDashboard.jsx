import { NavLink, Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const AdminDashboard = () => {

    return (
        <section>
            
            <Sidebar />

            <div className="admin-content">
                <Outlet />
            </div>
        </section>
    )
}