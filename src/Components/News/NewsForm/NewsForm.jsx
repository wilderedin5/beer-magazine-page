import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import styled from "@emotion/styled";
import {
  Textarea,
  Input,
} from "../../../hoc/createFromElement/createFormElement";
import {
  required,
  maxAbv60,
  maxAbv1500,
} from "../../../Validators/NewsFormValidate";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NewsForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      component={Input}
      validate={[required, maxAbv60]}
      type="text"
      placeholder="Name"
      name="authorName"
    />
    <Field
      component={Input}
      validate={[required, maxAbv60]}
      type="text"
      placeholder="Theme"
      name="theme"
    />
    <Field
      component={Input}
      validate={[required, maxAbv60]}
      type="text"
      placeholder="Category"
      name="category"
    />
    <Field
      component={Textarea}
      validate={[required, maxAbv1500]}
      type="text"
      placeholder="Text"
      name="newsText"
    />
    <Button type="primary" htmlType="submit">
      Отправить новость
    </Button>
  </Form>
);

export default reduxForm({
  form: "NewsForm", // a unique identifier for this form
})(NewsForm);
