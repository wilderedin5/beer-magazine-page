import React from "react";
import styled from "@emotion/styled";
import {
  Textarea as BaseTextarea,
  Input as BaseInput,
} from "../../Components/Common/type";

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

const createFormElement = (Element) => ({ input, meta, ...props }) => (
  <div>
    <Element {...input} {...props} />
    {meta.error && meta.touched && <Error>{meta.error}</Error>}
  </div>
);

export const Textarea = createFormElement(BaseTextarea);
export const Input = createFormElement(BaseInput);

export default createFormElement;
