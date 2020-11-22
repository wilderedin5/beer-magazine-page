import { connect } from "react-redux";
import React from "react";
import styled from "@emotion/styled";
import { Divider } from "antd";
import { Note } from "../Common/type";

const List = styled.div`
  border: 1px solid gray;
  padding: 10px;
`;

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
    <List>
      {props.address.map(({ descOfAddress, address }) => (
        <Note label={descOfAddress} value={address} />
      ))}
    </List>

    <Divider orientation="left">Телефон:</Divider>
    <List>
      {props.phone.map(({ phoneNumber }) => (
        <Note label={"Number:"} value={phoneNumber} />
      ))}
    </List>

    <Divider orientation="left">E-mail:</Divider>
    <List>
      {props.email.map(({ emailAddress, desc }) => (
        <Note label={emailAddress} value={desc} />
      ))}
    </List>

    <Divider orientation="left">Реквизиты:</Divider>
    <List>
      {props.requisites.map((item) => (
        <Requisite {...item} />
      ))}
    </List>
  </div>
);

const mapStateToProps = (state) => ({
  address: state.contacts.address,
  phone: state.contacts.phone,
  email: state.contacts.email,
  requisites: state.contacts.requisites,
});

export default connect(mapStateToProps, {})(Contacts);
