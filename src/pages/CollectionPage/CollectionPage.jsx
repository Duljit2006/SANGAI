import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/Shop/ProductCard';
import CategorySlider from '../../components/Shop/CategorySlider';
import CollectionBottomNav from '../../components/Shop/CollectionBottomNav';
import { getProducts, getProductsByCategory } from '../../api/apiService';
import './CollectionPage.css';

const CollectionPage = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [sortBy, setSortBy] = useState('best-selling');

    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchProducts() {
            setLoading(true);
            try {
                let data = [];
                if (category) {
                    data = await getProductsByCategory(category);
                } else {
                    data = await getProducts();
                }
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch products", err);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [category]);

    const collectionTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Collection';

    // Specific check for "wellness" to show specific hero assets if desired
    const isWellness = category?.toLowerCase() === 'wellness';
    const isCraft = category?.toLowerCase() === 'craft';
    const isTextile = category?.toLowerCase() === 'textile';
    const isBooks = category?.toLowerCase() === 'books';
    const isFood = category?.toLowerCase() === 'food';
    const isBamboo = category?.toLowerCase() === 'bamboo';
    const isPottery = category?.toLowerCase() === 'pottery';

    const heroImage = isWellness
        ? "//themeghalayanage.store/cdn/shop/files/PER_8260.jpg?v=1742284403"
        : isTextile
            ? "//themeghalayanage.store/cdn/shop/collections/72.png?v=1754985590"
            : isBooks
                ? "//themeghalayanage.store/cdn/shop/collections/74.png?v=1754987160"
                : "//themeghalayanage.store/cdn/shop/collections/73_1.png?v=1754984438";

    const renderHero = () => {
        if (isCraft) {
            return (
                <div className="collection-hero collection-hero-video">
                    <video
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster="//themeghalayanage.store/cdn/shop/files/preview_images/62a55a7e3ecb44a1a4bd33882635572a.thumbnail.0000000000_small.jpg?v=1720598729"
                        className="hero-video"
                    >
                        <source src="//themeghalayanage.store/cdn/shop/videos/c/vp/62a55a7e3ecb44a1a4bd33882635572a/62a55a7e3ecb44a1a4bd33882635572a.SD-480p-1.5Mbps-31505627.mp4?v=0" type="video/mp4" />
                    </video>
                    <div className="collection-hero-overlay"></div>
                    <div className="collection-hero-content">
                        <h1>{collectionTitle}</h1>
                    </div>
                </div>
            );
        }

        if (isTextile) {
            return (
                <div className="collection-hero collection-hero-video">
                    <video
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster="//themeghalayanage.store/cdn/shop/files/preview_images/774c4b10e04943169e41f6725d3f598f.thumbnail.0000000000_small.jpg?v=1720599720"
                        className="hero-video"
                    >
                        <source src="//themeghalayanage.store/cdn/shop/videos/c/vp/774c4b10e04943169e41f6725d3f598f/774c4b10e04943169e41f6725d3f598f.SD-480p-1.5Mbps-31506170.mp4?v=0" type="video/mp4" />
                    </video>
                    <div className="collection-hero-overlay"></div>
                    <div className="collection-hero-content">
                        <h1>{collectionTitle}</h1>
                    </div>
                </div>
            );
        }

        if (isFood) {
            return (
                <div className="collection-hero collection-hero-video">
                    <video
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster="//themeghalayanage.store/cdn/shop/files/preview_images/d3cd610cdaf847e1813c8a11d63dc027.thumbnail.0000000000_small.jpg?v=1720600931"
                        className="hero-video"
                    >
                        <source src="//themeghalayanage.store/cdn/shop/videos/c/vp/d3cd610cdaf847e1813c8a11d63dc027/d3cd610cdaf847e1813c8a11d63dc027.SD-480p-1.5Mbps-31506933.mp4?v=0" type="video/mp4" />
                    </video>
                    <div className="collection-hero-overlay"></div>
                    <div className="collection-hero-content">
                        <h1>{collectionTitle}</h1>
                    </div>
                </div>
            );
        }

        if (isBamboo) {
            return (
                <div className="collection-hero collection-hero-video">
                    <video
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster="//themeghalayanage.store/cdn/shop/files/preview_images/f0116ee87cc046bf9fce60d9e744f823.thumbnail.0000000000_small.jpg?v=1720601120"
                        className="hero-video"
                    >
                        <source src="//themeghalayanage.store/cdn/shop/videos/c/vp/f0116ee87cc046bf9fce60d9e744f823/f0116ee87cc046bf9fce60d9e744f823.SD-480p-1.5Mbps-31507127.mp4?v=0" type="video/mp4" />
                    </video>
                    <div className="collection-hero-overlay"></div>
                    <div className="collection-hero-content">
                        <h1>{collectionTitle}</h1>
                    </div>
                </div>
            );
        }

        if (isPottery) {
            return (
                <div className="collection-hero collection-hero-video">
                    <video
                        playsInline
                        autoPlay
                        loop
                        muted
                        poster="//themeghalayanage.store/cdn/shop/files/preview_images/f2bac010cf5a45dd850670bfc2ca6dda.thumbnail.0000000000_small.jpg?v=1720601257"
                        className="hero-video"
                    >
                        <source src="//themeghalayanage.store/cdn/shop/videos/c/vp/f2bac010cf5a45dd850670bfc2ca6dda/f2bac010cf5a45dd850670bfc2ca6dda.SD-480p-1.5Mbps-31507300.mp4?v=0" type="video/mp4" />
                    </video>
                    <div className="collection-hero-overlay"></div>
                    <div className="collection-hero-content">
                        <h1>{collectionTitle}</h1>
                    </div>
                </div>
            );
        }

        return (
            <div className="collection-hero">
                <img
                    src={heroImage}
                    alt={collectionTitle}
                    className="collection-hero-bg"
                />
                <div className="collection-hero-overlay"></div>
                <div className="collection-hero-content">
                    <h1>{collectionTitle}</h1>
                    <p className="banner-tags">HOMEGROWN, HANDPICKED, HANDCRAFTED</p>
                </div>
            </div>
        );
    };

    // Derived Facets from the *displayed* products
    const locations = [...new Set(products.map(p => p.facets?.location).filter(Boolean))];

    // Filtering Logic (Client-side)
    const filteredProducts = products.filter(product => {
        // Price Filter
        if (minPrice && product.price < Number(minPrice)) return false;
        if (maxPrice && product.price > Number(maxPrice)) return false;
        // Location Filter
        if (selectedLocations.length > 0 && (!product.facets?.location || !selectedLocations.includes(product.facets.location))) return false;
        return true;
    });

    const handleLocationChange = (loc) => {
        setSelectedLocations(prev =>
            prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
        );
    };

    // Sorting Logic
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-ascending':
                return a.price - b.price;
            case 'price-descending':
                return b.price - a.price;
            case 'title-ascending':
                return a.title.localeCompare(b.title);
            case 'title-descending':
                return b.title.localeCompare(a.title);
            // Add 'created-descending', 'created-ascending', 'best-selling' as no-op or specific logic if date exists
            default:
                return 0;
        }
    });

    return (
        <div className="collection-page">
            {/* Dynamic Banner / Hero */}
            {renderHero()}

            {/* Category Slider - Shown on all collection pages or specific ones? 
          User HTML had it prominent, so we include it. */}
            <CategorySlider />

            <div className="collection-container">
                {/* Sidebar Filter */}
                <aside className="collection-sidebar">
                    <div className="filter-group">
                        <h3>Filter:</h3>

                        {/* Price Filter */}
                        <div className="filter-section">
                            <details open>
                                <summary>
                                    <h4>Price <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor"></path></svg></h4>
                                </summary>
                                <div className="price-range-inputs">
                                    <div className="price-input">
                                        <span>₹</span>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={minPrice}
                                            onChange={e => setMinPrice(e.target.value)}
                                            min="0"
                                        />
                                        <label>From</label>
                                    </div>
                                    <div className="price-input">
                                        <span>₹</span>
                                        <input
                                            type="number"
                                            placeholder="3000"
                                            value={maxPrice}
                                            onChange={e => setMaxPrice(e.target.value)}
                                            min="0"
                                        />
                                        <label>To</label>
                                    </div>
                                </div>
                            </details>
                        </div>

                        {/* Location Filter */}
                        <div className="filter-section">
                            <details open>
                                <summary>
                                    <h4>Location <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor"></path></svg></h4>
                                </summary>
                                <div className="filter-list">
                                    {locations.length > 0 ? locations.map((loc, idx) => (
                                        <label key={idx} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={selectedLocations.includes(loc)}
                                                onChange={() => handleLocationChange(loc)}
                                            />
                                            <span className="checkmark"></span>
                                            <span className="label-text">{loc}</span>
                                        </label>
                                    )) : <div style={{ fontSize: '0.9rem', color: '#888' }}>No locations available</div>}
                                </div>
                            </details>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="collection-main">
                    <div className="collection-toolbar">
                        <span className="product-count">{filteredProducts.length} products</span>
                        <div className="sort-selector">
                            <label>Sort by:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="best-selling">Best selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-grid">
                        {sortedProducts.length > 0 ? (
                            sortedProducts.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        ) : (
                            <div style={{ gridColumn: '1 / -1', padding: '5rem 2rem', textAlign: 'center', color: '#666' }}>
                                <p>No products found in the <strong>{category}</strong> category.</p>
                                <a href="/shopping" style={{ textDecoration: 'underline', marginTop: '1rem', display: 'inline-block' }}>Back to Shopping</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <CollectionBottomNav />
        </div>
    );
};

export default CollectionPage;
