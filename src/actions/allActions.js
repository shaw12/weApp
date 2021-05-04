import { 
    FETCH_ARTICLE_LIST,
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_LIST_FAILURE, 
    FETCH_ARTICLE_DETAIL,
    FETCH_ARTICLE_DETAIL_SUCCESS,
    FETCH_ARTICLE_DETAIL_FAILURE,
    FETCH_USER_LIST,
    FETCH_USER_DETAIL,
    FETCH_USER_DETAIL_SUCCESS,
    FETCH_USER_DETAIL_FAILURE,
    UPLOAD_NEW_ARTICLE,
    UPLOAD_NEW_ARTICLE_SUCCESS,
    UPLOAD_NEW_ARTICLE_FAILURE,
    DELETE_ARTICLE, 
    UPDATE_PROFILE, 
    UPDATE_ARTICLE, FETCH_MY_DETAIL
} from "./types";


export const fetchArticle = () => (dispatch) => {
    dispatch({
        type: FETCH_ARTICLE_LIST
    });
    fetch('https://voxiot.com/news?token=3dccc8967bcdd138641575b08f3ad77d')
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: FETCH_ARTICLE_LIST_SUCCESS,
        payload: json.data
        });
    })
    .catch((err) => {
        dispatch({
        type: FETCH_ARTICLE_LIST_FAILURE,
        payload: err
        });
    });
}


export const fetchArticleDetail = (ARTICLE_ID) => (dispatch) => {
    dispatch({
        type: FETCH_ARTICLE_DETAIL
    });
    console.log(ARTICLE_ID)
    fetch(`https://voxiot.com/news/12/?token=3dccc8967bcdd138641575b08f3ad77d`)
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: FETCH_ARTICLE_DETAIL_SUCCESS,
        payload: json
        });
    })
    .catch((err) => {
        dispatch({
        type: FETCH_ARTICLE_DETAIL_FAILURE,
        payload: err
        });
    });
}

export const fetchUserList = () => (dispatch) => {

    fetch(`https://voxiot.com/users?token=3dccc8967bcdd138641575b08f3ad77d`)
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: FETCH_USER_LIST,
        payload: json.data
        });
    })
    .catch((err) => {
        console.log(err)
    });

}

export const fetchUserDetail = (USER_ID) => (dispatch) => {
    dispatch({
        type: FETCH_USER_DETAIL,
    });
    fetch(`https://voxiot.com/users/${USER_ID}/?token=3dccc8967bcdd138641575b08f3ad77d`)
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: FETCH_USER_DETAIL_SUCCESS,
        payload: json
        });
    })
    .catch((err) => {
        dispatch({
        type: FETCH_USER_DETAIL_FAILURE,
        payload: err
        });
    });
    
}

export const fetchMyDetail = () => (dispatch) => {
    fetch(`https://voxiot.com/users/24/?token=3dccc8967bcdd138641575b08f3ad77d`)
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: FETCH_MY_DETAIL,
        payload: json
        });
    })
    .catch((err) => {
        console.log(err)
    });
    
}

export const uploadArticle = (upload) => (dispatch) => {
    dispatch({
        type: UPLOAD_NEW_ARTICLE
    });
    fetch('https://voxiot.com/news/-1/?token=3dccc8967bcdd138641575b08f3ad77d', {
        method: 'POST',
        body: JSON.stringify(upload, null, 2),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: UPLOAD_NEW_ARTICLE_SUCCESS,
        payload: JSON.stringify(json, null, 2)
        });
    })
    .catch((err) => {
        dispatch({
        type: UPLOAD_NEW_ARTICLE_FAILURE,
        payload: err
        });
    });
}

export const updateProfile = (data) => (dispatch) => {

    fetch(`https://voxiot.com/users/-1/?token=3dccc8967bcdd138641575b08f3ad77d`, {
        method: 'POST',
        body: JSON.stringify(data, null, 2),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: UPDATE_PROFILE,
        payload: json
        });
    })
    .catch((err) => {
        console.log(err)
    });
    
}

export const updateArticle = (data) => (dispatch) => {

    fetch(`https://voxiot.com/news/${data.id}/?token=3dccc8967bcdd138641575b08f3ad77d`, {
        method: 'POST',
        body: JSON.stringify(data, null, 2),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: UPDATE_ARTICLE,
        payload: json
        });
    })
    .catch((err) => {
        console.log(err)
    });
    
}

export const deletePost = (ID) => (dispatch) => {

    fetch(`https://voxiot.com/news/${ID}/?token=3dccc8967bcdd138641575b08f3ad77d`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then((json) => {
        dispatch({
        type: DELETE_ARTICLE,
        payload: json
        });
    })
    .catch((err) => {
        console.log(err)
    });
    
}