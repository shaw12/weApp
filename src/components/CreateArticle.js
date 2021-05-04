import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { uploadArticle } from '../actions/allActions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateArticle = () => {

    const mainState = useSelector(state => state.state)
    const dispatch = useDispatch()

    const initialValue = {
        id: uuidv4(),
        image: '',
        title: '',
        content: ''
    }

    const [state, setState] = useState(initialValue)

    const handleChange = e => {
        var { name, value } = e.target;
        
        setState({
            ...state,
            [name]: value
        })
    }   

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(uploadArticle(state))

        if(!mainState.isLoading && mainState.data && !mainState.error){
            
            setState(initialValue)

            toast.success("Created Successfull!" , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        else if(!mainState.isLoading && !mainState.data && mainState.error){
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
                    <input 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        value={state.image} 
                        onChange={handleChange} 
                        required
                    />
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

export default CreateArticle
