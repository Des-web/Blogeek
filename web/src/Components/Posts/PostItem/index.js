import React from 'react'

const PostItem = ({ title, desc }) => {  
  return (
    <li className="container__item">
        <div className="container__top">
            <div className="container__circle"></div>

            <div className="container__title">
                { title }
            </div>
        </div>

        <div className="container__desc">
          { desc }
        </div>
    </li>
  )
}

export default PostItem
