import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "../Common/type";

const NewsForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field maxLength="60" placeholder="Name" name="author" />
    <Field maxLength="60" placeholder="Theme" name="theme" />
    <Field maxLength="60" placeholder="Category" name="category" />
    <Field
      component="textarea"
      maxLength="1000"
      placeholder="Text"
      name="text"
    />
    <Button>Отправить новость</Button>
  </form>
);

export default reduxForm({
  form: "NewsForm",
})(NewsForm);
