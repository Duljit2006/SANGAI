import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionBottomNav.css';

const CollectionBottomNav = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Determine the "Home" / Region link based on saved map state
    const getRegionLink = () => {
        try {
            const saved = sessionStorage.getItem('sangai_map_state');
            if (saved) {
                const { selectedState } = JSON.parse(saved);
                if (selectedState) {
                    // Convert "West Bengal" -> "west_bengal" to match RegionPage slugs
                    const slug = selectedState.toLowerCase().replace(/\s+/g, '_');
                    return `/${slug}/shopping`;
                }
            }
        } catch (e) {
            console.warn('Failed to resolve region link', e);
        }
        return '/shopping'; // Fallback
    };

    const regionLink = getRegionLink();

    return (
        <div className="collection-btm-nav-section">
            <div className="page-width">
                <div className="collection-btm-nav">
                    <ul className="nav-for-coll">
                        <li>
                            <Link to={regionLink}>
                                <svg width="24" height="23" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_2_5912)">
                                        <path d="M18.4484 7.51666L10.0693 1.38168C9.90775 1.2634 9.68824 1.2634 9.52674 1.38168L1.1476 7.51666C0.942939 7.66653 0.898471 7.95392 1.04834 8.15858C1.19822 8.36324 1.48564 8.40764 1.69027 8.25784L9.798 2.32148L17.9057 8.25781C17.9875 8.31771 18.0825 8.34653 18.1767 8.34653C18.3181 8.34653 18.4576 8.28145 18.5476 8.15855C18.6975 7.95392 18.6531 7.66653 18.4484 7.51666Z" fill="black"></path>
                                        <path d="M16.2288 8.36182C15.9751 8.36182 15.7695 8.56745 15.7695 8.8211V16.1317H12.0953V12.1411C12.0953 10.8747 11.065 9.84452 9.79866 9.84452C8.53235 9.84452 7.50206 10.8748 7.50206 12.1411V16.1318H3.82781V8.82114C3.82781 8.56748 3.62215 8.36185 3.36853 8.36185C3.11491 8.36185 2.90924 8.56748 2.90924 8.82114V16.5911C2.90924 16.8447 3.11491 17.0504 3.36853 17.0504H7.96134C8.20288 17.0504 8.40054 16.8638 8.41883 16.6268C8.41994 16.6161 8.42063 16.6044 8.42063 16.5911V12.1412C8.42063 11.3813 9.0388 10.7631 9.79866 10.7631C10.5585 10.7631 11.1767 11.3813 11.1767 12.1412V16.5911C11.1767 16.6043 11.1774 16.6158 11.1785 16.6264C11.1966 16.8635 11.3943 17.0504 11.636 17.0504H16.2288C16.4824 17.0504 16.6881 16.8447 16.6881 16.5911V8.82114C16.688 8.56745 16.4824 8.36182 16.2288 8.36182Z" fill="black"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_5912">
                                            <rect width="17.6768" height="17.6768" fill="white" transform="translate(0.959595 0.333252)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </li>
                        <li><Link to="/collections/food">Food</Link></li>
                        <li><Link to="/collections/craft">Crafts</Link></li>
                        <li><Link to="/collections/textile">Textiles</Link></li>
                        <li><Link to="/collections/books">Books</Link></li>
                        <li><Link to="/collections/bamboo">Bamboo</Link></li>
                        <li><Link to="/collections/pottery">Pottery</Link></li>
                        <li>
                            <button onClick={scrollToTop} className="scroll-top-btn">
                                <svg width="16" height="10" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2627 6.35355L5.50512 1.40405L9.74754 6.35355" stroke="black" strokeWidth="1.71818" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CollectionBottomNav;
