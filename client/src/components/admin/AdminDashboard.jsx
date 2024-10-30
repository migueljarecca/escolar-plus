import { NavLink, Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { AdminHeader } from "./AdminHeader"

export const AdminDashboard = () => {

    return (
        <main className="main-admin">
          
            <aside className="sidebar-admin">
                <Sidebar />
            </aside>

            <section className="section-admin">

                <header className="header-admin">
                    <AdminHeader />
                </header>

                <div className="div-content">
                    <Outlet />
                </div>
            </section>
            

        </main>
    )
}