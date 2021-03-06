import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "../common/type";

const Chat = ({ handleSubmit, onErase }) => (
  <form onSubmit={handleSubmit}>
    <Field placeholder="Text" name="text" component="textarea" />
    <Field placeholder="Name" name="author" maxLength="60" />
    <Button>Add Comment</Button>
    <Button onClick={onErase}>Erase chat</Button>
  </form>
);

export default reduxForm({
  form: "Chat",
})(Chat);
