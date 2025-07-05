import React, { useEffect, useState } from "react";
import "./NewsList.css";

const BASE_URL = import.meta.env.VITE_API_BASE || "https://gatimaan-site.onrender.com";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/news`);
        const data = await res.json();
        setNewsList(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-table-container">
      <h2>📰 All News</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && newsList.length > 0 && (
        <table className="news-table">
          <thead>
            <tr>
              <th>#</th>
              <th>News Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news, index) => (
              <tr key={news._id}>
                <td>{index + 1}</td>
                <td>{news.newsTitle}</td>
                <td>{news.description}</td>
                <td>{news.category}</td>
                <td>{new Date(news.createdAt).toLocaleString()}</td>
                <td>
                  <a
                    href={news.newsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-link"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && newsList.length === 0 && <p>No news available.</p>}
    </div>
  );
};

export default NewsList;
