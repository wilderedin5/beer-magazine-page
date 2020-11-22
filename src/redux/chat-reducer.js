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
      hasLike: null,
      likeCount: 34,
    },
    {
      id: 2,
      author: "Elena",
      text: "Это второй комментс",
      hasLike: null,
      likeCount: 2,
    },
    {
      id: 3,
      author: "Sveta",
      text: "Это третий комментс",
      hasLike: null,
      likeCount: 98,
    },
    {
      id: 4,
      author: "Ivan",
      text: "Это четвертый комментс",
      hasLike: null,
      likeCount: 276,
    },
    {
      id: 5,
      author: "Dmitry",
      text: "Это пятый комментс",
      hasLike: null,
      likeCount: 4,
    },
    {
      id: 6,
      author: "George",
      text: "Это шестой комментс",
      hasLike: null,
      likeCount: 0,
    },
    {
      id: 7,
      author: "Vladimir",
      text: "Это седьмой комментс",
      hasLike: null,
      likeCount: 1,
    },
    {
      id: 8,
      author: "Anna",
      text: "Это восьмой комментс",
      hasLike: null,
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
              hasLike: action.hasLike,
              likeCount: action.hasLike
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

export const addMessage = (id, author, text, hasLike, likeCount) => ({
  type: ADD_MESSAGE_TO_CHAT,
  message: { id, author, text, hasLike, likeCount },
});

export const setLike = (messageId, hasLike) => ({
  type: TOGGLE_LIKE_MESSAGE,
  messageId,
  hasLike,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE_FROM_CHAT,
  messageId,
});

export const eraseChat = () => ({
  type: DELETE_ALL_MESSAGES_FROM_CHAT,
});

export default chatReducer;
