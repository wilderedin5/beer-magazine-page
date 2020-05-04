import { connect } from 'react-redux';
import News from './News';
import { deleteNews,addNews,changeNewsRating } from '../../redux/news-reducer';

const mapStateToProps = (state) => {
    return {
        news: state.news.news,
        totalStars: state.news.totalStars
    }
}

export default connect(mapStateToProps,{deleteNews,addNews,changeNewsRating})(News);