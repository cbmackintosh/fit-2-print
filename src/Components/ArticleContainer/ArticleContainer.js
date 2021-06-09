import React from 'react'
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail'

function ArticleContainer(props) {

  const stories = props.stories.map((story, index) => {
    return (
      <ArticleThumbnail article={story} viewArticle={props.viewArticle} key={story.uri} isFirst={index === 0 ? true : false}/>
    )
  })

  return (
    <div>
      {stories}
    </div>
  )

}

export default ArticleContainer