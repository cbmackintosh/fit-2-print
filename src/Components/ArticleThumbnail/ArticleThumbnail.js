import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleThumbnail.css'
import { compareDates } from '../../helper-functions'

function ArticleThumbnail(props) {

  const path=`/article/${props.article.uri.replace('nyt://article/', '')}`

  return (
    <Link to={path}>
      <div className='article-thumbnail'>
        <div className='thumbnail-text'>
          <h3>{props.article.title}</h3>
          <p>{compareDates(new Date(), new Date(props.article.updated_date))}</p>
        </div>  
        <img src={props.article.multimedia[0].url} alt={props.article.multimedia[0].caption} />
      </div>
    </Link>
  )

}

export default ArticleThumbnail