import React from 'react'
import './ArticleThumbnail.css'

function ArticleThumbnail(props) {

  return (
    <div className='article-thumbnail'>
      <h3>{props.article.title}</h3>
      <img src={props.article.multimedia[0].url} alt={props.article.multimedia[0].caption} />
      {/* <p>{props.article.updated_date}</p> */}
    </div>
  )

}

export default ArticleThumbnail