import React from 'react'
import './ArticleDetails.css'
import { compareDates } from '../../helper-functions'
import { Link } from 'react-router-dom'

function ArticleDetails(props) {

  const compileTags = () => {
    return props.article.des_facet.map(tag => {
      if (tag.length < 20) {
        return (
          <p key={tag} className='article-tag'>{tag} | </p>
        )
      } else {
        return null
      }
    })
  }

  if (props.article) {
    return (
      <div className='article-details'>
        <figure>
          <Link to='/' className='return-button'><button>⬅</button></Link>
          {props.article.multimedia && <img className="article-image" src={props.article.multimedia[0].url} alt={props.article.multimedia[0].caption} />}
          {props.article.multimedia && <figcaption>{props.article.multimedia[0].caption}</figcaption>}
        </figure>
        <div className='tag-container'>
          {compileTags()}
        </div>
        <h2>{props.article.title}</h2>
        <p>{props.article.byline.toUpperCase()}</p>
        <p>{compareDates(new Date(), new Date(props.article.updated_date))}</p>
        <p>{props.article.abstract}</p>
        <a href={props.article.url}><button>Full Story</button></a>
      </div>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default ArticleDetails