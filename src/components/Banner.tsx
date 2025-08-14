import Image from "next/image";
import React, { useEffect } from "react";
import headPhone from "@/assets/images/brown.png";
import Link from "next/link";
import img1 from "@/assets/images/img1.jpeg";
import img2 from "@/assets/images/img2.jpeg";
import img3 from "@/assets/images/img3.jpeg";
import product1 from "@/assets/images/green.png";
import product3 from "@/assets/images/black.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Banner = () => {
    useEffect(() => {
    const isShortHeight = window.innerHeight < 700;

    ScrollTrigger.matchMedia({
      "(min-width: 991px)": function () {

        // First scroll animation (section 2)
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#section2",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
          y: "85vh",
          x: "18vw",
          width: "32vw",
          rotate: 90,
          ease: "power1.inOut",
          immediateRender: false,
        });

        // Second scroll animation (section 3)
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
          y: "218vh",
          x: "0",
          width: "35vw",
          rotate: 35,
          ease: "power1.inOut",
          immediateRender: false,
        });

        // Third scroll animation (section 4)
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
          y: "308vh",
          width: "42vw",
          rotate: 0,
          ease: "power1.inOut",
          immediateRender: false,
        });

        // Fourth scroll animation (section 5)
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#section5",
            start: "top bottom",
            end: "center bottom",
            scrub: true,
          },
          y: isShortHeight ? "360vh" : "344vh",
          width: "28vw",
          ease: "power1.inOut",
          immediateRender: false,
        });

        // Fifth scroll animation (section 5 - bottom)
        gsap.to("#headphone", {
          scrollTrigger: {
            trigger: "#section5",
            start: "center bottom",
            end: "bottom bottom",
            scrub: true,
          },
          y: isShortHeight ? "432vh" : "440vh",
          width: "300px",
          ease: "power1.inOut",
          immediateRender: false,
        });

        // Content animations for section 2
        gsap.from("#section2 .content-wrapper", {
          scrollTrigger: {
            trigger: "#section2",
            start: "-50% bottom",
            end: "center center",
            scrub: true,
          },
          y: "140%",
          ease: "power1.inOut",
        });

        // Content animations for section 3
        gsap.from("#section3 .heading", {
          scrollTrigger: {
            trigger: "#section3",
            start: "top bottom",
            end: "center bottom",
            scrub: true,
          },
          y: "140%",
          ease: "power1.inOut",
        });

        // Section 4 image animation
        gsap.from("#section4 img", {
          scrollTrigger: {
            trigger: "#section4",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
          width: 0,
          opacity: 0,
          ease: "power1.inOut",
        });

        // Section 6 content animation
        gsap.from("#section6 .content-wrapper", {
          scrollTrigger: {
            trigger: "#section6",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
          y: "40%",
          duration: 2,
          ease: "power1.inOut",
        });

        // Hero section text animation (split text effect)
        const split = new SplitText("#section1 .bannerHeading", {
          type: "chars, words, lines",
          mask: "lines",
        });

        gsap.from(split.chars, {
          yPercent: () => gsap.utils.random(-100, 100),
          rotation: () => gsap.utils.random(-30, 30),
          autoAlpha: 0,
          ease: "back.out(1.5)",
          stagger: {
            amount: 0.5,
            from: "random",
          },
          duration: 1.5,
        });

        // Headphone scale and opacity animation
        gsap.from("#headphone", {
          opacity: 0,
          scale: 0,
          duration: 1,
          delay: 1,
          ease: "power1.inOut",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  return (
    <div id="main">
      <Image className="headphone" src={headPhone} alt="" id="headphone" />

      <div id="section1" className="banner">
        <h1 className="bannerHeading">Modern Harmony</h1>
      </div>

      <div id="section2" className="details">
        <div className="content-wrapper">
          <h2 className="detailsHeading">True Carity</h2>
          <p>
            Engineered for clarity, comfort, and immersive sound — Audira
            redefines your listening experience with style and performance in
            perfect harmony.
          </p>
          <Link href="#" className="btn">
            Buy Now
          </Link>
        </div>
        <div className="feature-wrapper">
          <div className="feature-box radius">
            <div className="feature-name">Crystal-Clear Audio</div>
            <div className="feature-detail">
              Hear every detail with balanced bass and studio-quality mids and
              highs.
            </div>
          </div>
          <div className="feature-box radius">
            <div className="feature-name">All-Day Comfort</div>
            <div className="feature-detail">
              Lightweight build with plush ear cushions and ergonomic fit.
            </div>
          </div>
          <div className="feature-box radius">
            <div className="feature-name">40+ Hour Battery Life</div>
            <div className="feature-detail">
              Long-lasting performance, wherever you go.
            </div>
          </div>
        </div>
      </div>

      <div id="section3" className="videoSection">
        <h2 className="heading">Masterbeat</h2>
        <div className="video-wrapper">
          <video
            width="500"
            height="auto"
            autoPlay
            loop
            muted
            className="radius"
          >
            <source src="./video.mp4" type="video/mp4" />
          </video>
          <div className="text-content">
            <div className="content">
              <p>
                Crafted for the modern audiophile, Audira headphones deliver
                sound so rich, it pulses through your senses. From crisp highs
                to deep, rolling bass—you don’t just hear it, you feel it.
              </p>
              <p>
                Whether you&#39;re in focus mode or free flow, the precision-tuned
                audio adapts to your pace. With Masterbeat, music becomes your
                personal soundtrack—bold, immersive, unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="section4" className="gallery">
        <Image src={img1} alt="" className="img1 radius" />
        <Image src={img2} alt="" className="img2 radius" />
        <Image src={img3} alt="" className="img3 radius" />
      </div>

      <div id="section5" className="products">
        <h2 className="product-heading">Top Picks</h2>
        <div className="product-section">
          <div className="product">
            <Image className="img" src={product1} alt="" />
            <div className="name">Audira One</div>
            <div className="price">₹4,499</div>
          </div>
          <div className="product">
            <div className="name">Audira Plus</div>
            <div className="price">₹7,499</div>
          </div>
          <div className="product">
            <Image className="img" src={product3} alt="" />
            <div className="name">Audira Max Pro</div>
            <div className="price">₹11,499</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
