

let initialState = {
    news: [
        {id: 1, newsText: "Вы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причина...", theme: "ПРОСТЫМИ СЛОВАМИ О ХИМИЧЕСКОМ СОСТАВЕ ВОДЫ ДЛЯ ПИВОВАРЕНИЯ", authorName: "Denis", category: "Секреты пивоварения"},
        {id: 2, newsText: "Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод в большей мере, чем другие ингредиенты, формирует вкус, цвет, тело и аромат пива. Кроме того, он является источником крахмала и ферментов, превращающих крахмал в сбраживаемые сахара, который дрожжи превращают в спирт и углекислый газ. Ну а если говорить проще – без солода пива не сваришь. А раз это основной ингредиент, то и к его выбору нужно подходит основательно. Давайте разбираться, что собой представляет солод и как, собственно, его выбирать!", theme: "ПОЧТИ ВСЁ, ЧТО ВАМ НУЖНО ЗНАТЬ О СОЛОДЕ – ТОНКОСТИ ВЫБОРА ГЛАВНОГО ПИВНОГО ИНГРЕДИЕНТА", authorName: "Anton", category: "Пивоварение"},
        {id: 3, newsText: "Приготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингредиентов: солода, воды, хмеля и дрожжей. Хмель играет очень важную роль в этом квартете. Прежде всего, он придаёт пиву необходимую горечь, которая нивелирует излишнюю солодовую сладость в некоторых сортах пива и способствует более сбалансированному вкусу. Что важнее, хмель сообщает напиткам огромную симфонию вкуса и аромата (цитрусовые, хвойные, травяные, землистые и прочие оттенки). Также он положительно сказывается на стойкости пены и является природным консервантом, предотвращающим порчу пива. Но не весь хмель одинаков. Подобно винограду, существует огромное количество сортов хмеля, биохимический состав которых влияет на характеристики пива тем или иным образом. Понимание этого разнообразия и процессов, которые происходят во время охмеления сусла, делает каждую последующую варку более осознанной, а в дальнейшем поможет в составлении своих собственных, уникальных рецептов.", theme: "ХМЕЛЬ ДЛЯ ПИВА: РУКОВОДСТВО ДЛЯ НАЧИНАЮЩИХ И НЕ ТОЛЬКО", authorName: "Sergey", category: "Пивоварение"},
        {id: 4, newsText: "Роль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжей?", theme: "РУКОВОДСТВО ПО ВЫБОРУ ПИВНЫХ ДРОЖЖЕЙ", authorName: "Elena", category: "Пивоварение"},
        {id: 5, newsText: "Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».", theme: "ИМБИРНОЕ ПИВО В ДЕТАЛЯХ", authorName: "Ivan", category: "Пивоварение"}
    ]
}

const newsReducer = (state = initialState, action) => {
    switch(action.type){
        
        default:
            return state
    }
}

export default newsReducer;