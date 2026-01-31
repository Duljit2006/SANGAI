import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getProductsByCategory } from '../../api/apiService';
import './ProductPage.css';

const ProductPage = () => {
    const { category, productSlug } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                // 1. Fetch Main Product
                const productData = await getProductBySlug(productSlug);

                if (productData) {
                    setProduct(productData);
                    setActiveImage(productData.images[0]);

                    // Set default variant
                    if (productData.variants && productData.variants.length > 0) {
                        const defaultVar = productData.variants.find(v => v.inStock) || productData.variants[0];
                        setSelectedVariant(defaultVar);
                    }

                    // 2. Fetch Related Products (same category)
                    // We fetch by category, then filter out current product client-side or assume API handles
                    const catProducts = await getProductsByCategory(productData.category);
                    setRelatedProducts(
                        catProducts.filter(p => p.slug !== productSlug).slice(0, 4)
                    );
                }
            } catch (err) {
                console.error("Failed to load product", err);
            } finally {
                setLoading(false);
            }
        }

        if (productSlug) {
            fetchData();
        }
    }, [productSlug, category]);

    if (loading) {
        return <div className="product-page-loading">Loading...</div>;
    }

    if (!product) {
        return <div className="product-page-loading">Product not found</div>;
    }

    const handleVariantChange = (variant) => {
        setSelectedVariant(variant);
    };

    const handleQuantityChange = (change) => {
        const newQty = quantity + change;
        if (newQty >= 1 && newQty <= 10) {
            setQuantity(newQty);
        }
    };

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    // Determine Price to display
    const currentPrice = selectedVariant ? selectedVariant.price : product.price;
    const currentCompareAt = selectedVariant ? selectedVariant.compareAtPrice : product.compareAtPrice;

    return (
        <div className="product-page">
            <div className="product-main-section container">
                {/* Gallery */}
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={activeImage} alt={product.title} />
                    </div>
                    <div className="thumbnails">
                        {product.images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`thumb ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                            >
                                <img src={img} alt={`${product.title} ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                    <h1 className="product-title">{product.title}</h1>

                    <div className="product-price">
                        <span className="current-price">₹ {currentPrice.toFixed(2)}</span>
                        {currentCompareAt && (
                            <span className="compare-at-price">₹ {currentCompareAt.toFixed(2)}</span>
                        )}
                        {currentCompareAt && (
                            <span className="sale-badge">Sale</span>
                        )}
                    </div>

                    {/* Variants */}
                    {product.variants && (
                        <div className="product-variants">
                            <span className="variant-label">Size: {selectedVariant?.name}</span>
                            <div className="variant-options">
                                {product.variants.map((variant) => (
                                    <button
                                        key={variant.id}
                                        className={`variant-btn ${selectedVariant?.id === variant.id ? 'selected' : ''} ${!variant.inStock ? 'disabled' : ''}`}
                                        onClick={() => handleVariantChange(variant)}
                                        disabled={!variant.inStock}
                                    >
                                        {variant.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity & Add to Cart */}
                    <div className="product-actions">
                        <div className="quantity-selector">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className="qty-value">{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button className="add-to-cart-btn">
                            Add to cart
                        </button>
                    </div>

                    {/* Accordions */}
                    <div className="product-accordions">
                        {/* Description (from Main object or rich data) */}
                        <div className="accordion-item">
                            <button className="accordion-header" onClick={() => toggleAccordion('desc')}>
                                Product Details
                                <span className={`icon ${activeAccordion === 'desc' ? 'open' : ''}`}>+</span>
                            </button>
                            {(activeAccordion === 'desc' || !activeAccordion) && ( // Default open? Or controlled. Let's make toggle work.
                                <div className={`accordion-content ${activeAccordion === 'desc' ? 'show' : ''}`}>
                                    <p>{product.description}</p>
                                </div>
                            )}
                        </div>

                        {/* Dynamic Accordions */}
                        {product.accordions && product.accordions.map((acc, idx) => (
                            <div key={idx} className="accordion-item">
                                <button className="accordion-header" onClick={() => toggleAccordion(idx)}>
                                    {acc.title}
                                    <span className={`icon ${activeAccordion === idx ? 'open' : ''}`}>+</span>
                                </button>
                                {activeAccordion === idx && (
                                    <div className="accordion-content show">
                                        <div dangerouslySetInnerHTML={{ __html: acc.content }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Story Section */}
            {product.story && (
                <div className="product-story-section">
                    <div className="container story-grid">
                        <div className="story-content">
                            <h2>{product.story.title}</h2>
                            <div className="story-text" dangerouslySetInnerHTML={{ __html: product.story.content.replace(/\n\n/g, '<br/><br/>') }} />
                            {product.story.logo && <img src={product.story.logo} alt="Brand Logo" className="story-logo" />}
                        </div>
                        <div className="story-image">
                            <img src={product.story.image} alt={product.story.title} />
                        </div>
                    </div>
                </div>
            )}

            {/* Related Products */}
            <div className="related-products-section container">
                <h2>You may also like</h2>
                <div className="related-grid">
                    {relatedProducts.map(fp => (
                        <div key={fp.slug} className="related-card">
                            <Link to={`/shopping/${category}/${fp.slug}`}>
                                <div className="img-wrapper">
                                    <img src={fp.images[0]} alt={fp.title} />
                                </div>
                                <h3>{fp.title}</h3>
                                <p>₹ {fp.price.toFixed(2)}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
