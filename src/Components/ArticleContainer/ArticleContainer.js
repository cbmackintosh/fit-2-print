import React from 'react'
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail'

function ArticleContainer(props) {

  const stories = props.stories.map(story => {
    return (
      <ArticleThumbnail article={story} viewArticle={props.viewArticle} key={story.uri} />
    )
  })

  return (
    <div>
      {stories}
    </div>
  )

}

export default ArticleContainer