import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import './CulturalPage.css';

// Mock Data (Same as before)
const CATEGORY_DATA = {
    festivals: [
        { id: 'hornbill', name: 'Hornbill Festival', location: 'Nagaland', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200' },
        { id: 'bihu', name: 'Bihu Festival', location: 'Assam', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200' },
        { id: 'sangai', name: 'Sangai Festival', location: 'Manipur', image: 'https://images.unsplash.com/photo-1605377349974-9463c23e800d?w=1200' },
        { id: 'ziro', name: 'Ziro Music Festival', location: 'Arunachal Pradesh', image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=1200' },
    ],
    music: [
        { id: 'folk_drum', name: 'Traditional Drums', location: 'Across Region', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200' },
        { id: 'bamboo_flute', name: 'Bamboo Flute', location: 'Mizoram', image: 'https://images.unsplash.com/photo-1516055517766-07851299d18b?w=1200' },
        { id: 'modern_rock', name: 'Northeast Rock', location: 'Shillong', image: 'https://images.unsplash.com/photo-1501612780327-451eaf5a8227?w=1200' },
    ],
    attire: [
        { id: 'mekhela_chador', name: 'Mekhela Chador', location: 'Assam', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200' },
        { id: 'naga_shawl', name: 'Naga Warrior Shawl', location: 'Nagaland', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200' },
        { id: 'manipuri_phanek', name: 'Manipuri Phanek', location: 'Manipur', image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200' },
    ],
    food: [
        { id: 'smoked_pork', name: 'Smoked Pork with Axone', location: 'Nagaland', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200' },
        { id: 'iro_pa', name: 'Iromba', location: 'Manipur', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200' },
        { id: 'masor_tenga', name: 'Masor Tenga', location: 'Assam', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200' },
    ],
    wildlife: [
        { id: 'rhino', name: 'One-Horned Rhino', location: 'Kaziranga', image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200' },
        { id: 'sangai_deer', name: 'Sangai Deer', location: 'Loktak Lake', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200' },
        { id: 'red_panda', name: 'Red Panda', location: 'Sikkim', image: 'https://images.unsplash.com/photo-1542337351-9556816503c1?w=1200' },
    ]
};

const CATEGORIES = [
    { id: 'festivals', label: 'Festivals', icon: 'celebration' },
    { id: 'music', label: 'Music & Dance', icon: 'music_note' },
    { id: 'attire', label: 'Woven Attire', icon: 'checkroom' },
    { id: 'food', label: 'Traditional Food', icon: 'restaurant' },
    { id: 'wildlife', label: 'Wild Sanctuaries', icon: 'nature' },
];

export default function CulturalPage() {
    const { region: regionParam, category = 'festivals' } = useParams();
    const region = regionParam || 'northeast';
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');
    const pageRef = useRef(null);

    useEffect(() => {
        const name = region === 'northeast' ? 'Northeast India' : region.replace(/_/g, ' ');
        setDisplayName(name);
        window.scrollTo(0, 0);
    }, [region]);

    // Simple, Standard GSAP Reveals (No "Maestro" complexity)
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cultural-hero__content',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
            );

            gsap.fromTo('.cultural-card',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
            );
        }, pageRef);

        return () => ctx.revert();
    }, [category]);

    const handleCategoryChange = (newCategory) => {
        const path = region === 'northeast'
            ? `/northeast/culture/${newCategory}`
            : `/${region}/culture/${newCategory}`;
        navigate(path);
    };

    const currentItems = CATEGORY_DATA[category] || [];

    return (
        <div className="cultural-page" ref={pageRef}>
            {/* Standard Hero Section */}
            <header className="cultural-hero">
                {/* Hero Backdrop - Placeholder for now, can be dynamic */}
                <img
                    src="https://images.unsplash.com/photo-1626015099719-217a151b6601?auto=format&fit=crop&q=80&w=2000"
                    alt="Culture Hero"
                    className="cultural-hero__bg"
                />
                <div className="cultural-hero__overlay"></div>

                <div className="cultural-hero__content">
                    <span className="cultural-hero__tag">
                        Cultural Heritage of {displayName}
                    </span>
                    <h1 className="cultural-hero__title">
                        Discover the Soul of the Land
                    </h1>
                    <p className="cultural-hero__desc">
                        Immerse yourself in the traditions, festivals, and distinct ways of life
                        that define this region. A journey through memory and celebration.
                    </p>
                </div>
            </header>

            {/* Standard Filter Bar */}
            <div className="cultural-filter-container">
                <nav className="cultural-filter-list">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={`cultural-filter-btn ${category === cat.id ? 'active' : ''}`}
                        >
                            <span className="material-symbols-outlined">{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content Grid */}
            <main className="cultural-grid">
                {currentItems.map((item) => (
                    <Link
                        key={item.id}
                        to={region === 'northeast'
                            ? `/northeast/culture/${category}/${item.id}`
                            : `/${region}/culture/${category}/${item.id}`
                        }
                        className="cultural-card"
                    >
                        <div className="cultural-card__img-container">
                            <span className="cultural-card__overlay-tag">Hidden Gem</span>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cultural-card__img"
                            />
                        </div>
                        <div className="cultural-card__content">
                            <h3 className="cultural-card__title">
                                {item.name}
                            </h3>
                            <div className="cultural-card__location">
                                <span className="material-symbols-outlined">location_on</span>
                                {item.location}
                            </div>
                        </div>
                    </Link>
                ))}

                {currentItems.length === 0 && (
                    <div className="col-span-full text-center py-20">
                        <p className="text-xl text-stone-400">Content coming soon...</p>
                    </div>
                )}
            </main>
        </div>
    );
}
