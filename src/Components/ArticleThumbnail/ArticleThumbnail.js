import React from 'react'
import './ArticleThumbnail.css'

function ArticleThumbnail(props) {

  return (
    <div className='article-thumbnail' onClick={() => props.viewArticle(props.article)}>
      <div className='thumbnail-text'>
        <h3>{props.article.title}</h3>
        <p>{props.article.updated_date}</p>
      </div>  
      <img src={props.article.multimedia[0].url} alt={props.article.multimedia[0].caption} />
    </div>
  )

}

export default ArticleThumbnail