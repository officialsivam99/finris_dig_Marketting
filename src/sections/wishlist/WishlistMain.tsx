import React, { useState } from "react";
import wishlist1 from "../../assets/images/shop/wishlist-page-img-1.jpg";
import wishlist2 from "../../assets/images/shop/wishlist-page-img-2.jpg";
import wishlist3 from "../../assets/images/shop/wishlist-page-img-3.jpg";
import wishlist4 from "../../assets/images/shop/wishlist-page-img-4.jpg";

interface WishlistItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

const WishlistMain: React.FC = () => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([
        { id: 1, name: "Classy Chair", price: 50.0, image: wishlist1 },
        { id: 2, name: "Comfy Chair", price: 90.0, image: wishlist2 },
        { id: 3, name: "Boss Chair", price: 60.0, image: wishlist3 },
        { id: 4, name: "Sofa Chair", price: 170.0, image: wishlist4 },
    ]);

    const handleRemove = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <section className="wishlist-page">
            <div className="container">
                <div className="table-responsive-box">
                    <table className="wishlist-table">
                        <tbody>
                            {wishlist.map((item: WishlistItem) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="product-box">
                                            <div className="img-box">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product-name-select-box">
                                            <div className="product-name">
                                                <h4>{item.name}</h4>
                                                <p>${item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="product-select">
                                                <a className="thm-btn wishlist-page__btn" href="/product-details">
                                                    <span className="icon-right"></span> Select Product
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div
                                            className="cross-icon"
                                            onClick={() => handleRemove(item.id)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <i className="fas fa-times remove-icon"></i>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {wishlist.length === 0 && (
                                <tr>
                                    <td colSpan={3}>
                                        <div className="text-center py-4">
                                            <h4>Your wishlist is empty 🛋️</h4>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default WishlistMain;
