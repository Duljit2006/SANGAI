import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import heroBg from '../../assets/shopping/image.png';
import './ShoppingPage.css';

const ShoppingPage = () => {
    const { region } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="shopping-page">
            {/* Reusing existing Navbar, assuming it handles its own positioning/overlay */}

            <main className="shopping-main">
                {/* Hero Section or Intro could go here later */}
                <div className="shopping-hero" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="shopping-hero-content">
                        <h1 className="shopping-hero-title">
                            {region ? `${region.charAt(0).toUpperCase() + region.slice(1)} Store` : 'The Northeast Store'}
                        </h1>
                        <p className="shopping-hero-subtitle">
                            Curated collection of authentic products from {region ? region : 'Northeast India'}
                        </p>
                    </div>
                </div>

                {/* The requested Shop By Category Slider */}
                <ShopByCategory />

                {/* Placeholder for more sections (e.g., Featured Products, etc.) */}
                <section className="shopping-placeholder-section">
                    <div className="container">
                        <p style={{ textAlign: 'center', color: 'var(--color-text-light)', padding: '2rem' }}>
                            More collections coming soon...
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ShoppingPage;
