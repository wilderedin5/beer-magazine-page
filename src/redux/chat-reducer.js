const ADD_MESSAGE_TO_CHAT = "chat-reducer/ADD_MESSAGE_TO_CHAT";
const TOGGLE_LIKE_MESSAGE = "chat-reducer/TOGGLE_LIKE_MESSAGE";
const DELETE_MESSAGE_FROM_CHAT = "chat-reducer/DELETE_MESSAGE_FROM_CHAT";
const DELETE_ALL_MESSAGES_FROM_CHAT =
  "chat-reducer/DELETE_ALL_MESSAGES_FROM_CHAT";

let initialState = {
  messages: [
    {
      id: 1,
      author: "Denis",
      text: "Это первый комментс",
      liked: null,
      likeCount: 34,
    },
    {
      id: 2,
      author: "Elena",
      text: "Это второй комментс",
      liked: null,
      likeCount: 2,
    },
    {
      id: 3,
      author: "Sveta",
      text: "Это третий комментс",
      liked: null,
      likeCount: 98,
    },
    {
      id: 4,
      author: "Ivan",
      text: "Это четвертый комментс",
      liked: null,
      likeCount: 276,
    },
    {
      id: 5,
      author: "Dmitry",
      text: "Это пятый комментс",
      liked: null,
      likeCount: 4,
    },
    {
      id: 6,
      author: "George",
      text: "Это шестой комментс",
      liked: null,
      likeCount: 0,
    },
    {
      id: 7,
      author: "Vladimir",
      text: "Это седьмой комментс",
      liked: null,
      likeCount: 1,
    },
    {
      id: 8,
      author: "Anna",
      text: "Это восьмой комментс",
      liked: null,
      likeCount: 9,
    },
  ],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_TO_CHAT:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case TOGGLE_LIKE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.messageId) {
            return {
              ...message,
              liked: action.liked,
              likeCount: action.liked
                ? ++message.likeCount
                : --message.likeCount,
            };
          }
          return message;
        }),
      };
    case DELETE_MESSAGE_FROM_CHAT:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.messageId
        ),
      };
    case DELETE_ALL_MESSAGES_FROM_CHAT:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

export const addMessage = (id, author, text, liked, likeCount) => ({
  type: ADD_MESSAGE_TO_CHAT,
  message: { id, author, text, liked, likeCount },
});

export const setLike = (messageId, liked) => ({
  type: TOGGLE_LIKE_MESSAGE,
  messageId,
  liked,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE_FROM_CHAT,
  messageId,
});

export const eraseChat = () => ({
  type: DELETE_ALL_MESSAGES_FROM_CHAT,
});

export default chatReducer;
