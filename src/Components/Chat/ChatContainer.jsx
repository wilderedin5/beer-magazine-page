import { connect } from 'react-redux';
import Chat from './Chat';

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps,{})(Chat);