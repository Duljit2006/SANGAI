
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlaceById } from '../../api/apiService';
import './DestinationPage.css';

/**
 * Individual Destination Page
 * 
 * Features:
 * - Hero image with name + shortDescription
 * - Back button
 * - Sections: Overview, Cultural Significance, Local Beliefs, Logistics
 * - Practical info: Best time, tips, Google Maps link
 */
export default function DestinationPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDestination() {
            try {
                setLoading(true);
                const data = await getPlaceById(id);
                if (!data) {
                    throw new Error('Destination not found');
                }
                setDestination(data);
            } catch (err) {
                console.error("Failed to fetch destination:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchDestination();
        }
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleOpenMaps = () => {
        if (!destination) return;
        const query = destination.location ? `${destination.location.lat},${destination.location.lng}` : `${destination.name} Northeast India`;
        window.open(`https://maps.google.com/?q=${query}`, '_blank');
    };

    if (loading) {
        return (
            <div className="destination-page loading">
                <div className="loading-spinner"></div>
                <p>Loading destination details...</p>
            </div>
        );
    }

    if (error || !destination) {
        return (
            <div className="destination-page error">
                <h2>Destination not found</h2>
                <button className="back-btn" onClick={handleBack}>← Go Back</button>
            </div>
        );
    }

    // Helper to get hero image
    const heroImageUrl = destination.images && destination.images.length > 0
        ? destination.images[0].url
        : 'https://placehold.co/1920x800/333/fff?text=No+Image';

    return (
        <div className="destination-page">
            {/* Hero Section */}
            <section className="destination-hero">
                <img
                    src={heroImageUrl}
                    alt={destination.name}
                    className="hero-image"
                />
                <div className="hero-overlay">
                    <button className="back-btn" onClick={handleBack}>
                        ← Back
                    </button>
                    <div className="hero-content">
                        <h1 className="destination-name">{destination.name}</h1>
                        <p className="destination-tagline">{destination.shortDescription}</p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="destination-content">
                <div className="content-container">

                    {/* Overview */}
                    {destination.story?.overview && (
                        <div className="content-section">
                            <h2 className="section-title">Overview</h2>
                            <p className="section-text">{destination.story.overview}</p>
                        </div>
                    )}

                    {/* Cultural Significance */}
                    {destination.story?.culturalSignificance && (
                        <div className="content-section">
                            <h2 className="section-title">Cultural Significance</h2>
                            <p className="section-text">{destination.story.culturalSignificance}</p>
                        </div>
                    )}

                    {/* Local Belief / Folklore */}
                    {destination.story?.localBelief && (
                        <div className="content-section">
                            <h2 className="section-title">Local Beliefs</h2>
                            <p className="section-text">{destination.story.localBelief}</p>
                        </div>
                    )}

                    {/* Quote */}
                    {destination.story?.quote && (
                        <div className="content-section quote-section">
                            <blockquote className="destination-quote">
                                "{destination.story.quote}"
                            </blockquote>
                        </div>
                    )}

                    {/* Highlights */}
                    {destination.experience?.highlights?.length > 0 && (
                        <div className="content-section">
                            <h2 className="section-title">Highlights</h2>
                            <ul className="highlights-list">
                                {destination.experience.highlights.map((highlight, index) => (
                                    <li key={index} className="highlight-item">{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Practical Information */}
                    <div className="practical-info">
                        <h2 className="section-title">Before You Visit</h2>
                        <div className="info-cards">
                            {destination.bestTimeToVisit && (
                                <div className="info-card">
                                    <span className="info-icon">📅</span>
                                    <span className="info-label">Best Time</span>
                                    <span className="info-value">{destination.bestTimeToVisit}</span>
                                </div>
                            )}
                            {destination.type && (
                                <div className="info-card">
                                    <span className="info-icon">🏷️</span>
                                    <span className="info-label">Type</span>
                                    <span className="info-value capitalized">{destination.type}</span>
                                </div>
                            )}
                            {/* Visitor Tips as Eco Tip placeholder if available */}
                            {destination.experience?.visitorTips?.length > 0 && (
                                <div className="info-card eco-tip">
                                    <span className="info-icon">💡</span>
                                    <span className="info-label">Tip</span>
                                    <span className="info-value">{destination.experience.visitorTips[0]}</span>
                                </div>
                            )}
                        </div>
                        <button className="maps-button" onClick={handleOpenMaps}>
                            📍 Open in Google Maps
                        </button>
                    </div>

                    {/* Logistics / Getting There */}
                    {destination.logistics && (
                        <div className="content-section logistics-section">
                            <h2 className="section-title">Getting There</h2>
                            {destination.logistics.nearestTown && (
                                <p><strong>Nearest Town:</strong> {destination.logistics.nearestTown} ({destination.logistics.distanceFromNearestTown})</p>
                            )}
                            {destination.logistics.transportationInfo && (
                                <p className="transport-info">{destination.logistics.transportationInfo}</p>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
