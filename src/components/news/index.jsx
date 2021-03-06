import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { v4 } from "uuid";
import { manageNews, changeRating } from "../../redux/news-reducer";
import { NewsItem } from "./news-item";
import NewsForm from "./news-form";

const News = ({ match, rating, changeRating, news, manageNews }) => {
  const newsId = match.params.id;
  const handleSubmit = ({ text, theme, author, category }) => {
    const id = v4();
    manageNews(id, { id, text, theme, author, category });
  };

  const formattedNews = news.filter((news) =>
    newsId ? newsId === String(news.id) : true
  );

  return (
    <div>
      {formattedNews.map((news) => (
        <NewsItem
          news={news}
          isOpened={newsId}
          onManage={manageNews}
          rating={rating}
          onRating={changeRating}
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
  connect(mapStateToProps, { manageNews, changeRating })
)(News);
