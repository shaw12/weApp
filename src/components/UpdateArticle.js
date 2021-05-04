import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {  updateArticle } from '../actions/allActions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

function UpdateArticle() {

    let mainState = useSelector(state => state.state)
    const dispatch = useDispatch()
    let {id} = useParams()

    let arrData = mainState.me.news.filter((i) => i.id == id);

    const [state, setState] = useState({
        id: arrData[0].id,
        image: arrData[0].image,
        title: arrData[0].title,
        content: arrData[0].content
    })

    const handleChange = e => {
        var { name, value } = e.target;
        
        setState({
            ...state,
            [name]: value
        })
    }   

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(updateArticle(state))

        if(!mainState.isLoading && mainState.message && !mainState.error){
    
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
        else if(!mainState.isLoading && mainState.error){
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

    const handleImageChange = (e) => {
        if(e.target.files && e.target.files[0]){
            state({
                ...state,
                image: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    console.log("object", state)
    console.log(mainState)        

    return (
        <div>
            <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <form onSubmit={handleSubmit}> 

                <div>
                    <label>Image</label>
                    { state.image ?
                        <img 
                        src={state.image}
                    
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
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={state.title} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div>
                    <label>Content</label>
                    <textarea 
                        type="text" 
                        name="content" 
                        rows="5" cols="50" 
                        value={state.content} 
                        onChange={handleChange} 
                        required 
                    />
                </div> 

                <button type="submit" className="btn btn-submit">
                    Save data
                </button>

            </form>
        
        </div>
    )
}

export default UpdateArticle
