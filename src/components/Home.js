import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg]"
        alt=""
      />

      {/* Produc id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="PO-01"
          title="The Lean Startup: How Constant Innovation Creates Great Business"
          price={11.89}
          rating={5}
          image="P01.jpg"
        />
         <Product
          id="PO-02"
          title="Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue"
          price={19.89}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
      </div>
      <div className="home__row">
        <Product
          id="PO-03"
          title="Echo Show 5 (2nd Gen) - Smart speaker with 5.5 screen, crisp sound and Alexa (Blue)"
          price={18.89}
          rating={3}
          image="alexa-scrn.jpg"
        />
         <Product
          id="PO-01"
          title="The Lean Startup: How Constant Innovation Creates Great Business"
          price={11.89}
          rating={5}
          image="P01.jpg"
        />
        <Product
          id="PO-01"
          title="Habere India-All the Cultures Fabricating India Wicker Basket | Cane or Bamboo Basket | Tray Online | Cane Gift Hamper Basket, Wardrobe Basket | Bathroom Organizer Basket (Medium, 25.4 x 12.7 CM)"
          price={1.89}
          rating={5}
          image="basket.png"
        />
      </div>
      <div className="home__row">
         <Product
          id="PO-05"
          title="Noise ColorFit Pro 4 Alpha 1.7 AMOLED Display, Bluetooth Calling Smart Watch, Functional Crown, Metallic Build, Intelligent Gesture Control, Instacharge (Rose Pink)"
          price={81.89}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
