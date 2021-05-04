import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchMyDetail, fetchUserDetail, updateProfile } from '../actions/allActions'
import {IoTrashSharp} from 'react-icons/io5'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';


const Profile = () => {

    let state = useSelector(state => state.state)
    const dispatch = useDispatch()

    let history = useHistory()

    const [user, setUser] = useState({
        id: state.me.id,
        image: state.me.photo,
        name: state.me.name,
        email: state.me.email
    })    

    console.log(user)
    
    console.log(state)
    const handleChange = e => {
        var { name, value } = e.target;
        
        setUser({
            ...user,
            [name]: value
        })
    }   

    const handleImageChange = (e) => {
        if(e.target.files && e.target.files[0]){
            user({
                ...user,
                image: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(updateProfile(user))

        if(!state.isLoading && state.message && !state.error){

            toast.success("Updated Successfully!" , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        else if(!state.isLoading && !state.message && state.error){
            toast.error('Something went wrong!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    const handleDelete = (id) => {
        dispatch(deletePost(id))
        toast.success("Delete Successfull!" , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleUpdateArticle = (id) => {
        history.push(`/update/${id}`)
    }


    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Photo</label>
                    { user.image ?
                        <img 
                        src={ user.image }
                        alt="dd"
                        className="avtar"
                        
                    /> 
                    :
                        <input 
                        type="file" 
                        name="image" 
                        accept="image/*"  
                        onChange={handleImageChange}  
                        accept="image/*" 
                    required/>}
                </div>

                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} required />
                </div>

                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                        required 
                        />
                </div>

                <button type="submit" className="btn btn-submit">
                    Save Data
                </button>

            </form>

            <div className="my__posts">
                <h2>My Articles</h2>
                {
                    state.me && state.me.news.map((post) => {
                        return (
                            <div key={post.id} className="user__card my__posts__post my_articles" onClick={() => handleUpdateArticle(post.id)}>
                                <img src={post.image} alt="" />
                                <div className="user__card__inner">
                                    <div className="flex">
                                        <h4>{post.title}</h4>
                                        <div className="trash">
                                        <IoTrashSharp onClick={() => handleDelete(post.id)} />
                                        </div>
                                    </div>
                                    <span>{post.creation_date} </span>
                                </div>
                            </div>
                        )
                    })
                }

                <Link to="/create-post">
                    <button className="btn btn-create">Create a new article</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Profile
