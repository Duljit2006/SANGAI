import { useParams, useNavigate } from 'react-router-dom';
import './DestinationPage.css';

/**
 * Individual Destination Page
 * 
 * Features:
 * - Hero image with name + tagline
 * - Back button
 * - Sections: Description, Cultural Significance, History, Tourism Impact
 * - Practical info: Best time, difficulty, eco-tips, Google Maps link
 * - Nearby festivals (horizontal scroll)
 * - Nearby homestays (horizontal scroll)
 */
export default function DestinationPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Placeholder data - will be fetched from API later
    const destination = {
        id: id,
        name: 'Loktak Lake',
        tagline: 'The Floating Jewel of Manipur',
        heroImage: 'https://placehold.co/1920x800/3a7a5a/ffffff?text=Loktak+Lake+Hero',
        description: 'Loktak Lake is the largest freshwater lake in Northeast India, located in the state of Manipur. It is famous for the phumdis floating over it, and the Keibul Lamjao National Park, the only floating national park in the world.',
        culturalSignificance: 'The lake holds immense cultural importance for the Meitei people. It is considered sacred and features prominently in local folklore and traditions. The fishing communities living on the phumdis have developed a unique way of life that has been sustained for generations.',
        history: 'Archaeological evidence suggests that the lake and its surrounding areas have been inhabited since ancient times. The lake has witnessed numerous historical events and has been a silent witness to the evolution of Manipuri civilization.',
        tourismImpact: 'Sustainable tourism initiatives have been implemented to protect the fragile ecosystem while allowing visitors to experience the unique beauty of the lake. Local communities benefit from eco-tourism activities.',
        practicalInfo: {
            bestTime: 'October - April',
            difficulty: 'Easy',
            ecoTip: 'Please do not litter. Take all trash with you and respect the floating ecosystem.',
        },
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleOpenMaps = () => {
        window.open(`https://maps.google.com/?q=${destination.name}+Manipur+India`, '_blank');
    };

    return (
        <div className="destination-page">
            {/* Hero Section */}
            <section className="destination-hero">
                <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="hero-image"
                />
                <div className="hero-overlay">
                    <button className="back-btn" onClick={handleBack}>
                        ← Back
                    </button>
                    <div className="hero-content">
                        <h1 className="destination-name">{destination.name}</h1>
                        <p className="destination-tagline">{destination.tagline}</p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="destination-content">
                <div className="content-container">
                    {/* Description */}
                    <div className="content-section">
                        <h2 className="section-title">Overview</h2>
                        <p className="section-text">{destination.description}</p>
                    </div>

                    {/* Cultural Significance */}
                    <div className="content-section">
                        <h2 className="section-title">Cultural Significance</h2>
                        <p className="section-text">{destination.culturalSignificance}</p>
                    </div>

                    {/* History */}
                    <div className="content-section">
                        <h2 className="section-title">History</h2>
                        <p className="section-text">{destination.history}</p>
                    </div>

                    {/* Tourism Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Impact of Tourism</h2>
                        <p className="section-text">{destination.tourismImpact}</p>
                    </div>

                    {/* Practical Information */}
                    <div className="practical-info">
                        <h2 className="section-title">Before You Visit</h2>
                        <div className="info-cards">
                            <div className="info-card">
                                <span className="info-icon">📅</span>
                                <span className="info-label">Best Time</span>
                                <span className="info-value">{destination.practicalInfo.bestTime}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-icon">🥾</span>
                                <span className="info-label">Difficulty</span>
                                <span className="info-value">{destination.practicalInfo.difficulty}</span>
                            </div>
                            <div className="info-card eco-tip">
                                <span className="info-icon">🌱</span>
                                <span className="info-label">Eco Tip</span>
                                <span className="info-value">{destination.practicalInfo.ecoTip}</span>
                            </div>
                        </div>
                        <button className="maps-button" onClick={handleOpenMaps}>
                            📍 Open in Google Maps
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
