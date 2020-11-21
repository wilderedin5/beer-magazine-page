import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { setLike, deleteComment, addComment } from "../../redux/shares-reducer";
import Shares from "./Shares";

const mapStateToProps = (state) => ({
  shares: state.shares.shares,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setLike,
    deleteComment,
    addComment,
  })
)(Shares);
