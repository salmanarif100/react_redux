import React from "react";

function Home() {
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/blue-simple-add-cart-icon-2.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.patriotmobile.com/wp-content/uploads/2022/10/Motorola-G-Power.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $500.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;