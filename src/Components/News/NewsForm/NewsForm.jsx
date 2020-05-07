import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './NewsForm.module.scss';
import createFormElement from '../../../hoc/createFromElement/createFormElement';
import { required, maxAbv60, maxAbv1500 } from '../../../Validators/NewsFormValidate';
import { Button } from 'antd';

const Input = createFormElement("input");
const Textarea = createFormElement("textarea");


const NewsForm = (props) => {
    return (
        <form className={style.newsForm} onSubmit={props.handleSubmit}>
            <Field component={Input} validate={[required,maxAbv60]} type="text" placeholder="Name" name="authorName" />
            <Field component={Input} validate={[required,maxAbv60]} type="text" placeholder="Theme" name="theme" />
            <Field component={Input} validate={[required,maxAbv60]} type="text" placeholder="Category" name="category" />
            <Field component={Textarea} validate={[required,maxAbv1500]} type="text" placeholder="Text" name="newsText" />
            <Button type="primary">Отправить новость</Button>
        </form>
    )
}

export default reduxForm({
    form: 'NewsForm' // a unique identifier for this form
})(NewsForm)