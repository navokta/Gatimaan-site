import React, { useEffect, useState } from "react";
import Carousel from "../components/home-page/Carousel";
import CoursesSection from "../components/home-page/Course";
import NewsSection from "../components/home-page/News";
import Feed from "../components/home-page/Feed";
import Scroll from "../components/home-page/Horizontal_scrolling";
import Testimonial from "../components/home-page/Testimonial";
import WhatsappIcon from "../components/common/Whatsappicon";

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/news");
        const data = await response.json();
        setNewsList(data);
      } catch (err) {
        console.error("❌ Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Carousel />
      <CoursesSection />
      {/* Pass the fetched newsList to NewsSection */}
      <NewsSection newsList={newsList} />
      <Feed />
      <Scroll />
      <Testimonial />
      <WhatsappIcon />
    </div>
  );
};

export default Home;
