import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUserDetail } from '../actions/allActions'

const User = () => {

    const state = useSelector(state => state.state)
    const dispatch = useDispatch()

    let {id} = useParams()

    useEffect(() => {
        dispatch(fetchUserDetail(`${id}`))
    }, [])

    if(state.user){

    return (
        <div>
            { 
                <div className="profile__card">
                <img src={state.user.photo} />
                <h3>{state.user.name}</h3>
                <h4>{state.user.email}</h4>
                
                <p>Registered on:</p>
                <p>{state.user.registration_date}</p>
            </div>
            }
            <div className="my__posts">
                <h2>Posts</h2>
                {
                    state.user.news && state.user.news.map((post) => {
                        return (
                            <div className="user__card my__posts__post">
                                <img src={post.image} alt="" />
                                <div className="user__card__inner">
                                    <h4>{post.title}</h4>
                                    <div>{post.content}</div>
                                    <span>{post.creation_date} </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}else{
    return <h1>Loading</h1>
}
}

export default User
