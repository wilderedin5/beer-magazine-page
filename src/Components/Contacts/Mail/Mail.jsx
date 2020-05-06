import React from 'react';

const Mail = (props) => {
    return (
        <div><b>{props.emailAddress}</b> - {props.descriptionOfContact}</div>
    )
}

export default Mail;