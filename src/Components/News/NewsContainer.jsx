import { connect } from 'react-redux';
import News from './News';

const mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps,{})(News);