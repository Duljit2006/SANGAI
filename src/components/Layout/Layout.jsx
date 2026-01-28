import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

/**
 * Layout Component
 * Wraps all pages with the global Navbar
 * Navbar visibility/style varies by route
 */
export default function Layout() {
    const location = useLocation();

    // Hide navbar on intro page for immersive experience
    const isIntroPage = location.pathname === '/';

    return (
        <div className="layout">
            {!isIntroPage && <Navbar />}
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
