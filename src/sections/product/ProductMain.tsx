import React, { useState } from "react";
import { Link } from "react-router";
import LeftSidebar from "./LeftSidebar";

// ✅ Import product images
import p1 from "../../assets/images/shop/shop-product-1-1.jpg";
import p2 from "../../assets/images/shop/shop-product-1-2.jpg";
import p3 from "../../assets/images/shop/shop-product-1-3.jpg";
import p4 from "../../assets/images/shop/shop-product-1-4.jpg";
import p5 from "../../assets/images/shop/shop-product-1-5.jpg";
import p6 from "../../assets/images/shop/shop-product-1-6.jpg";
import p7 from "../../assets/images/shop/shop-product-1-7.jpg";
import p8 from "../../assets/images/shop/shop-product-1-8.jpg";
import p9 from "../../assets/images/shop/shop-product-1-9.jpg";

// ✅ Define product type
interface Product {
    id: number;
    name: string;
    price: string;
    img: string;
    rating: number;
}

const products: Product[] = [
    { id: 1, name: "Classy chair", price: "$33.00", img: p1, rating: 5 },
    { id: 2, name: "Comfy chair", price: "$68.00", img: p2, rating: 5 },
    { id: 3, name: "Boss chair", price: "$23.00", img: p3, rating: 5 },
    { id: 4, name: "Sofa chair", price: "$54.00", img: p4, rating: 5 },
    { id: 5, name: "Wooden stool", price: "$39.00", img: p5, rating: 5 },
    { id: 6, name: "Big sofa", price: "$44.00", img: p6, rating: 5 },
    { id: 7, name: "Round chair", price: "$96.00", img: p7, rating: 5 },
    { id: 8, name: "Big stool", price: "$23.00", img: p8, rating: 5 },
    { id: 9, name: "Classic chair", price: "$33.00", img: p9, rating: 5 },
];

const ProductMain: React.FC = () => {
    const [sortOption, setSortOption] = useState<string>("popular");

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    return (
        <section className="product">
            <div className="container">
                <div className="row">
                    <LeftSidebar />

                    <div className="col-xl-9 col-lg-12">
                        <div className="product__items">
                            {/* ================== Sorting Header ================== */}
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product__showing-result">
                                        <div className="product__showing-text-box">
                                            <p className="product__showing-text">
                                                Showing 1–9 of {products.length} results
                                            </p>
                                        </div>
                                        <div className="product__showing-sort">
                                            <div className="select-box">
                                                <select
                                                    className="nice-select"
                                                    value={sortOption}
                                                    onChange={handleSortChange}
                                                >
                                                    <option value="popular">Sort by Popular</option>
                                                    <option value="price">Sort by Price</option>
                                                    <option value="rating">Sort by Ratings</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ================== Product Grid ================== */}
                            <div className="product__all">
                                <div className="row">
                                    {products.map((product) => (
                                        <div
                                            className="col-xl-4 col-lg-4 col-md-6"
                                            key={product.id}
                                        >
                                            <div className="product__all-single">
                                                <div className="product__all-img">
                                                    <img src={product.img} alt={product.name} />
                                                    <img src={product.img} alt={product.name} />
                                                </div>

                                                <div className="product__all-content">
                                                    <div className="product__all-review">
                                                        {[...Array(product.rating)].map((_, i) => (
                                                            <i className="icon-star" key={i}></i>
                                                        ))}
                                                    </div>

                                                    <h4 className="product__all-title">
                                                        <Link to="/product-details">{product.name}</Link>
                                                    </h4>

                                                    <p className="product__all-price">{product.price}</p>

                                                    <div className="product__all-btn-box">
                                                        <Link
                                                            to="/cart"
                                                            className="thm-btn product__all-btn"
                                                        >
                                                            Add to Cart
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* ================== End Product Grid ================== */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductMain;
