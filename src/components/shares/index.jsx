import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { setLike, deleteComment, addComment } from "../../redux/shares-reducer";
import { Share } from "./share";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Shares = ({ match, shares, addComment, deleteComment, setLike }) => {
  const shareId = match.params.id;
  const formatShares = !shareId
    ? shares
    : shares.filter((share) => String(share.id) === shareId);

  return (
    <Container>
      {formatShares.map((share) => (
        <Share
          onAddComment={addComment}
          onCommentDelete={deleteComment}
          onCommentLike={setLike}
          isOpened={shareId}
          share={share}
        />
      ))}
    </Container>
  );
};

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
