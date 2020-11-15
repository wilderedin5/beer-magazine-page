import React from "react";
import { Button } from "antd";
import { Field, reduxForm } from "redux-form";
import styled from "@emotion/styled";
import {
  Textarea,
  Input,
} from "../../../hoc/createFromElement/createFormElement";
import {
  required,
  maxAbv260,
  maxAbv60,
} from "../../../Validators/ChatFormValidate";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ChatForm = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Field
      component={Textarea}
      type="text"
      placeholder="Текст..."
      name="messageText"
      validate={[required, maxAbv260]}
    />
    <Field
      component={Input}
      type="text"
      placeholder="Имя"
      name="authorName"
      validate={[required, maxAbv60]}
    />
    <Button htmlType="submit" type="primary">
      Add Comment
    </Button>
  </Form>
);

export default reduxForm({
  form: "ChatForm",
})(ChatForm);
