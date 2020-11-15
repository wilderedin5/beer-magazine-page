import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { deleteNews, addNews, changeRating } from "../../redux/news-reducer";
import News from "./News";

const mapStateToProps = (state) => ({
  news: state.news.news,
  totalStars: state.news.totalStars,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { deleteNews, addNews, changeRating })
)(News);
