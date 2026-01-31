import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { title, price, compareAtPrice, images, slug, category, inStock = true } = product;
    const primaryImage = images[0];
    const secondaryImage = images[1] || images[0];

    const isOnSale = compareAtPrice && compareAtPrice > price;
    const isSoldOut = !inStock;

    // Calculate discount percentage optional
    // const discount = isOnSale ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0;

    return (
        <div className={`product-card ${isSoldOut ? 'sold-out' : ''}`}>
            <div className="product-card-image-wrapper">
                <a href={`/collections/${category || 'all'}/products/${slug}`} className="product-card-link">
                    <img
                        src={primaryImage}
                        alt={title}
                        className="product-card-image primary"
                        loading="lazy"
                    />
                    <img
                        src={secondaryImage}
                        alt={title}
                        className="product-card-image secondary"
                        loading="lazy"
                    />
                </a>

                {/* Badges - Bottom Left */}
                <div className="product-card-badges">
                    {isSoldOut ? (
                        <span className="badge badge-sold-out">Sold out</span>
                    ) : isOnSale ? (
                        <span className="badge badge-sale">Sale</span>
                    ) : null}
                </div>

                <button className="wishlist-button" aria-label="Add to Wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>

                {!isSoldOut && (
                    <button className="quick-add-button">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span className="quick-add-text">Add</span>
                    </button>
                )}
            </div>

            <div className="product-card-info">
                <h3 className="product-card-title">
                    <a href={`/collections/${category || 'all'}/products/${slug}`}>{title}</a>
                </h3>
                <div className="product-card-price-container">
                    {isOnSale ? (
                        <div className="price-on-sale">
                            <span className="price-regular">₹ {compareAtPrice.toFixed(2)}</span>
                            <span className="price-sale">₹ {price.toFixed(2)}</span>
                        </div>
                    ) : (
                        <div className="price-normal">
                            ₹ {price.toFixed(2)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
