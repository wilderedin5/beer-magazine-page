const ADD_MESSAGE_TO_CHAT = "chat-reducer/ADD_MESSAGE_TO_CHAT";
const TOGGLE_LIKE_MESSAGE = "chat-reducer/TOGGLE_LIKE_MESSAGE";
const DELETE_MESSAGE_FROM_CHAT = "chat-reducer/DELETE_MESSAGE_FROM_CHAT";
const DELETE_ALL_MESSAGES_FROM_CHAT =
  "chat-reducer/DELETE_ALL_MESSAGES_FROM_CHAT";

let initialState = {
  messages: [
    {
      id: 1,
      authorName: "Denis",
      messageText: "Это первый комментс",
      liked: null,
      likeCount: 34,
    },
    {
      id: 2,
      authorName: "Elena",
      messageText: "Это второй комментс",
      liked: null,
      likeCount: 2,
    },
    {
      id: 3,
      authorName: "Sveta",
      messageText: "Это третий комментс",
      liked: null,
      likeCount: 98,
    },
    {
      id: 4,
      authorName: "Ivan",
      messageText: "Это четвертый комментс",
      liked: null,
      likeCount: 276,
    },
    {
      id: 5,
      authorName: "Dmitry",
      messageText: "Это пятый комментс",
      liked: null,
      likeCount: 4,
    },
    {
      id: 6,
      authorName: "George",
      messageText: "Это шестой комментс",
      liked: null,
      likeCount: 0,
    },
    {
      id: 7,
      authorName: "Vladimir",
      messageText: "Это седьмой комментс",
      liked: null,
      likeCount: 1,
    },
    {
      id: 8,
      authorName: "Anna",
      messageText: "Это восьмой комментс",
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

export const addMessage = (id, authorName, messageText, liked, likeCount) => ({
  type: ADD_MESSAGE_TO_CHAT,
  message: { id, authorName, messageText, liked, likeCount },
});

export const toggleLike = (messageId, liked) => ({
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
