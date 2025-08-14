"use client";

import React from "react";
import Banner from "./Banner";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 4,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="max-w-screen-2xl mx-4 xl:!mx-auto">
      <div id="smooth-content">
        <Navbar />
        <div className="!pt-20">
          <Banner />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
