import { connect } from "react-redux"
import Shares from "./Shares";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { toggleLikeCommentOfShares,deleteCommentOfShares } from "../../redux/shares-reducer";

const mapStateToProps = (state) => {
    return {
        shares: state.shares.shares
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{toggleLikeCommentOfShares,deleteCommentOfShares})
)(Shares);