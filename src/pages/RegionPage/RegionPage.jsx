/**
 * RegionPage - Dynamic page for states and districts
 * Accessed via /:region route (e.g., /manipur, /imphal_west)
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet, NavLink, useParams, useLocation } from 'react-router-dom';
import StoryView from '../ExplorePage/views/StoryView';
import '../NortheastPage/NortheastPage.css'; // Reuse same styles

const HIDE_DELAY = 5000; // 5 seconds before auto-hide

/**
 * Convert URL slug back to display name
 * e.g., 'imphal_west' → 'Imphal West'
 */
function toDisplayName(slug) {
    return slug
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export default function RegionPage() {
    const { region } = useParams();
    const location = useLocation();
    const displayName = toDisplayName(region);

    // Check if we're at the root region path (no subpage)
    const isRootPath = location.pathname === `/${region}`;

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
                    <NavLink to={`/${region}`} end className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Overview
                    </NavLink>
                    <NavLink to={`/${region}/destinations`} className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Destinations
                    </NavLink>
                    <NavLink to={`/${region}/essentials`} className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Essentials
                    </NavLink>
                    <NavLink to={`/${region}/festivals`} className={({ isActive }) => `floating-nav-item ${isActive ? 'active' : ''}`}>
                        Festivals
                    </NavLink>
                </div>
            </nav>

            {/* Content Area */}
            <main className="region-content">
                {isRootPath ? (
                    <RegionOverview regionName={displayName} />
                ) : (
                    <Outlet context={{ regionName: displayName, regionSlug: region }} />
                )}
            </main>
        </div>
    );
}

/**
 * RegionOverview - Default content when no subpage is selected
 * Story content is now included directly in the overview
 */
function RegionOverview({ regionName }) {
    return (
        <div className="region-overview">
            <section className="region-hero">
                <div className="region-hero-content">
                    <div className="region-badge">
                        <span className="material-symbols-outlined">location_on</span>
                        <span>Northeast India</span>
                    </div>

                    <h1 className="region-title">{regionName.toUpperCase()}</h1>

                    <p className="region-subtitle">
                        Explore the rich culture, stunning destinations, and vibrant festivals of {regionName}.
                    </p>
                </div>
            </section>

            {/* Story content merged into overview */}
            <StoryView />
        </div>
    );
}

