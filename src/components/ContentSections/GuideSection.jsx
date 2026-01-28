import '../InfoSection/InfoSection.css';

export default function GuideSection({ guide }) {
    if (!guide) return null;

    return (
        <div className="content-section guide-section">
            <div className="content-section-header">
                <h2 className="content-section-title">Travel Guide</h2>
                <p className="content-section-subtitle">Essential tips for a respectful and safe journey</p>
            </div>

            <div className="guide-grid">
                {/* Etiquette Card */}
                <div className="guide-card">
                    <div className="guide-card-title">
                        <span className="guide-card-icon">🙏</span>
                        Cultural Etiquette
                    </div>
                    <ul className="guide-list">
                        {guide.etiquette.map((item, index) => (
                            <li key={index} className="guide-list-item">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Photography Rules Card */}
                <div className="guide-card">
                    <div className="guide-card-title">
                        <span className="guide-card-icon">📷</span>
                        Photography Rules
                    </div>
                    <ul className="guide-list">
                        {guide.photography.map((item, index) => (
                            <li key={index} className="guide-list-item">
                                <span className={`photo-status ${item.status}`}></span>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Realities Card */}
                <div className="guide-card">
                    <div className="guide-card-title">
                        <span className="guide-card-icon">🎒</span>
                        Travel Realities
                    </div>
                    <ul className="guide-list">
                        {guide.realities.map((item, index) => (
                            <li key={index} className="guide-list-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
