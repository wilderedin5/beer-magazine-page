import React from 'react';
import { Field, reduxForm } from 'redux-form';
import createFormElement from '../../../../hoc/createFromElement/createFormElement';
import { required, maxAbv260, maxAbv60 } from '../../../../Validators/ShareFormValidate';
import style from './ShareForm.module.scss';
import { Button } from 'antd';

const Input = createFormElement("input");
const Textarea = createFormElement("textarea");

const ShareForm = (props) => (
    <form className={style.chatForm} onSubmit={props.handleSubmit}>
        <Field component={Textarea} type="text" placeholder="Текст..." name="text" validate={[required, maxAbv260]} />
        <Field component={Input} type="text" placeholder="Имя" name="name" validate={[required, maxAbv60]} />
        <Button htmlType="submit" type="primary">
            Add Comment
            </Button>
    </form>
)

export default reduxForm({
    form: 'ShareForm' // a unique identifier for this form
})(ShareForm)