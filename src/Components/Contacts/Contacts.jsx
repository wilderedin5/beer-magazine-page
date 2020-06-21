import React from 'react';
import Address from './Address/Address';
import PhoneNumber from './PhoneNumber/PhoneNumber';
import Mail from './Mail/Mail';
import Requisite from './Requisite/Requisite';
import { List, Divider } from 'antd';
import style from './Contacts.module.scss';

const Contacts = (props) => (
    <div>
        <Divider className={style.divider} orientation="left">Адрес:</Divider>
        <List
            size="small"
            bordered
            dataSource={props.address}
            renderItem={item => (
                <List.Item>
                    <Address {...item} />
                </List.Item>
            )} />
        <Divider className={style.divider} orientation="left">Телефон:</Divider>
        <List
            size="small"
            bordered
            dataSource={props.phone}
            renderItem={item => (
                <List.Item>
                    <PhoneNumber {...item} />
                </List.Item>
            )} />
        <Divider className={style.divider} orientation="left">E-mail:</Divider>
        <List
            size="small"
            bordered
            dataSource={props.email}
            renderItem={item => (
                <List.Item>
                    <Mail {...item} />
                </List.Item>
            )} />
        <Divider className={style.divider} orientation="left">Реквизиты:</Divider>
        <List
            size="small"
            bordered
            dataSource={props.requisites}
            renderItem={item => (
                <List.Item>
                    <Requisite {...item} />
                </List.Item>
            )} />
    </div>
)

export default Contacts;