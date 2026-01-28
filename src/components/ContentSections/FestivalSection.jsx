import '../InfoSection/InfoSection.css';

export default function FestivalSection({ festivals = [] }) {
    if (!festivals || festivals.length === 0) {
        return (
            <div className="content-section festival-section">
                <div className="no-data">
                    <div className="no-data-icon">🎉</div>
                    <p className="no-data-text">No upcoming festivals listed for this region.</p>
                </div>
            </div>
        );
    }

    // Format date helper
    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="content-section festival-section">
            <div className="content-section-header">
                <h2 className="content-section-title">Festivals & Events</h2>
                <p className="content-section-subtitle">Experience the vibrant celebrations</p>
            </div>

            <div className="destination-filters">
                <button className="filter-chip active">Upcoming</button>
                <button className="filter-chip">Past</button>
                <button className="filter-chip">Eco-Certified</button>
            </div>

            <div className="festival-grid">
                {festivals.map((festival) => (
                    <div key={festival.id} className="festival-card">
                        <div className="festival-image-container">
                            <img src={festival.image} alt={festival.name} className="card-image" loading="lazy" />
                            {festival.ecoCertified && (
                                <div className="eco-badge">🌱 Eco-Certified</div>
                            )}
                            <div className="festival-date-badge">
                                <span>📅 {formatDate(festival.dateStart)} - {formatDate(festival.dateEnd)}</span>
                            </div>
                        </div>
                        <div className="festival-content">
                            <div className="festival-type">{festival.type}</div>
                            <h3 className="festival-title">{festival.name}</h3>
                            <div className="festival-location">📍 {festival.location}</div>
                            <p className="card-description">{festival.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
