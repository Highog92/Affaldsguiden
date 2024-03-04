import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation/Navigation';
import { Footer } from '../Components/Footer/Footer';
export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>

    )
}