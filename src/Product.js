import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product_container">
        <h1> Recent Products </h1>
        <div className="product_row">
          <div className="product_single">
            <span className="tag-hot">Hot</span>
            <h2>iPhone 13 Pro Max 256GB Unlocked Midnight</h2>
            <div className="product_img">
              <img src={"assets/img/iph_black.jpg"} alt="" />
            </div>
            <div className="rating">
              <box-icon type="solid" name="star" color="#f0c716"></box-icon>
              <box-icon type="solid" name="star"></box-icon>
              <box-icon type="solid" name="star"></box-icon>
              <box-icon type="solid" name="star"></box-icon>
              <box-icon type="solid" name="star"></box-icon>
            </div>
            <div className="price">
              <sup>$</sup>
              <strong>1,270.00</strong>
            </div>

            <div className="product_btns">
              <a href="#">
                Add To Cart
                <box-icon name="cart-add" className="addtocart"></box-icon>
              </a>
              <a href="#">
                <box-icon
                  name="heart"
                  className="wishlist"
                  color="#fff"
                ></box-icon>
              </a>
            </div>
          </div>

          <div className="product_single">
            <span className="tag-flashsale">Sale</span>
            <h2>iPhone 13 Pro Max 256GB Unlocked Gold</h2>
            <div className="product_img">
              <img src={"assets/img/iph_gold.jpg"} alt="" />
            </div>
            <div className="rating">
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            </div>
            <div className="price">
              <sup>$</sup>
              <strong>1,170.00</strong>
            </div>

            <div className="product_btns">
              <a href="#">
                Add To Cart
                <box-icon name="cart-add" className="addtocart"></box-icon>
              </a>

              <a href="#">
                <box-icon
                  name="heart"
                  className="wishlist"
                  color="#fff"
                ></box-icon>
              </a>
            </div>
          </div>

          <div className="product_single">
            <span className="tag-discount">50% OFF</span>
            <h2>iPhone 13 Pro Max 256GB Unlocked Alpine Green</h2>
            <div className="product_img">
              <img src={"assets/img/iph_teal.jpg"} alt="iPhone" />
            </div>
            <div className="rating">
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star" color="#f0c716"></box-icon>
            <box-icon type="solid" name="star"></box-icon>
            </div>
            <div className="price">
              <sup>$</sup>
              <strong>1,100.00</strong>
            </div>

            <div className="product_btns">
              <a href="#" className="addtocart">
                Add To Cart
                <box-icon name="cart-add"></box-icon>
              </a>
              <a href="#" className="whishlist">
                <box-icon name="heart" color="#fff"></box-icon>
              </a>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
  );
}

export default Product;
