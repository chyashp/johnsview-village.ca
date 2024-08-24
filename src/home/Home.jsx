import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home" >
      <div className="wrapper">
        <img src="/WhatsApp Image 2024-08-14 at 1.36.01 PM.jpeg" alt="" />
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "easeOut", stiffness: 100 }}
          className="textBox"
        >
          <h1 className="title">LET’S GET ACQUAINTED…</h1>
          <div className="text">
            Johnsview Village was constructed in the mid 1970’s and incorporated
            in August of 1976, as York Condominium Corporation No. 279.
            Johnsview Village is an established and well managed condominium,
            hosting 548 townhomes and well over 2,000 residents. The units are
            traditional 3-level brick homes (basement, main level and 2nd level)
            featuring 3-4 bedrooms with a private, fenced backyard, and single
            car garage plus, driveway pad parking. Nestled in the south east
            corner of Bayview Avenue and John Street in Thornhill, Ontario. Our
            community consists of eleven streets spreads over secluded 32 acres
            of lush green space and well-established community character will
            charm you and welcome you home at the end of the working day. An
            Elementary School is located next to the Management Office, with a
            Secondary School located only minutes away. In the summertime, the
            community’s private, heated pool located beside the Management
            Office welcomes you, or you may enjoy the municipal park located
            near the center of our community. There you can enjoy the tennis and
            basketball court, the playground or just relax in the park area with
            your family, friends or pet(s). The Thornhill Community Centre and
            Thornhill Shopping Centre are located directly across the street.
            These facilities include: Shopper’s Drug Mart, Food Basics, Medical
            Clinics, Thornhill Fitness Centre and Pool, Thornhill Library,
            Thornhill Arena, (2 rinks) Thornhill Seniors Centre, and much more.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
