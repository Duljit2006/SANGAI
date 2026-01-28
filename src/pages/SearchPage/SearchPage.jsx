import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

/**
 * Search Page - Global Discovery Search
 * 
 * Features:
 * - Full-page search experience
 * - Filter chips: All, States, Districts, Adventure, History, Culture
 * - Default: Featured festivals grid
 * - Search results replace default when typing
 */
export default function SearchPage() {
    const navigate = useNavigate();

    // Placeholder data for featured content
    const featuredItems = [
        {
            id: 1,
            type: 'Event',
            title: 'Hornbill Festival',
            location: 'Kisama Heritage Village, Nagaland',
            date: 'Dec 1-10, 2024',
            image: 'https://placehold.co/400x300/3a7a5a/ffffff?text=Hornbill+Festival'
        },
        {
            id: 2,
            type: 'Music',
            title: 'Ziro Festival of Music',
            location: 'Ziro Valley, Arunachal Pradesh',
            date: 'Sep 28 - Oct 1, 2024',
            image: 'https://placehold.co/400x300/2a5a4a/ffffff?text=Ziro+Festival'
        },
        {
            id: 3,
            type: 'Place',
            title: 'Loktak Lake',
            location: 'Moirang, Manipur',
            description: "World's only floating national park.",
            image: 'https://placehold.co/400x300/4a8a6a/ffffff?text=Loktak+Lake'
        },
        {
            id: 4,
            type: 'Adventure',
            title: 'Nongriat Trek',
            location: 'Cherrapunji, Meghalaya',
            description: 'Home to the Double Decker Root Bridge.',
            image: 'https://placehold.co/400x300/5a9a7a/ffffff?text=Nongriat+Trek'
        },
        {
            id: 5,
            type: 'Wildlife',
            title: 'Kaziranga National Park',
            location: 'Golaghat, Assam',
            description: 'World Heritage Site famous for One-horned Rhinos.',
            image: 'https://placehold.co/400x300/3a6a5a/ffffff?text=Kaziranga'
        },
        {
            id: 6,
            type: 'Culture',
            title: 'Torgya Festival',
            location: 'Tawang, Arunachal Pradesh',
            date: 'Jan 14-16, 2024',
            image: 'https://placehold.co/400x300/2a4a4a/ffffff?text=Torgya+Festival'
        },
    ];

    const handleCardClick = (item) => {
        if (item.type === 'Place' || item.type === 'Adventure' || item.type === 'Wildlife') {
            navigate(`/destination/${item.id}`);
        }
        // For events/festivals, we'll handle later
    };

    return (
        <div className="search-page">
            {/* Hero Search Section */}
            <section className="search-hero">
                <h1 className="search-headline">
                    Discover the unseen Northeast...
                </h1>

                {/* Search Bar */}
                <div className="search-bar-container">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search for Ziro Valley, Hornbill Festival..."
                        className="search-bar-input"
                    />
                </div>

                {/* Filter Chips */}
                <div className="filter-chips">
                    <button className="chip active">All</button>
                    <button className="chip">States</button>
                    <button className="chip">Districts</button>
                    <button className="chip">Adventure</button>
                    <button className="chip">History</button>
                    <button className="chip">Culture</button>
                </div>
            </section>

            {/* Featured Content Grid */}
            <section className="featured-section">
                <div className="section-header">
                    <h2 className="section-title">Featured Festivals & Places</h2>
                    <a href="#" className="view-all">View Calendar →</a>
                </div>

                <div className="featured-grid">
                    {featuredItems.map((item) => (
                        <div
                            key={item.id}
                            className="featured-card"
                            onClick={() => handleCardClick(item)}
                        >
                            <img src={item.image} alt={item.title} className="card-image" />
                            <div className="card-overlay">
                                <span className={`card-badge ${item.type.toLowerCase()}`}>
                                    {item.type}
                                </span>
                                <div className="card-content">
                                    {item.date && (
                                        <span className="card-date">📅 {item.date}</span>
                                    )}
                                    <h3 className="card-title">{item.title}</h3>
                                    <span className="card-location">📍 {item.location}</span>
                                    {item.description && (
                                        <p className="card-description">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
