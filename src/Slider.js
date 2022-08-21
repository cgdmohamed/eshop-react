
import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";

export class Slider extends Component {
  render() {
    return (
      <div>
        
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop
          margin={8}
          autoplay={true}
        >
          <div>
            <img className="img" src={"assets/img/img1.jpg"} alt="" />
          </div>
          <div>
            <img className="img" src={"assets/img/img2.jpg"} alt=""/>
          </div>
          <div>
            <img className="img" src={"assets/img/img3.jpg"} alt=""/>
          </div>
        </OwlCarousel>

      </div>
    );
  }
}

export default Slider;