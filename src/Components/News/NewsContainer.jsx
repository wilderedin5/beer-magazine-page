import { connect } from 'react-redux';
import News from './News';
import { deleteNews } from '../../redux/news-reducer';

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps,{deleteNews})(News);