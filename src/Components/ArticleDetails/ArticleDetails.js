import React from 'react'
import './ArticleDetails.css'

function ArticleDetails(props) {
  return (
    <div className='article-details'>
      <figure>
        <img className="article-image" src={props.article.multimedia[0].url} alt={props.article.multimedia[0].caption} />
        <figcaption>{props.article.multimedia[0].caption}</figcaption>
      </figure>
      <h2>{props.article.title}</h2>
      <p>{props.article.byline}</p>
      <p>{props.article.abstract}</p>
      <a href={props.article.url}><button>Full Story</button></a>
    </div>
  )
}

export default ArticleDetails