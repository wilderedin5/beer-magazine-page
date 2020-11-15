import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  toggleLike,
  deleteComment,
  addComment,
} from "../../redux/shares-reducer";
import Shares from "./Shares";

const mapStateToProps = (state) => ({
  shares: state.shares.shares,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    toggleLike,
    deleteComment,
    addComment,
  })
)(Shares);
