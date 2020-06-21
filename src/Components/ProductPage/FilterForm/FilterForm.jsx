import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxAbv15, required, minAbv } from '../../../Validators/FilterFormValidate';
import createFormElement from '../../../hoc/createFromElement/createFormElement';
import { Button } from 'antd';
import style from './FilterForm.module.scss';

const Input = createFormElement("input");

const FilterForm = (props) => (
    <form className={style.filterForm} onSubmit={props.handleSubmit}>
        <Field type="number" component={Input} name="abv" validate={[maxAbv15, required, minAbv]} placeholder="Минимальная крепость" />
        <Button type="primary">Применить фильтр</Button>
    </form>
)

export default reduxForm({
    form: 'FilterForm' // a unique identifier for this form
})(FilterForm)