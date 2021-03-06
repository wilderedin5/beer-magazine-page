import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "../../hoc/createFormElement";
import { Button } from "../common/type";

const FilterForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field placeholder="Min abv" name="abv" maxLength="60" />
    <Button>Применить фильтр</Button>
  </form>
);

export default reduxForm({
  form: "FilterForm",
})(FilterForm);
