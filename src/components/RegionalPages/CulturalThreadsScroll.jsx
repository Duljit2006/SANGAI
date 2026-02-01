/**
 * CulturalThreadsScroll - Horizontal scroll gallery
 * Section 5 for Region pages (Cultural Threads)
 */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './RegionalPages.css';

export default function CulturalThreadsScroll({
    threads = [],
    title = "Cultural Threads"
}) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 340; // Card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (!threads.length) return null;

    return (
        <section className="cultural-threads-section">
            <div className="threads-header">
                <h2 className="section-title">{title}</h2>
                <div className="scroll-controls">
                    <button
                        className="scroll-btn"
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <button
                        className="scroll-btn"
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>

            <div className="threads-scroller" ref={scrollRef}>
                {threads.map((thread, index) => {
                    // Map titles to section IDs for deep linking
                    let hash = '';
                    if (thread.title.includes('Festival')) hash = 'festivals';
                    else if (thread.title.includes('Music')) hash = 'music';
                    else if (thread.title.includes('Woven') || thread.title.includes('Attire')) hash = 'attire';
                    else if (thread.title.includes('Food')) hash = 'food';
                    else if (thread.title.includes('Wild')) hash = 'wildlife';

                    return (
                        <Link
                            to={`culture/${hash}`}
                            className="thread-card block transition-transform hover:scale-[1.02]"
                            key={index}
                        >
                            <div
                                className="thread-image"
                                style={{ backgroundImage: `url(${thread.imageUrl})` }}
                            >
                                <div className="thread-overlay"></div>
                            </div>
                            <div className="thread-content">
                                <h3 className="thread-title">{thread.title}</h3>
                                <p className="thread-insight">{thread.insight}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
