import React from "react";
import { Button } from "antd";
import styled from "@emotion/styled";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";

const StyledButton = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;

const Chat = ({ handleSubmit, onErase }) => (
  <form onSubmit={handleSubmit}>
    <Field component="textarea" placeholder="Text..." name="text" />
    <Field placeholder="Name" name="author" maxLength="60" />
    <StyledButton htmlType="submit" type="primary">
      Add Comment
    </StyledButton>
    <StyledButton onClick={onErase} type="primary">
      Очистить чат
    </StyledButton>
  </form>
);

export default reduxForm({
  form: "Chat",
})(Chat);
