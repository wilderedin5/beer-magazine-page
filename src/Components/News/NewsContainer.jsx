import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { v4 } from "uuid";
import { deleteNews, addNews, setRating } from "../../redux/news-reducer";
import { OneNews } from "./OneNews";
import NewsForm from "./NewsForm";

const News = ({ match, deleteNews, rating, setRating, news, addNews }) => {
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
          isOpened={newsId}
          deleteNews={deleteNews}
          rating={rating}
          setRating={setRating}
        />
      ))}
      {!newsId && <NewsForm onSubmit={handleSubmit} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  rating: state.news.rating,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { deleteNews, addNews, setRating })
)(News);
