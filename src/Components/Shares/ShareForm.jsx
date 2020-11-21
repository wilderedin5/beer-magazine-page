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

const ShareForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field component="textarea" placeholder="Text..." name="text" />
    <Field placeholder="Name" name="name" maxLength="60" />
    <Button htmlType="submit" type="primary">
      Add Comment
    </Button>
  </Form>
);

export default reduxForm({
  form: "ShareForm",
})(ShareForm);
