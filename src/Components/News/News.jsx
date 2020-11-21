import React from "react";
import { v4 } from "uuid";
import OneNews from "./OneNews";
import NewsForm from "./NewsForm";

const News = ({
  match,
  deleteNews,
  totalStars,
  changeRating,
  news,
  addNews,
}) => {
  const newsId = match.params.id;
  const handleSubmit = ({ text, theme, author, category }) => {
    addNews(v4(), text, theme, author, category);
  };

  const formattedNews = news.filter((news) =>
    newsId ? newsId === String(news.id) : true
  );

  return (
    <div>
      {formattedNews.map((news) => (
        <OneNews
          {...news}
          newsOpened={newsId}
          deleteNews={deleteNews}
          totalStars={totalStars}
          changeRating={changeRating}
        />
      ))}
      {!newsId && <NewsForm onSubmit={handleSubmit} />}
    </div>
  );
};

export default News;
