import { connect } from 'react-redux';
import News from './News';
import { deleteNews, addNews, changeNewsRating } from '../../redux/news-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    news: state.news.news,
    totalStars: state.news.totalStars
})

export default compose(
    withRouter,
    connect(mapStateToProps, { deleteNews, addNews, changeNewsRating })
)(News);