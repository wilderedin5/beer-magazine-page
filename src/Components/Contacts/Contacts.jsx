import React from 'react';
import Address from './Address/Address';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import Mail from './Mail/Mail';
import Requisite from './Requisite/Requisite';

const Contacts = (props) => {
    return (
        <div>
            <div>
                <h1>Адрес:</h1>
                {
                    props.address.map(address => <Address {...address} />)
                }
            </div>
            <div>
                <h1>Телефон:</h1>
                {
                    props.phone.map(phone => <PhoneNumber {...phone} />)
                }
            </div>
            <div>
                <h1>E-mail:</h1>
                {
                    props.email.map(mail => <Mail {...mail} />)
                }
            </div>
            <div>
                <h1>Реквизиты:</h1>
                {
                    props.requisites.map(requisite => <Requisite {...requisite} />)
                }
            </div>
        </div>
    )
}

export default Contacts;