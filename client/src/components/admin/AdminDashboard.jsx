import { NavLink, Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const AdminDashboard = () => {

    return (
        <section className="section-admin">
            
            <Sidebar />

            <div className="content-admin">
                <Outlet />
            </div>
        </section>
    )
}