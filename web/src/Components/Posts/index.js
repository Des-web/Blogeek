import React, { useState, useEffect } from 'react'

import './style.css'

import PostItem from './PostItem'
import api from '../../services/api'

const Posts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    api.get('/api/post')
    .then(res => setPosts(res.data))
  }, [])

  const postItems = 
    <div> {
      posts.map(post => (
        <PostItem 
          key={post.id}
          title={post.title}
          desc={post.content}
        />
      ))}
    </div>
  
  return (
    <>
      <h1>Posts</h1>
      <div className="post-item-container">
        <div className="container__line"></div>
        <ul className="container__items">
          { postItems }
        </ul>
      </div>
    </>
  )
}

export default Posts
