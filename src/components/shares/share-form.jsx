import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "../common/type";

const ShareForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field component="textarea" placeholder="Text..." name="text" />
    <Field placeholder="Name" name="author" maxLength="60" />
    <Button>Add Comment</Button>
  </form>
);

export default reduxForm({
  form: "ShareForm",
})(ShareForm);
