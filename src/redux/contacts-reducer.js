let initialState = {
  address: [
    {
      id: 1,
      address: "Черноруссия, г.Березино, ул.черниговская, д.4",
      descOfAddress: "Склад",
    },
    {
      id: 2,
      address: "Черноруссия, г.Электнрозаводск, ул.Паскаля, д.11",
      descOfAddress: "Пункт самовывоза",
    },
  ],
  phone: [{ id: 1, phoneNumber: "8800333x000" }],
  email: [
    {
      id: 1,
      emailAddress: "wildnefalem5@gmail.com",
      desc: "директор",
    },
    {
      id: 2,
      emailAddress: "production@mail.ru",
      desc: "по всем вопросам заказов и для консультации",
    },
    {
      id: 3,
      emailAddress: "reklama@yahoo.com",
      desc: "по вопросам рекламы и сотрудничества",
    },
    {
      id: 4,
      emailAddress: "it-teh@gmail.com",
      desc: "по техническим вопросам работы сайта",
    },
    {
      id: 5,
      emailAddress: "logisticsr@gmail.com",
      desc: "предложения по товарам и услугам",
    },
  ],
  requisites: [
    {
      id: 1,
      name: "Popov Ivan Dmitrievich",
      nalogId: "7777x77777",
      address: "Черноруссия, г.Электнрозаводск, ул.Паскаля, д.11",
      bankName: "GarageBank",
      payNumber: "12893812903182",
      bik: "123233232",
    },
    {
      id: 2,
      name: "Kazemir sergey Chernigovsky",
      nalogId: "888x8888888",
      address: "Черноруссия, г.Березино, ул.черниговская, д.4",
      bankName: "TurboBank",
      payNumber: "78766788978978",
      bik: "333333333",
    },
  ],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactsReducer;
