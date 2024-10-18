import { NavLink, Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { AdminHeader } from "./AdminHeader"

export const AdminDashboard = () => {

    return (
        <section className="section-admin">
            
            <div className="div-sidebar">
                <Sidebar />
            </div>

            <div className="div-admin-header">
                <AdminHeader />
            </div>
            <div className="div-content">
                <Outlet />
            </div>

        </section>
    )
}