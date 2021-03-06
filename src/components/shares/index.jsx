import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setLike, deleteComment, addComment } from "../../redux/shares-reducer";
import { Share } from "./share";

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(p) => !p.shareOpened && "repeat(2, 1fr)"};
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Shares = ({ shares, addComment, deleteComment, setLike }) => {
  const { shareId } = useParams();

  const formatShares = shares.filter(({ id }) =>
    shareId ? id === +shareId : true
  );

  return (
    <Container shareOpened={shareId}>
      {formatShares.map((share, index) => (
        <Share
          onCommentAdd={addComment}
          onCommentDelete={deleteComment}
          onCommentLike={setLike}
          isOpened={shareId}
          share={share}
          key={index}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  shares: state.shares.shares,
});

export default connect(mapStateToProps, {
  setLike,
  deleteComment,
  addComment,
})(Shares);
