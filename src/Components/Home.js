import React from "react";
import "./Home.css";
import Products from "./Products";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg"
        alt=""
      />
      <div className="home__row">
        <Products
          id="1212125"
          image="https://i.pinimg.com/236x/be/9f/cb/be9fcbbb63e48eb093bc31114f975208.jpg"
          title={"Outoff hoodie Aesthetic Yellow"}
          price="25.00"
          rating={4}
        />
        <Products
          id="1212125"
          image="https://i.pinimg.com/236x/49/ff/78/49ff7832cda980d13ca46836f5feecb3.jpg"
          title={"Formal Mens Outfit"}
          price="45.00"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Products
          id="1212125"
          image="https://i.pinimg.com/236x/9f/de/a6/9fdea65831b77c1c65dde88983797ea9.jpg"
          title={"Stylish Women Outfit"}
          price="75.00"
          rating={4}
        />
        <Products
          id="1212125"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1228719_1203426_IN_INPD2020_in_pd20_gw_renewed_desktop_category_card_banner_in_en_3148925_260x260_en_IN._SY304_CB408009662_.jpg"
          title={"Dont why it is here"}
          price="25.00"
          rating={3}
        />
        <Products
          id="1212125"
          image="https://i.pinimg.com/236x/cf/73/71/cf7371d244ef2fae31ac17e22cc4018b.jpg"
          title={"Fidget spinner"}
          price="10.00"
          rating={1}
        />
      </div>

      <div className="home_row">
        <Products
          id="1212125"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLHZ3ImlvPymicHMJHd5L12geUqpyvuf6zVVQyUe0vq3HoOwMvdwp122iFq9ErS_sqXmviP3M&usqp=CAc"
          title={"Sony TV (43 inch) fluid display"}
          price="25.00"
          rating={2.5}
        />
      </div>
    </div>
  );
}

export default Home;
