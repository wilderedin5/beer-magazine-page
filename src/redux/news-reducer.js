const MANAGE_NEWS = "news-reducer/MANAGE_NEWS";
const CHANGE_NEWS_RATING = "news-reducer/CHANGE_NEWS_RATING";

let initialState = {
  news: [
    {
      id: 1,
      text:
        "Вы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причинаВы могли обратить внимание, что пиво на 90% состоит из воды, так что говорить о важности воды в пивоварении нет смысла. По данной теме было написано множество книг, но обычно они не сильно углубляются в тему,  из-за чего большинство домашних пивоваров либо «ломают мозг» в попытке разобраться, либо напросто теряют интерес. Поэтому я продолжал поиски и нашел лишь один-два сайта, где обсуждаются общие характеристики воды, но нет конкретной формулы. И для этого есть веская причина",
      theme: "ПРОСТЫМИ СЛОВАМИ О ХИМИЧЕСКОМ СОСТАВЕ ВОДЫ ДЛЯ ПИВОВАРЕНИЯ",
      author: "Denis",
      category: "Секреты пивоварения",
      selected: 4,
    },
    {
      id: 2,
      text:
        "Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод Солод является чрезвычайно важной частью пивоварения, можно даже сказать его душой. Именно солод в большей мере, чем другие ингредиенты, формирует вкус, цвет, тело и аромат пива. Кроме того, он является источником крахмала и ферментов, превращающих крахмал в сбраживаемые сахара, который дрожжи превращают в спирт и углекислый газ. Ну а если говорить проще – без солода пива не сваришь. А раз это основной ингредиент, то и к его выбору нужно подходит основательно. Давайте разбираться, что собой представляет солод и как, собственно, его выбирать!",
      theme:
        "ПОЧТИ ВСЁ, ЧТО ВАМ НУЖНО ЗНАТЬ О СОЛОДЕ – ТОНКОСТИ ВЫБОРА ГЛАВНОГО ПИВНОГО ИНГРЕДИЕНТА",
      author: "Anton",
      category: "Пивоварение",
      selected: 0,
    },
    {
      id: 3,
      text:
        "Приготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингПриготовление пива – сложный процесс, включающий смешивание и дальнейшую проработку четырёх основных ингредиентов: солода, воды, хмеля и дрожжей. Хмель играет очень важную роль в этом квартете. Прежде всего, он придаёт пиву необходимую горечь, которая нивелирует излишнюю солодовую сладость в некоторых сортах пива и способствует более сбалансированному вкусу. Что важнее, хмель сообщает напиткам огромную симфонию вкуса и аромата (цитрусовые, хвойные, травяные, землистые и прочие оттенки). Также он положительно сказывается на стойкости пены и является природным консервантом, предотвращающим порчу пива. Но не весь хмель одинаков. Подобно винограду, существует огромное количество сортов хмеля, биохимический состав которых влияет на характеристики пива тем или иным образом. Понимание этого разнообразия и процессов, которые происходят во время охмеления сусла, делает каждую последующую варку более осознанной, а в дальнейшем поможет в составлении своих собственных, уникальных рецептов.",
      theme: "ХМЕЛЬ ДЛЯ ПИВА: РУКОВОДСТВО ДЛЯ НАЧИНАЮЩИХ И НЕ ТОЛЬКО",
      author: "Sergey",
      category: "Пивоварение",
      selected: 5,
    },
    {
      id: 4,
      text:
        "Роль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжейРоль дрожжей в пивоварении переоценить сложно. Без ячменного солода, как мы выяснили ранее, приготовить пенное можно (есть, ведь, солод пшеничный или ржаной, готовят пиво и из риса, раз уж на то пошло). Хмель тоже ключевым компонентом не назовёшь, ведь даже сейчас варят пиво без его участия (финское «сахти», например). Какова же роль дрожжей?",
      theme: "РУКОВОДСТВО ПО ВЫБОРУ ПИВНЫХ ДРОЖЖЕЙ",
      author: "Elena",
      category: "Пивоварение",
      selected: 1,
    },
    {
      id: 5,
      text:
        "ТТрадиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».Традиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».радиционное имбирное пиво – это естественно газированный, сладкий, обычно слабоалкогольный напиток, приготовленный посредством естественной ферментации свежего корня имбиря с сахаром и прочими вкусовыми добавками специальной дрожжевой закваской. Это очень популярный освежающий напиток на западе, особенно в Великобритании, а также незаменимый коктейльный ингредиент, постоянная составляющая «Московского Мула» и «Dark 'n Stormy».",
      theme: "ИМБИРНОЕ ПИВО В ДЕТАЛЯХ",
      author: "Ivan",
      category: "Пивоварение",
      selected: 3,
    },
  ],
  rating: 5,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_NEWS:
      return {
        ...state,
        news: state.news.some(({ id }) => id === action.id)
          ? state.news.filter(({ id }) => id !== action.id)
          : [...state.news, action.news],
      };

    case CHANGE_NEWS_RATING:
      return {
        ...state,
        news: state.news.map((news) =>
          news.id === action.newsId
            ? { ...news, selected: action.selected }
            : news
        ),
      };
    default:
      return state;
  }
};

export const manageNews = (id, news) => ({
  type: MANAGE_NEWS,
  news,
  id,
});

export const changeRating = (newsId, selected) => ({
  type: CHANGE_NEWS_RATING,
  newsId,
  selected,
});

export default newsReducer;
