import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "../common/type";

const NewsForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field placeholder="Name" maxLength="60" name="author" />
    <Field placeholder="Theme" maxLength="60" name="theme" />
    <Field placeholder="Category" maxLength="60" name="category" />
    <Field placeholder="Text" name="text" component="textarea" />
    <Button>Отправить новость</Button>
  </form>
);

export default reduxForm({
  form: "NewsForm",
})(NewsForm);
