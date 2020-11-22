import React from "react";
import styled from "@emotion/styled";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "../Common/type";

const StyledButton = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;

const Chat = ({ handleSubmit, onErase }) => (
  <form onSubmit={handleSubmit}>
    <Field component="textarea" placeholder="Text..." name="text" />
    <Field placeholder="Name" name="author" maxLength="60" />
    <StyledButton>Add Comment</StyledButton>
    <StyledButton onClick={onErase}>Очистить чат</StyledButton>
  </form>
);

export default reduxForm({
  form: "Chat",
})(Chat);
