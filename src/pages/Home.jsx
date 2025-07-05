import React from "react";
import Carousel from "../components/home-page/Carousel";
import Course from "../components/home-page/Course";
import Feed from "../components/home-page/Feed";
import Scroll from "../components/home-page/Horizontal_scrolling";
import Testimonial from "../components/home-page/Testimonial";
import Courses from "./Courses";
import CoursesSection from "../components/home-page/Course";
import NewsSection from "../components/home-page/News";
import WhatsappIcon from "../components/common/Whatsappicon";


const Home = () => {
  return (
    <div>
      <Carousel />
      <CoursesSection />
      <NewsSection />
      <Feed />
      <Scroll />
      <Testimonial />
      <WhatsappIcon />
    </div>
  );
};

export default Home;
