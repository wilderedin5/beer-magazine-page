let initialState = {
    shares: [
        {id: 1, descShareFull: "По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%." ,imageShare: "https://bochka-dubovaya.nethouse.ru/static/img/0000/0004/4970/44970416.3mfqirbbip.W665.jpg", shareName: "НАКОПИТЕЛЬНАЯ СИСТЕМА СКИДОК", timeShare: "Бессрочно", descShare: "По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%."},
        {id: 2, descShareFull: "По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%." ,imageShare: "https://ochakovo.ru/wp-content/uploads/2019/12/0-vopros-otvet-vysokoplotnoe-pivovarenie-900x500.jpg", shareName: "АКЦИЯ 2+1 НА ДРОЖЖИ BEERVINGEM", timeShare: "с 01.03.2020 по 31.03.2020", descShare: "В подарок к покупке идёт пачка дрожжей с наименьшей стоимостью."},
        {id: 3, descShareFull: "По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%." ,imageShare: "https://alcopribor.ru/image/catalog/images/11_1_1_%D0%9D%D0%B0%D0%B1%D0%BE%D1%80_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B8%D0%B2%D0%BE%D0%B2%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D1%8F.jpg", shareName: "ХМЕЛЬ МЕСЯЦА", timeShare: "с 1.05.20 по 31.05.20 мая", descShare: "Скидки 10% на ХМЕЛЬ BEERVINGEM"},
        {id: 4, descShareFull: "По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкПо достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%.По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%." ,imageShare: "https://biowin39.ru/image/catalog/pivo/5.jpg", shareName: "СПИРТОВЫЕ ДРОЖЖИ В ПОДАРОК!", timeShare: "01.01.2020 по 31.12.2020", descShare: "При покупке любого дистиллятора или ректификатора - спиртовые дрожжи Bragman Vodka в подарок!"}
    ]
}

export const sharesReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default sharesReducer;