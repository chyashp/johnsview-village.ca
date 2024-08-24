import React from "react";
import Slider from "react-slick";
import "./OurCommunity.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OurCommunity = () => {
  const paragraph = `
  Our community consists of 548 town house condominiums, 11 streets
  spread over 32 acres of land. With a vast landscape of beautiful
  mature trees, walking trails, and many other amenities including a
  private community pool, close proximity schools, and community
  centres, this is definitely one of GTA’s best-kept secrets.
  Johnsview Village is committed to promoting community interactions.
  With an active Social Committee organizing events and helpful
  seminars, we have achieved many successful community involvement
  events.
`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Controls the delay between each line appearing
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const lines = paragraph.split("\n").map((line, index) => (
    <motion.p key={index} variants={lineVariants} className="line">
      {line}
    </motion.p>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/WhatsApp Image 2024-08-14 at 1.36.32 PM.jpeg",
    "/WhatsApp Image 2024-08-14 at 1.37.43 PM.jpeg",
    "/WhatsApp Image 2024-08-14 at 1.37.56 PM.jpeg",
    "/WhatsApp Image 2024-08-14 at 1.38.11 PM.jpeg",
    "/WhatsApp Image 2024-08-14 at 1.38.40 PM.jpeg",
    "/WhatsApp Image 2024-08-14 at 8.20.09 PM.jpeg",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, triggerOnce: false }); // Detect if 30% is visible
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when the section goes out of view
    }
  }, [isInView, controls]);

  return (
    <div className="ourCommunity" >
      <div className="wrapper">
        <div className="top">
          <div className="image-slider">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bottom">
          <motion.div
            ref={ref}
            className="textContainer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="title">About Our Community</h1>
            {lines}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
