import React from 'react';

const Requisite = (props) => {
    return (
        <div>
            <div><b>Имя:</b> {props.name}</div>
            <div><b>ИНН:</b> {props.nalogNumber}</div>
            <div><b>Юридический адрес:</b> {props.legalAddress}</div>
            <div><b>Банк:</b> {props.bankName}</div>
            <div><b>Расчетный счет:</b> {props.checkingNumber}</div>
            <div><b>БИК:</b> {props.bik}</div>
        </div>
    )
}

export default Requisite;