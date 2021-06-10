import React from 'react'
import { Link } from 'react-router-dom'
import { newsCategories } from '../../helper-functions'
import './CategoryMenu.css'

function CategoryMenu(props) {

  const handleChange = (e) => {
    props.changeCategory(e.target.value)
  }

  const categoryButtons = newsCategories.map(category => {
    return (
      <Link to='/' key={category.code}>
        <button value={category.code} onClick={e => handleChange(e)}>
          {category.proper}
        </button>
      </Link>
    )
  })

  return (
    <div>
      <div className='cat-header'>
        <Link to='/' className='back-button'><button>⬅</button></Link>
        <h1>CATEGORIES</h1>
      </div>
      <div className='category-buttons'>
        {categoryButtons}
      </div>
    </div>
  )

}

export default CategoryMenu