import { useNavigate } from 'react-router-dom';
import '../InfoSection/InfoSection.css';

export default function DestinationSection({ destinations = [] }) {
    const navigate = useNavigate();

    if (!destinations || destinations.length === 0) {
        return (
            <div className="content-section destination-section">
                <div className="no-data">
                    <div className="no-data-icon">🏞️</div>
                    <p className="no-data-text">No destinations found for this region yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="content-section destination-section">
            <div className="content-section-header">
                <h2 className="content-section-title">Popular Destinations</h2>
                <p className="content-section-subtitle">Explore the must-visit places</p>
            </div>

            <div className="destination-filters">
                <button className="filter-chip active">All</button>
                <button className="filter-chip">Nature</button>
                <button className="filter-chip">Heritage</button>
                <button className="filter-chip">Adventure</button>
                <button className="filter-chip">Wildlife</button>
            </div>

            <div className="destination-grid">
                {destinations.map((dest) => (
                    <div
                        key={dest.id}
                        className="destination-card"
                        onClick={() => navigate(`/destination/${dest.id}`)}
                    >
                        <div className="card-image-container">
                            <img src={dest.image} alt={dest.name} className="card-image" loading="lazy" />
                            <div className="card-badge">{dest.type}</div>
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{dest.name}</h3>
                            <div className="card-location">
                                <span>📍</span>
                                <span>{dest.district}, {dest.region}</span>
                            </div>
                            <p className="card-description">{dest.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
