/**
 * NortheastPage - Dedicated page for Northeast region overview
 * Accessed via /northeast route
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import StoryView from '../ExplorePage/views/StoryView';
import './NortheastPage.css';

const HIDE_DELAY = 5000; // 5 seconds before auto-hide

export default function NortheastPage() {
    const location = useLocation();
    const isRootPath = location.pathname === '/northeast';

    // Floating nav visibility state
    const [isNavVisible, setIsNavVisible] = useState(true);
    const hideTimeoutRef = useRef(null);

    /**
     * Reset the hide timer - call this on any user activity
     */
    const resetHideTimer = useCallback(() => {
        // Show nav immediately
        setIsNavVisible(true);

        // Clear existing timeout
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
        }

        // Set new timeout to hide after 5 seconds
        hideTimeoutRef.current = setTimeout(() => {
            setIsNavVisible(false);
        }, HIDE_DELAY);
    }, []);

    /**
     * Handle mouse movement - show nav and reset timer
     */
    const handleMouseMove = useCallback(() => {
        resetHideTimer();
    }, [resetHideTimer]);

    // Set up mouse move listener and initial timer
    useEffect(() => {
        // Set initial hide timeout (without calling setState synchronously)
        hideTimeoutRef.current = setTimeout(() => {
            setIsNavVisible(false);
        }, HIDE_DELAY);

        // Listen for mouse movement on the document
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, [handleMouseMove]);

    return (
        <div className="region-page">
            {/* Floating Navigation - Bottom Center */}
            <nav className={`floating-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
                <div className="floating-nav-container">
                    <NavLink to="/northeast" end className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Overview
                    </NavLink>
                    <NavLink to="/northeast/destinations" className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Destinations
                    </NavLink>
                    <NavLink to="/northeast/essentials" className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Essentials
                    </NavLink>
                    <NavLink to="/northeast/festivals" className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Festivals
                    </NavLink>
                </div>
            </nav>

            {/* Content Area */}
            <main className="region-content">
                {isRootPath ? (
                    <NortheastOverview />
                ) : (
                    <Outlet />
                )}
            </main>
        </div>
    );
}

/**
 * NortheastOverview - Default content when no subpage is selected
 * Story content is now included directly in the overview
 */
function NortheastOverview() {
    return (
        <div className="region-overview">
            <section className="region-hero">
                <div className="region-hero-content">
                    <div className="region-badge">
                        <span className="material-symbols-outlined">public</span>
                        <span>The Hidden Jewel</span>
                    </div>

                    <h1 className="region-title">NORTHEAST INDIA</h1>

                    <p className="region-subtitle">
                        A land of eight sisters, bound by mountains, rivers, and a tapestry of over 200 tribes. Discover the unexplored paradise.
                    </p>
                </div>
            </section>

            {/* Story content merged into overview */}
            <StoryView />
        </div>
    );
}
