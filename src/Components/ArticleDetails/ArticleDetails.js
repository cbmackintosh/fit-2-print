import React from 'react'

function ArticleDetails(props) {
  return (
    <div className='article-details'>
      <img src={props.article.multimedia[0].url} />
      <h2>{props.article.title}</h2>
      <p>{props.article.byline}</p>
      <p>{props.article.abstract}</p>
      <a href={props.article.url}><button>Full Story</button></a>
    </div>
  )
}

export default ArticleDetails