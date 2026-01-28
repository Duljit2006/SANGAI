import React from 'react';
import StoryView from './StoryView';

/**
 * Northeast View - Default view for Explore Page
 * Reuses StoryView structure but with Northeast India content
 */
export default function NortheastView() {
    return (
        <div className="northeast-view">
            {/* Spacer to expose map */}
            <div className="view-spacer" style={{ height: '70vh' }}></div>

            <div className="content-surface" style={{ background: 'var(--bg-dark)', position: 'relative', zIndex: 30 }}>
                {/* We can reuse the StoryView layout or create a custom one */}
                {/* For speed and consistency, let's effectively inline a simplified StoryView here */}

                <section className="story-hero" style={{ height: 'auto', minHeight: '600px', paddingTop: '100px' }}>
                    <div className="story-hero-content">
                        <div className="story-badge">
                            <span className="material-symbols-outlined">public</span>
                            <span>The Hidden Jewel</span>
                        </div>

                        <h1 className="story-title">NORTHEAST INDIA</h1>

                        <p className="story-subtitle">
                            A land of eight sisters, bound by mountains, rivers, and a tapestry of over 200 tribes. Discover the unexplored paradise.
                        </p>
                    </div>
                </section>

                <div className="story-body">
                    <section className="story-grid-intro">
                        <div className="story-main-text">
                            <h2>The Last Frontier</h2>
                            <div className="prose">
                                <p>
                                    Northeast India is a region of breathtaking beauty and rich cultural diversity. From the snow-capped peaks of Arunachal Pradesh to the lush tea gardens of Assam, the living root bridges of Meghalaya to the floating national park of Manipur.
                                </p>
                                <p>
                                    Select a state on the map to begin your deep dive into the unique stories, destinations, and traditions of each region.
                                </p>
                            </div>
                        </div>
                        <div className="story-sidebar">
                            <div className="insights-card">
                                <h3>
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                    Region Highlights
                                </h3>
                                <div className="insight-item">
                                    <div className="insight-icon"><span className="material-symbols-outlined">terrain</span></div>
                                    <div>
                                        <span className="insight-label">Geography</span>
                                        <span className="insight-value">Himalayan Range</span>
                                    </div>
                                </div>
                                <div className="insight-item">
                                    <div className="insight-icon"><span className="material-symbols-outlined">diversity_3</span></div>
                                    <div>
                                        <span className="insight-label">Culture</span>
                                        <span className="insight-value">220+ Languages</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
