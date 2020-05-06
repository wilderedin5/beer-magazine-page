import { connect } from "react-redux"
import Shares from "./Shares";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        shares: state.shares.shares
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{})
)(Shares);