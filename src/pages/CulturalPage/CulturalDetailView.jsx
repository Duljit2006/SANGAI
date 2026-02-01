import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './CulturalPage.css';

// Using the same layout standards as DestinationPage
export default function CulturalDetailView() {
    const { region: regionParam, category, id } = useParams();
    const region = regionParam || 'northeast';
    const navigate = useNavigate();
    const [viewData, setViewData] = useState(null);
    const viewRef = useRef(null);

    const displayName = id.replace(/_/g, ' ');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple reveal animation
        const ctx = gsap.context(() => {
            gsap.fromTo('.cultural-detail__header',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
            );

            gsap.fromTo('.cultural-detail__hero-img',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
            );

            gsap.fromTo('.cultural-detail__body',
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.4 }
            );
        }, viewRef);

        return () => ctx.revert();
    }, [id]);

    return (
        <div className="cultural-page" ref={viewRef}>
            <div className="cultural-detail-container">
                {/* Back Navigation */}
                <button
                    onClick={() => navigate(-1)}
                    className="cultural-back-btn"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back to Gallery
                </button>

                {/* Header Section */}
                <header className="cultural-detail__header">
                    <span className="cultural-detail__meta">
                        {category} • {region}
                    </span>
                    <h1 className="cultural-detail__title">
                        {displayName}
                    </h1>
                </header>

                {/* Standard Hero Image */}
                <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000"
                    alt={displayName}
                    className="cultural-detail__hero-img"
                />

                {/* Two Column Content */}
                <main className="cultural-detail__body">
                    {/* Main Text */}
                    <article className="cultural-detail__text">
                        <p>
                            To truly understand {region}, one must understand its {category}. The {displayName}
                            is more than just a tradition; it is a repository of history, belief, and community status.
                        </p>
                        <p>
                            Historically, it played a central role in the social fabric of the village. Elders would
                            pass down specific knowledge related to its execution, ensuring that every generation
                            maintained the purity of the form while allowing for organic evolution.
                        </p>
                        <p>
                            Today, despite modernization, it remains a powerful symbol of identity. Festivals and
                            gatherings are incomplete without it, drawing visitors and locals alike into a shared
                            experience of heritage.
                        </p>
                    </article>

                    {/* Sidebar Info */}
                    <aside className="cultural-detail__sidebar">
                        <div className="sidebar-group">
                            <h3 className="sidebar-title">Significance</h3>
                            <p className="sidebar-text">
                                "A bridge between the past and present, celebrating the resilience of the community."
                            </p>
                        </div>

                        <div className="sidebar-group" style={{ marginTop: '32px' }}>
                            <h3 className="sidebar-title">Best Experienced At</h3>
                            <p className="sidebar-text not-italic">
                                Annual Cultural Festival<br />
                                December - January
                            </p>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
}
