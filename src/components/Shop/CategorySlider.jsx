import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategorySlider.css';

const CATEGORIES = [
    { title: 'Craft', slug: 'craft', image: '//themeghalayanage.store/cdn/shop/collections/73_1.png?v=1754984438&width=535' },
    { title: 'Textile', slug: 'textile', image: '//themeghalayanage.store/cdn/shop/collections/72.png?v=1754985590&width=535' },
    { title: 'Books', slug: 'books', image: '//themeghalayanage.store/cdn/shop/collections/74.png?v=1754987160&width=535' },
    { title: 'Food', slug: 'food', image: '//themeghalayanage.store/cdn/shop/collections/image_45.png?v=1754987569&width=535' },
    { title: 'Bamboo', slug: 'bamboo', image: '//themeghalayanage.store/cdn/shop/collections/Ellipse_94.png?v=1713436922&width=535' },
    { title: 'Pottery', slug: 'pottery', image: '//themeghalayanage.store/cdn/shop/collections/Ellipse_95.png?v=1713436934&width=535' },
];

const CategorySlider = () => {
    return (
        <div className="category-slider-container">
            <div className="category-slider">
                {CATEGORIES.map((cat) => (
                    <NavLink to={`/collections/${cat.slug}`} key={cat.slug} className="category-card-item">
                        <div className="category-card-image-wrap">
                            <img src={cat.image} alt={cat.title} loading="lazy" />
                        </div>
                        <span>{cat.title}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default CategorySlider;
