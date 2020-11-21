import React from "react";
import { reduxForm } from "redux-form";
import { Button } from "antd";
import styled from "@emotion/styled";
import { Field } from "../../hoc/createFormElement";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NewsForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field maxLength="60" placeholder="Name" name="author" />
    <Field maxLength="60" placeholder="Theme" name="theme" />
    <Field maxLength="60" placeholder="Category" name="category" />
    <Field
      component="textarea"
      maxLength="1000"
      placeholder="Text"
      name="text"
    />
    <Button type="primary" htmlType="submit">
      Отправить новость
    </Button>
  </Form>
);

export default reduxForm({
  form: "NewsForm",
})(NewsForm);
