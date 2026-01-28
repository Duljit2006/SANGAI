import React from 'react';
import './EssentialsView.css';

/**
 * Essentials View - Travel Guidance & Etiquette
 * Bento Grid Layout
 */
export default function EssentialsView() {
    return (
        <div className="essentials-view">
            {/* HERO SECTION */}
            <div className="essentials-hero">
                <h1>Travel Guidance & Etiquette</h1>
                <p>Respect the Land, Embrace the Culture. A comprehensive guide to mindful exploration in the hidden gems of Northeast India.</p>
            </div>

            {/* PERSONA CARDS */}
            <div className="persona-grid">
                {/* Manual Data for now */}
                <div className="persona-card group">
                    <div className="persona-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWv3zEsLAwRWEMjaOLMRRW94eRs4vwkAdmTTiQ8--G5XvvfsWa83_TJNSN-uDL6ZIucOqioRggYqnNJpNsKQf1oS2z3bEwlX4L5m3cPgWQABqMgocGifNXnf7yr70xaiN7qpCIbw0CnJM_tCRSFIuJVFqTMzqP0Zayp0GZw__edSBXWyGv7vM_e_2g7J27I9QH6NrHxQr5Yjj_yXbgB84gA62yvTEQ4zB4AUQzkdVQ0FXPkoW7FAK0a757kfronduv8tkpcFY9mg")' }}></div>
                    <div className="persona-overlay"></div>
                    <div className="persona-content">
                        <div className="persona-icon"><span className="material-symbols-outlined">flag</span></div>
                        <h3>First-time Visitor</h3>
                        <p>Essential permits, packing lists, and what to expect on your first journey.</p>
                    </div>
                </div>

                <div className="persona-card group">
                    <div className="persona-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAm5DPG0nEilSe9OftInwltslhrlaBpl0EAPaE8wFOHcgexFZxSeHa7nmSYEKYkCQQz0LGiJF-CCScE2inGuFhRwFQe-o3aNa4jBW-9o7Sjix5PMew-dVWDDHUfZHaF1S19t5-HjJoMtOEsLoZyY3JudLFvn015FeMcDZ2G8SsiqBEDp58KQJkgkogPJKpDdyPicEcCXyQ1byBGodInrVzLHM7uRWkQcoP3z0NsT183LBsPZIhWo9fnKgyBknVvydkOO6al-U0m_w")' }}></div>
                    <div className="persona-overlay"></div>
                    <div className="persona-content">
                        <div className="persona-icon"><span className="material-symbols-outlined">person</span></div>
                        <h3>Solo Travel</h3>
                        <p>Safety tips, hostel recommendations, and connectivity guides for soloists.</p>
                    </div>
                </div>

                <div className="persona-card group">
                    <div className="persona-bg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrYHkoX_WBhWNjOd5E9iHdptOf2XHnAWUs8zWdpE6WY6chDVGOwDD0nCzVLDpvOpIIQwvY6E7Zm-HRbPjkoOuO2lFK8LcA_g9xrroffKnnu5E40fPbBFKqb2qhd61CkuA2y8_2PTo5PefG5NQMgkBQfQ9VINLDhVe6hYyV4DlxnkyeDef1BDUJub_AeQPMBQ4bLZH-tSOe-nUxEFFti4lAlc3RoFhC_C8vtcXGC9WyFS8MQildCAVZJbNO9DS3_0EhqcksfRYURg")' }}></div>
                    <div className="persona-overlay"></div>
                    <div className="persona-content">
                        <div className="persona-icon"><span className="material-symbols-outlined">diversity_3</span></div>
                        <h3>Cultural Travel</h3>
                        <p>Festival calendars, homestay etiquette, and language guides.</p>
                    </div>
                </div>
            </div>

            {/* BENTO GRID - ETIQUETTE & REALITIES */}
            <div className="bento-grid">
                {/* Cultural Etiquette */}
                <div className="bento-item etiquette-box">
                    <div className="bento-header">
                        <span className="material-symbols-outlined text-primary">handshake</span>
                        <h2>Cultural Etiquette</h2>
                    </div>

                    <div className="checklist">
                        <div className="checklist-item">
                            <input type="checkbox" checked readOnly />
                            <div>
                                <h4>Respect Local Privacy</h4>
                                <p>Always ask permission before photographing locals, especially in tribal areas.</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <input type="checkbox" checked readOnly />
                            <div>
                                <h4>Shoe Removal</h4>
                                <p>Remove shoes before entering homes, kitchens, or places of worship.</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <input type="checkbox" checked readOnly />
                            <div>
                                <h4>Learn Greetings</h4>
                                <p>A simple 'Khulumkha' (Tripura) or 'Namaste' goes a long way.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photography Rules */}
                <div className="bento-item photo-box">
                    <div className="bento-header">
                        <span className="material-symbols-outlined text-primary">photo_camera</span>
                        <h2>Photography</h2>
                    </div>

                    <div className="rules-list">
                        <div className="rule-item">
                            <div className="rule-icon success"><span className="material-symbols-outlined">check_circle</span></div>
                            <div>
                                <h4>Landscapes & Nature</h4>
                                <p>Free to capture the stunning hills and valleys.</p>
                            </div>
                        </div>
                        <div className="rule-divider"></div>
                        <div className="rule-item">
                            <div className="rule-icon warning"><span className="material-symbols-outlined">front_hand</span></div>
                            <div>
                                <h4>Ask First</h4>
                                <p>Portraits of elders and children require verbal consent.</p>
                            </div>
                        </div>
                        <div className="rule-divider"></div>
                        <div className="rule-item">
                            <div className="rule-icon danger"><span className="material-symbols-outlined">no_photography</span></div>
                            <div>
                                <h4>Restricted Areas</h4>
                                <p>Military zones and borders are strictly no-photo zones.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Travel Realities Row */}
                <div className="realities-row">
                    <h2>Travel Realities</h2>
                    <div className="realities-grid">
                        {/* Terrain */}
                        <div className="reality-card group">
                            <div className="reality-top">
                                <div>
                                    <h3>Terrain & Weather</h3>
                                    <p>Hilly, winding roads. Allow extra travel time.</p>
                                </div>
                                <span className="material-symbols-outlined icon-faded">landscape</span>
                            </div>
                            <div className="reality-metric">
                                <div className="metric-label">
                                    <span>Road Difficulty</span>
                                    <span className="highlight">Moderate to Hard</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill gradient-green" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Connectivity */}
                        <div className="reality-card group">
                            <div className="reality-top">
                                <div>
                                    <h3>Connectivity</h3>
                                    <p>4G in cities; intermittent in remote villages.</p>
                                </div>
                                <span className="material-symbols-outlined icon-faded">wifi</span>
                            </div>
                            <div className="reality-metric">
                                <div className="metric-label">
                                    <span>Signal Reliability</span>
                                    <span className="highlight yellow">Variable</span>
                                </div>
                                <div className="signal-bars">
                                    <div className="bar active"></div>
                                    <div className="bar active"></div>
                                    <div className="bar active"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALLOUT */}
            <div className="guide-callout">
                <div className="callout-bg-effect"></div>
                <div className="callout-content">
                    <div className="callout-text">
                        <div className="badge-coming-soon">Coming Soon</div>
                        <h2>Local Guide Support</h2>
                        <p>Connect directly with vetted local guides who know the land best.</p>
                    </div>
                    <button className="btn-secondary" disabled>
                        <span>Get Notified</span>
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
