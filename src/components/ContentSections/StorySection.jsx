import '../InfoSection/InfoSection.css';

export default function StorySection({ region }) {
    if (!region) return null;

    return (
        <div className="content-section story-section">
            <div className="content-section-header">
                <h2 className="content-section-title">Stories of {region.name}</h2>
                <p className="content-section-subtitle">Discover the heritage and culture that defines this land</p>
            </div>

            <div className="story-grid">
                <div className="story-block full-width">
                    <h3 className="story-block-title">Overview</h3>
                    <p className="story-block-text">{region.description}</p>
                </div>

                <div className="story-block">
                    <h3 className="story-block-title">History</h3>
                    <p className="story-block-text">{region.history}</p>
                </div>

                <div className="story-block">
                    <h3 className="story-block-title">Culture & Traditions</h3>
                    <p className="story-block-text">{region.culture}</p>
                </div>

                <div className="story-block">
                    <h3 className="story-block-title">Tourism Impact</h3>
                    <p className="story-block-text">{region.impact}</p>
                </div>
            </div>
        </div>
    );
}
