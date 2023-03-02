import { Topbar } from "../components"
import { Sidebar } from "../components/global/Sidebar"

export const LayoutDashboard = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div className='content'>
            <Topbar />
            <main>{children}</main>
            </div>
        </>

    )
}
