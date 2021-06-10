import React from 'react'
import ArticleThumbnail from '../ArticleThumbnail/ArticleThumbnail'
import './ArticleContainer.css'
import { newsCategories } from '../../helper-functions'

function ArticleContainer(props) {

  const stories = props.stories.map((story, index) => {
    return (
      <ArticleThumbnail article={story} viewArticle={props.viewArticle} key={story.uri} isFirst={index === 0 ? true : false}/>
    )
  })

  return (
    <div>
      <div className='site-header'>
        <h1>{props.category === 'home' ? 'TOP STORIES' : newsCategories.find(category => category.code === props.category).proper}</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {stories}
    </div>
  )

}

export default ArticleContainer