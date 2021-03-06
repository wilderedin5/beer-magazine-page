import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import { manageNews, changeRating } from "../../redux/news-reducer";
import { NewsItem } from "./news-item";
import NewsForm from "./news-form";

const News = ({ rating, changeRating, news, manageNews }) => {
  const { newsId } = useParams();

  const handleSubmit = ({ text, theme, name, category }) => {
    const id = v4();
    manageNews(id, { id, text, theme, name, category });
  };

  const formattedNews = news.filter(({ id }) =>
    newsId ? newsId === String(id) : true
  );

  return (
    <div>
      {formattedNews.map((news, index) => (
        <NewsItem
          news={news}
          isOpened={newsId}
          onManage={manageNews}
          rating={rating}
          onRating={changeRating}
          key={index}
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

export default connect(mapStateToProps, { manageNews, changeRating })(News);
