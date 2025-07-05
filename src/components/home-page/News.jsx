import React from 'react';
import './NewsSection.css'; // Include your styles
import { Link } from 'react-router-dom';

const NewsSection = ({ newsList = [] }) => {
  const sortedNews = [...newsList].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const limitedNews = sortedNews.slice(0, 2);

  return (
    <section className="gc-news-section">
      <div className="gc-news-container">
        <div className="gc-news-header">
          <h2 className="gc-news-title">
            News & <span>Updates</span>
          </h2>
          <div className="gc-news-divider"></div>
          <p className="gc-news-subtitle">
            Stay informed with our latest announcements
          </p>
        </div>

        <div className="gc-news-content">
          {limitedNews.length > 0 ? (
            <>
              {/* Desktop Table View */}
              <div className="gc-news-table-container">
                <table className="gc-news-table">
                  <thead>
                    <tr>
                      <th className="gc-date-col">Date</th>
                      <th className="gc-desc-col">Description</th>
                      <th className="gc-action-col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {limitedNews.map((news, index) => {
                      const dateObj = new Date(news.createdAt);
                      return (
                        <tr key={index}>
                          <td className="gc-news-date">
                            <span>{dateObj.getDate()}</span>
                            <span>{dateObj.toLocaleString('en-IN', { month: 'short' })}</span>
                            <span>{dateObj.getFullYear()}</span>
                          </td>
                          <td>{news.description}</td>
                          <td className="gc-news-action">
                            <a
                              href={news.newsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="gc-news-link"
                            >
                              View Details
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12H19M19 12L12 5M19 12L12 19"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="gc-news-cards">
                {limitedNews.map((news, index) => {
                  const dateObj = new Date(news.createdAt);
                  return (
                    <div className="gc-news-card" key={index}>
                      <div className="gc-card-date">
                        <span className="gc-card-day">{dateObj.getDate()}</span>
                        <span className="gc-card-month">
                          {dateObj.toLocaleString('en-IN', { month: 'short' })}
                        </span>
                        <span className="gc-card-year">{dateObj.getFullYear()}</span>
                      </div>
                      <div className="gc-card-content">
                        <p className="gc-card-desc">{news.description}</p>
                        <a
                          href={news.newsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gc-card-link"
                        >
                          View Details
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* See More Button */}
              <div className="gc-news-see-more">
                <Link to="/news" className="gc-see-more-button">
                  See All Updates
                </Link>
              </div>
            </>
          ) : (
            <div className="gc-empty-state">
              <span className="gc-empty-icon">📰</span>
              <p>No news updates available at this time</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
