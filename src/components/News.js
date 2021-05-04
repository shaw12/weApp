import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../actions/allActions";
import { CgQuote } from 'react-icons/cg'
import { Link, useHistory } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';


const News = () => {
    
    const state = useSelector(state => state.state)
    const dispatch = useDispatch()
    let history = useHistory()

    useEffect(() => {
        !state.data && dispatch(fetchArticle())
    }, [])

    const handleClick = (id) => {
        history.push(`/user/${id}`);
    }

    if(state.isLoading || !state.data){
        return <h1 className="loading">Loading....!</h1>
    }
    else {
        return (
            <div>
                {
                    state.data && state.data.map(post => {
                        return (
                            <div key={post.id} className="card" onClick={() => handleClick(post.author)}>
                                <img src={post.image} alt="" />
                                <div className="news__card">
                                    <h2>{post.title}</h2>
                                    <div className="news__card__inner">
                                        <div className="quote">
                                            <CgQuote />
                                        </div>
                                        <p>
                                            {post.content}
                                        </p>
                                        <span>
                                            {post.creation_date}
                                        </span>
                                    </div>
                                    <h3>{post.author_name}</h3>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="add__bottom">
                    <Link to="/create-post">
                        <AiOutlinePlus />
                    </Link>
                </div>
            </div>
        )
    }
}

export default News
