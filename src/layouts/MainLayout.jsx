import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#06060a] flex flex-col">
            <Header />
            <div className="flex-1 flex items-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout