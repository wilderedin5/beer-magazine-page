import React from "react";
import styled from "@emotion/styled";
import Share from "./Share";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Shares = ({ match, shares, addComment, deleteComment, setLike }) => {
  const shareId = match.params.id;
  return (
    <Container>
      {!shareId
        ? shares.map((share) => <Share {...share} />)
        : shares
            .filter((share) => String(share.id) === shareId)
            .map((share) => (
              <Share
                addComment={addComment}
                deleteComment={deleteComment}
                setLike={setLike}
                isOpened={shareId}
                {...share}
              />
            ))}
    </Container>
  );
};

export default Shares;
