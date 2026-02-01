import React from 'react';
import StoryView from './StoryView';

/**
 * Northeast View - Default view for Explore Page
 * Reuses StoryView structure but with Northeast India content
 */
import React, { useState, useEffect } from 'react';
import { getPlaces } from '../../../api/apiService';

/**
 * Northeast View - Default view for Explore Page
 * Displays a paginated gallery of places with Cloudinary images.
 */
export default function NortheastView() {
    // State for places data
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch places on page change
    useEffect(() => {
        const fetchPlaces = async () => {
            setLoading(true);
            try {
                // Fetch 8 places at a time as requested
                const response = await getPlaces({ page, limit: 8 });

                if (response.success) {
                    // If page 1, set data; if > 1, append data (for infinite scroll feel or load more)
                    // The prompt says "Page 1 -> 8 images; Scroll / Next -> 8 more; Already loaded images -> cached"
                    // We'll append to existing list for value add
                    if (page === 1) {
                        setPlaces(response.data);
                    } else {
                        setPlaces(prev => [...prev, ...response.data]);
                    }

                    // Check if we reached the last page
                    if (page >= response.pages) {
                        setHasMore(false);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch places:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, [page]);

    // Handle Load More
    const handleLoadMore = () => {
        if (!loading && hasMore) {
            setPage(prev => prev + 1);
        }
    };

    /**
     * Helper to get optimized Cloudinary URL
     * Uses: w=400, q=auto, f=auto
     */
    const getOptimizedImageUrl = (url) => {
        if (!url) return '';
        // If it's already a Cloudinary URL and doesn't have query params, append them
        // If it's a raw upload specific URL, we might need real transformation logic if we want to be fancy.
        // For now, doing simple string appending if query string missing, assuming basic URL structure.
        // NOTE: Cloudinary SDK is better but simple string manip works for fetching.
        // e.g. https://res.cloudinary.com/.../upload/v123/img.jpg
        // We can inject transformations.

        // Simple append strategy as per prompt request:
        // `${place.imageUrl}?w=400&q=auto&f=auto`

        // Check if alread has '?'
        return url.includes('?')
            ? `${url}&w=400&q=auto&f=auto`
            : `${url}?w=400&q=auto&f=auto`;
    };

    return (
        <div className="northeast-view">
            {/* Spacer to expose map */}
            <div className="view-spacer" style={{ height: '70vh' }}></div>

            <div className="content-surface" style={{ background: 'var(--bg-dark)', position: 'relative', zIndex: 30, paddingBottom: '4rem' }}>

                <section className="story-hero" style={{ height: 'auto', minHeight: '400px', paddingTop: '100px' }}>
                    <div className="story-hero-content">
                        <div className="story-badge">
                            <span className="material-symbols-outlined">public</span>
                            <span>The Hidden Jewel</span>
                        </div>
                        <h1 className="story-title">NORTHEAST INDIA</h1>
                        <p className="story-subtitle">
                            A land of eight sisters. Discover the unexplored paradise through these curated destinations.
                        </p>
                    </div>
                </section>

                <div className="story-body" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                    {/* Places Grid */}
                    <div className="places-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem'
                    }}>
                        {places.map(place => {
                            // Determine image URL - support array or single string from legacy/new structure
                            let imgUrl = '';
                            if (place.imageUrl) imgUrl = place.imageUrl;
                            else if (place.images && place.images.length > 0) imgUrl = place.images[0].url;

                            // Fallback placeholder if missing
                            if (!imgUrl) imgUrl = 'https://via.placeholder.com/400x300?text=No+Image';

                            return (
                                <div key={place._id} className="place-card" style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <div className="place-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            src={getOptimizedImageUrl(imgUrl)}
                                            alt={place.name}
                                            loading="lazy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </div>
                                    <div className="place-info" style={{ padding: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                color: 'var(--primary)',
                                                fontWeight: '600'
                                            }}>
                                                {place.type}
                                            </span>
                                            {place.districtId?.stateName && (
                                                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                                                    {place.districtId.stateName}
                                                </span>
                                            )}
                                        </div>
                                        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{place.name}</h3>
                                        <p style={{
                                            fontSize: '0.9rem',
                                            opacity: 0.8,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            margin: 0
                                        }}>
                                            {place.shortDescription || place.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Loader / Load More */}
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        {loading && <p>Loading amazing places...</p>}

                        {!loading && hasMore && (
                            <button
                                onClick={handleLoadMore}
                                style={{
                                    padding: '12px 32px',
                                    background: 'transparent',
                                    border: '1px solid var(--primary)',
                                    color: 'var(--primary)',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.background = 'var(--primary)';
                                    e.currentTarget.style.color = '#000';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--primary)';
                                }}
                            >
                                Load More Gems
                            </button>
                        )}

                        {!hasMore && places.length > 0 && (
                            <p style={{ opacity: 0.5 }}>You've seen all the hidden gems!</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
