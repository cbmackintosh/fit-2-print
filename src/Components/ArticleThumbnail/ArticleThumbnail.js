import React from 'react'

function ArticleThumbnail(props) {

  return (
    <div className='article-thumbnail'>
      <h2>{props.article.title}</h2>
    </div>
  )

}

export default ArticleThumbnail