import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList } from '../actions/allActions'

const Users = () => {

    const state = useSelector(state => state.state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUserList())
    }, [])

    return (
        <div>
            {
             state.data.map( user => {
                 return(
                    <div className="user__card">
                        <img src={user.photo} alt="" />
                        <div className="user__card__inner">
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
                 )
             })   
            }
        </div>
    )
}

export default Users
