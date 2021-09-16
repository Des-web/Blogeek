import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ title, date }) => {  
  const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
  const formatedDate = new Date(date).toLocaleDateString('pt-br', options).toString()
  
  return (
    <div className="post-item">
      <h3>{ title }</h3>
      <small>{ formatedDate }</small>
    </div>
  )
}

export default PostItem
