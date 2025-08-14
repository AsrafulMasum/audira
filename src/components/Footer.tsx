import React from "react";
import img from "@/assets/images/img4.jpg";
import logo from "@/assets/images/logo.png";
import fb from "@/assets/images/fb.png";
import insta from "@/assets/images/insta.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div id="section6" className="w-full">
        <Image src={img} className="radius" alt="" />
        <div className="content-wrapper">
          <h2 className="heading">Pure Escape</h2>
          <p>
            Step into a world where every note feels alive. Audira headphones
            are engineered to create a sound experience that surrounds you—deep,
            rich, and breathtaking.
          </p>
          <p>
            Whether you're working, relaxing, or moving, our design blends
            comfort and clarity for every lifestyle. You don’t just listen — you
            feel the moment.
          </p>
        </div>
      </div>

      <footer className="w-full">
        <Image src={logo} className="logo" alt="" />
        <div className="social">
          <a href="">
            <Image src={fb} alt="" />
          </a>
          <a href="">
            <Image src={insta} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
