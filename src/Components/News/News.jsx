import React from "react";
import { v4 } from "uuid";
import OneNews from "./OneNews/OneNews";
import NewsForm from "./NewsForm/NewsForm";

const News = ({
  match,
  deleteNews,
  totalStars,
  changeRating,
  news,
  addNews,
}) => {
  const newsId = match.params.id;
  const handleSubmit = ({ newsText, theme, authorName, category }) => {
    addNews(v4(), newsText, theme, authorName, category);
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
