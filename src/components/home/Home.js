import React from "react";
import { Helmet } from "react-helmet";
import EventsGallery from "../events-gallery/EventsGallery";
import Footer from "../footer/Footer";
import Hero from "../hero/hero";
import Sponsors from "../sponsors/Sponsors";
import Venue from "../venue/Venue";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Good Samaritan Mission | Home</title>
      </Helmet>
      <Hero />
      <Venue />
      <EventsGallery />
      <Sponsors />
      {/* <WorkshopSeminar /> */}
      <Footer />
    </div>
  );
};

export default Home;
