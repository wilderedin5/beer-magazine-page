const MANAGE_CHAT = "chat-reducer/MANAGE_CHAT";
const TOGGLE_LIKE_MESSAGE = "chat-reducer/TOGGLE_LIKE_MESSAGE";
const ERASE_CHAT = "chat-reducer/ERASE_CHAT";

let initialState = {
  messages: [
    {
      id: 1,
      name: "Denis",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 34,
    },
    {
      id: 2,
      name: "Elena",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 2,
    },
    {
      id: 3,
      name: "Sveta",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 98,
    },
    {
      id: 4,
      name: "Ivan",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 276,
    },
    {
      id: 5,
      name: "Dmitry",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 4,
    },
    {
      id: 6,
      name: "George",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 0,
    },
    {
      id: 7,
      name: "Vladimir",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 1,
    },
    {
      id: 8,
      name: "Anna",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ex euismod, pharetra ligula eget, finibus elit. In mattis tincidunt ex suscipit dictum. In hac habitasse platea dictumst. Nam scelerisque non metus ut luctus.",
      liked: null,
      likeCount: 9,
    },
  ],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(({ message }) =>
          message.id === action.messageId
            ? {
                ...message,
                liked: action.liked,
                likeCount: action.liked
                  ? ++message.likeCount
                  : --message.likeCount,
              }
            : message
        ),
      };
    case MANAGE_CHAT:
      return {
        ...state,
        messages: state.messages.some(({ id }) => id === action.id)
          ? state.messages.filter(({ id }) => id !== action.id)
          : [...state.messages, action.message],
      };
    case ERASE_CHAT:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

export const manageChat = (id, message) => ({
  type: MANAGE_CHAT,
  id,
  message,
});

export const setLike = (messageId, liked) => ({
  type: TOGGLE_LIKE_MESSAGE,
  messageId,
  liked,
});

export const eraseChat = () => ({
  type: ERASE_CHAT,
});

export default chatReducer;
