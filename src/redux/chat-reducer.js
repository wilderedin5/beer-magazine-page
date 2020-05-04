let initialState = {
    messages: [
        {id: 1, authorName: "Denis", messageText: "Это первый комментс", liked: null, likeCount: 34},
        {id: 2, authorName: "Elena", messageText: "Это второй комментс", liked: null, likeCount: 2},
        {id: 3, authorName: "Sveta", messageText: "Это третий комментс", liked: null, likeCount: 98},
        {id: 4, authorName: "Ivan", messageText: "Это четвертый комментс", liked: null, likeCount: 276},
        {id: 5, authorName: "Dmitry", messageText: "Это пятый комментс", liked: null, likeCount: 4},
        {id: 6, authorName: "George", messageText: "Это шестой комментс", liked: null, likeCount: 0},
        {id: 7, authorName: "Vladimir", messageText: "Это седьмой комментс", liked: null, likeCount: 1},
        {id: 8, authorName: "Anna", messageText: "Это восьмой комментс", liked: null, likeCount: 9},
    ]
}

const chatReducer = (state = initialState, action) => {
    switch(action.type){
        
        default:
            return state
    }
}

export default chatReducer;