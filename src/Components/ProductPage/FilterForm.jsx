import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "antd";

const FilterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="abv" maxLength="60" placeholder="Min abv" />
    <Button type="primary">Применить фильтр</Button>
  </form>
);

export default reduxForm({
  form: "FilterForm",
})(FilterForm);
