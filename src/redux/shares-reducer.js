let initialState = {
    shares: [
        {id: 1, shareName: "НАКОПИТЕЛЬНАЯ СИСТЕМА СКИДОК", timeShare: "Бессрочно", descShare: "По достижении суммы всех совершенных покупок свыше 3 000 рублей, на покупку, следующую за покупкой при которой был достигнут порог скидки, у Вас начинает действовать скидка 3% и увеличивается по мере новых покупок. Максимальный номинал скидки 10%."},
        {id: 2, shareName: "АКЦИЯ 2+1 НА ДРОЖЖИ BEERVINGEM", timeShare: "с 01.03.2020 по 31.03.2020", descShare: "В подарок к покупке идёт пачка дрожжей с наименьшей стоимостью."},
        {id: 3, shareName: "ХМЕЛЬ МЕСЯЦА", timeShare: "с 1.05.20 по 31.05.20 мая", descShare: "Скидки 10% на ХМЕЛЬ BEERVINGEM"},
        {id: 4, shareName: "СПИРТОВЫЕ ДРОЖЖИ В ПОДАРОК!", timeShare: "01.01.2020 по 31.12.2020", descShare: "При покупке любого дистиллятора или ректификатора - спиртовые дрожжи Bragman Vodka в подарок!"}
    ]
}

export const sharesReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default sharesReducer;