import { 
    FETCH_ARTICLE_LIST,
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_LIST_FAILURE,
    FETCH_ARTICLE_DETAIL,
    FETCH_ARTICLE_DETAIL_SUCCESS,
    FETCH_ARTICLE_DETAIL_FAILURE, 
    FETCH_USER_LIST, 
    FETCH_USER_DETAIL, 
    UPLOAD_NEW_ARTICLE, 
    UPLOAD_NEW_ARTICLE_SUCCESS, 
    UPLOAD_NEW_ARTICLE_FAILURE, 
    DELETE_ARTICLE, 
    FETCH_USER_DETAIL_SUCCESS, 
    FETCH_USER_DETAIL_FAILURE,
    UPDATE_PROFILE,
    UPDATE_ARTICLE, FETCH_MY_DETAIL
 } from "../actions/types";

 const initialState = {
    isLoading: false,
    data: null,
    user: null,
    error: null,
    message: null,
    me: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLE_LIST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            };
        case FETCH_ARTICLE_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_ARTICLE_DETAIL:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_ARTICLE_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: null
            };
        case FETCH_ARTICLE_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_USER_LIST:
            return {
                ...state,
                data: action.payload,
            };
       
            
        case FETCH_USER_DETAIL:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_USER_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: null
            };
        case FETCH_USER_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case FETCH_MY_DETAIL:
            return {
                ...state,
                me: action.payload
            };
        case UPLOAD_NEW_ARTICLE:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case UPLOAD_NEW_ARTICLE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.payload,
                error: null
            };
        case UPLOAD_NEW_ARTICLE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case DELETE_ARTICLE:
            return {
                ...state,
                message: action.payload,
            };
        case UPDATE_ARTICLE:
            return {
                ...state,
                message: action.payload,
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}