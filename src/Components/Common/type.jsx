import React from "react";
import styled from "@emotion/styled";

export const Note = ({ label, value }) => (
  <div>
    <b>{label}</b>: {value}
  </div>
);

export const Textarea = styled.textarea`
  width: 300px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid gray;
  height: 150px;
  resize: none;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  padding: 5px 16px;
  border: 1px solid gray;
  line-height: 1.5;
  color: #000;
  :disabled {
    background: #000;
    color: #fff;
  }
`;
