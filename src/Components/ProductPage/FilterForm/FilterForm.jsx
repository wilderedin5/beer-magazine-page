import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import {
  maxAbv15,
  required,
  minAbv,
} from "../../../Validators/FilterFormValidate";
import { Input } from "../../../hoc/createFromElement/createFormElement";

const FilterForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      type="number"
      component={Input}
      name="abv"
      validate={[maxAbv15, required, minAbv]}
      placeholder="Минимальная крепость"
    />
    <Button type="primary">Применить фильтр</Button>
  </form>
);

export default reduxForm({
  form: "FilterForm",
})(FilterForm);
