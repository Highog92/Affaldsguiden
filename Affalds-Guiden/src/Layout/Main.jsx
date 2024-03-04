import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation/Navigation';
import { Footer } from '../Components/Footer/Footer';
import { BgWaves } from '../Components/BgWaves/BgWaves';
export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <Navigation />
            <Outlet />
            <BgWaves/>
            <Footer />
        </>

    )
}