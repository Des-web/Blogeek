import React, { useState, useEffect } from 'react'

import './style.css'

import PostItem from '../../Components/PostItem'
import api from '../../services/api'
import NavBar from '../../Components/NavBar'

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
          date={post.created_at}
        />
      ))}
    </div>
  
  return (
    <>
      <NavBar />
      <div className="container">
        { postItems }
      </div>
    </>
  )
}

export default Posts
