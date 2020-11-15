import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import styled from "@emotion/styled";
import {
  Textarea,
  Input,
} from "../../../../hoc/createFromElement/createFormElement";
import {
  required,
  maxAbv260,
  maxAbv60,
} from "../../../../Validators/ShareFormValidate";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ShareForm = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Field
      component={Textarea}
      type="text"
      placeholder="Текст..."
      name="text"
      validate={[required, maxAbv260]}
    />
    <Field
      component={Input}
      type="text"
      placeholder="Имя"
      name="name"
      validate={[required, maxAbv60]}
    />
    <Button htmlType="submit" type="primary">
      Add Comment
    </Button>
  </Form>
);

export default reduxForm({
  form: "ShareForm", // a unique identifier for this form
})(ShareForm);
