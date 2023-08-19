import React, { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import MySpinner from "./MySpinner";
import Image from "react-bootstrap/Image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const loadBanners = async () => {
      let res = await Apis.get(endpoints["banners"]);
      setBanners(res.data);
    };
    loadBanners();
  }, []);
  if (banners.length === 0) return <MySpinner />;
  return (
    <>
      <div class="container-fluid">
        <OwlCarousel
          items={1}
          className="owl-theme"
          autoplay={true}
          margin={8}
          loop={true}
          autoplaySpeed={2000}
        >
          {banners.map((b) => {
            return (
              <div key={b.id}>
                <img className="img" src={b.link} alt="banner" />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </>
  );
};

export default Banner;
