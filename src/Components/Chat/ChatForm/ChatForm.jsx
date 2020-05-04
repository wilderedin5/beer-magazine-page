import React from 'react';
import { Field, reduxForm } from 'redux-form';
import createFormElement from '../../../hoc/createFromElement/createFormElement';
import { required, maxAbv260, maxAbv60 } from '../../../Validators/ChatFormValidate';
import style from './ChatForm.module.scss';

const Input = createFormElement("input");
const Textarea = createFormElement("textarea");

const ChatForm = (props) => {
    return (
        <form className={style.chatForm} onSubmit={props.handleSubmit}>
            <Field component={Textarea} type="text" placeholder="Текст..." name="messageText" validate={[required,maxAbv260]} />
            <Field component={Input} type="text" placeholder="Имя" name="authorName" validate={[required,maxAbv60]} />
            <button>Отправить сообщение</button>
        </form>
    )
}

export default reduxForm({
    form: 'ChatForm' // a unique identifier for this form
})(ChatForm)