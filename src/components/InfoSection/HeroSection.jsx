import './InfoSection.css';

/**
 * Hero Section - Displays when user scrolls past map
 * Shows region name, tagline, and hero image
 */
export default function HeroSection({ region }) {
    // const navigate = useNavigate();

    if (!region) {
        return (
            <div className="hero-section hero-placeholder">
                <div className="hero-content">
                    <h1 className="hero-title">Select a Region</h1>
                    <p className="hero-tagline">Click on a state or district on the map above</p>
                </div>
            </div>
        );
    }

    return (
        <div className="hero-section" style={{ backgroundImage: `url(${region.heroImage})` }}>
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">{region.name}</h1>
                    <p className="hero-tagline">{region.tagline}</p>
                </div>
            </div>
        </div>
    );
}
