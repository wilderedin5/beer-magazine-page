import React from "react";
import { List, Divider } from "antd";
import { Note } from "../Common/type";

const Requisite = ({
  name,
  nalogNumber,
  legalAddress,
  bankName,
  checkingNumber,
  bik,
}) => (
  <div>
    <Note label="Имя" value={name} />
    <Note label="ИНН" value={nalogNumber} />
    <Note label="Юридический адрес" value={legalAddress} />
    <Note label="Банк" value={bankName} />
    <Note label="Расчетный счет" value={checkingNumber} />
    <Note label="БИК" value={bik} />
  </div>
);

const Contacts = (props) => (
  <div>
    <Divider orientation="left">Адрес:</Divider>
    <List
      size="small"
      bordered
      dataSource={props.address}
      renderItem={({ descOfAddress, address }) => (
        <List.Item>
          <Note label={descOfAddress} value={address} />
        </List.Item>
      )}
    />
    <Divider orientation="left">Телефон:</Divider>
    <List
      size="small"
      bordered
      dataSource={props.phone}
      renderItem={({ phoneNumber }) => (
        <List.Item>
          <div>{phoneNumber}</div>
        </List.Item>
      )}
    />
    <Divider orientation="left">E-mail:</Divider>
    <List
      size="small"
      bordered
      dataSource={props.email}
      renderItem={({ emailAddress, descriptionOfContact }) => (
        <List.Item>
          <Note label={emailAddress} value={descriptionOfContact} />
        </List.Item>
      )}
    />
    <Divider orientation="left">Реквизиты:</Divider>
    <List
      size="small"
      bordered
      dataSource={props.requisites}
      renderItem={(item) => (
        <List.Item>
          <Requisite {...item} />
        </List.Item>
      )}
    />
  </div>
);

export default Contacts;
