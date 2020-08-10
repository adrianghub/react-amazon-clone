import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="72421532"
          title="The Stoic Challenge: A Philosopher's Guide to Becoming Tougher, Calmer, and More Resilient"
          rating={5}
          price={11.96}
          image="https://m.media-amazon.com/images/I/51A3SIteATL.jpg"
        />
         <Product
          id="124212531"
          title="AmazonBasics Neoprene Dumbbell Hand Weights"
          rating={5}
          price={13.49}
          image="https://images-na.ssl-images-amazon.com/images/I/81R8knBnjEL._AC_SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12431522"
          title="AmazonBasics Steel, Security Safe Lock Box, Black - 0.5 Cubic Feet"
          rating={3}
          price={21.99}
          image="https://images-na.ssl-images-amazon.com/images/I/718l03qCcJL._AC_SX466_.jpg"
        />
         <Product
          id="12442132"
          title="AmazonBasics High-Density Exercise, Massage, Muscle Recovery, Round Foam Roller, 12, 18, 24, 36"
          rating={5}
          price={27.99}
          image="https://images-na.ssl-images-amazon.com/images/I/911vOQbliVL._AC_SX679_.jpg"
        />
         <Product
          id="12321532"
          title="The Stoic Challenge: A Philosopher's Guide to Becoming Tougher, Calmer, and More Resilient"
          rating={4}
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61IRzLY-EAL._AC_SX569_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12853132"
          title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)"
          rating={5}
          price={699.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SX679_.jpg"
        />
        </div>
      {/* Product */}
    </div>
  );
};

export default Home;
