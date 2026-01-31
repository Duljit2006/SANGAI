import React from 'react';
import { Link } from 'react-router-dom';
import './ShopByCategory.css';

const categories = [
    {
        id: 1,
        title: 'Wellness',
        image: 'https://themeghalayanage.store/cdn/shop/collections/PER_8194_S.jpg?v=1742284529&width=750',
        link: '/collections/wellness'
    },
    {
        id: 2,
        title: 'Craft',
        image: 'https://themeghalayanage.store/cdn/shop/collections/73_1.png?v=1754984438&width=750',
        link: '/collections/craft'
    },
    {
        id: 3,
        title: 'Textile',
        image: 'https://themeghalayanage.store/cdn/shop/collections/72.png?v=1754985590&width=750',
        link: '/collections/textile'
    },
    {
        id: 4,
        title: 'Books',
        image: 'https://themeghalayanage.store/cdn/shop/collections/74.png?v=1754987160&width=750',
        link: '/collections/books'
    },
    {
        id: 5,
        title: 'Food',
        image: 'https://themeghalayanage.store/cdn/shop/collections/image_45.png?v=1754987569&width=750',
        link: '/collections/food'
    },
    {
        id: 6,
        title: 'Bamboo',
        image: 'https://themeghalayanage.store/cdn/shop/collections/Ellipse_94.png?v=1713436922&width=750',
        link: '/collections/bamboo'
    },
    {
        id: 7,
        title: 'Pottery',
        image: 'https://themeghalayanage.store/cdn/shop/collections/Ellipse_95.png?v=1713436934&width=750',
        link: '/collections/pottery'
    },
    {
        id: 8,
        title: 'Sale',
        image: 'https://themeghalayanage.store/cdn/shop/files/PER_8573_S.jpg?v=1741849809&width=750',
        link: '/collections/sale'
    }
];

const ShopByCategory = () => {
    return (
        <section className="shop-by-category">
            <div className="shop-category-header">
                <h2 className="shop-category-title">SHOP BY CATEGORY</h2>
            </div>

            <div className="shop-category-slider">
                {categories.map((category) => (
                    <div key={category.id} className="shop-category-card-wrapper">
                        <Link to={category.link} className="shop-category-card">
                            <div className="shop-category-image-container">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="shop-category-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="shop-category-content">
                                <h3 className="shop-category-name">
                                    {category.title}
                                    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" className="icon-arrow-right" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                                    </svg>
                                </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByCategory;
