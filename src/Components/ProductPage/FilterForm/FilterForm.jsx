import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {maxAbv15,required,minAbv} from '../../../Validators/FilterFormValidate';
import createFormElement from '../../../hoc/createFromElement/createFormElement';

const Input = createFormElement("input");

const FilterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="number" component={Input} name="abv" validate={[maxAbv15,required,minAbv]} placeholder="Минимальная крепость" />
            <button>Применить фильтр</button>
        </form>
    )
}

export default reduxForm({
    form: 'FilterForm' // a unique identifier for this form
  })(FilterForm)