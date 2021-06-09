import React from 'react'
import { Link } from 'react-router-dom'

function CategoryMenu(props) {

  const handleChange = (e) => {
    props.changeCategory(e.target.value)
  }

  return (
    <div>
      <Link to='/'><button value='arts' onClick={e => handleChange(e)}>Arts</button></Link>
      <Link to='/'><button value='automobiles' onClick={e => handleChange(e)}>Automobiles</button></Link>
      <Link to='/'><button value='books' onClick={e => handleChange(e)}>Books</button></Link>
      <Link to='/'><button value='business' onClick={e => handleChange(e)}>Business</button></Link>
      <Link to='/'><button value='fashion' onClick={e => handleChange(e)}>Fashion</button></Link>
      <Link to='/'><button value='food' onClick={e => handleChange(e)}>Food</button></Link>
      <Link to='/'><button value='health' onClick={e => handleChange(e)}>Health</button></Link>
      <Link to='/'><button value='insider' onClick={e => handleChange(e)}>Insider</button></Link>
      <Link to='/'><button value='magazine' onClick={e => handleChange(e)}>Magazine</button></Link>
      <Link to='/'><button value='movies' onClick={e => handleChange(e)}>Movies</button></Link>
      <Link to='/'><button value='nyregion' onClick={e => handleChange(e)}>NY Region</button></Link>
      <Link to='/'><button value='obituaries' onClick={e => handleChange(e)}>Obituaries</button></Link>
      <Link to='/'><button value='opinion' onClick={e => handleChange(e)}>Opinion</button></Link>
      <Link to='/'><button value='politics' onClick={e => handleChange(e)}>Politics</button></Link>
      <Link to='/'><button value='realestate' onClick={e => handleChange(e)}>Real Estate</button></Link>
      <Link to='/'><button value='science' onClick={e => handleChange(e)}>Science</button></Link>
      <Link to='/'><button value='sports' onClick={e => handleChange(e)}>Sports</button></Link>
      <Link to='/'><button value='sundayreview' onClick={e => handleChange(e)}>Sunday Review</button></Link>
      <Link to='/'><button value='technology' onClick={e => handleChange(e)}>Technology</button></Link>
      <Link to='/'><button value='theater' onClick={e => handleChange(e)}>Theater</button></Link>
      <Link to='/'><button value='t-magazine' onClick={e => handleChange(e)}>T-Magazine</button></Link>
      <Link to='/'><button value='travel' onClick={e => handleChange(e)}>Travel</button></Link>
      <Link to='/'><button value='upshot' onClick={e => handleChange(e)}>Upshot</button></Link>
      <Link to='/'><button value='us' onClick={e => handleChange(e)}>U.S.</button></Link>
      <Link to='/'><button value='world' onClick={e => handleChange(e)}>World</button></Link>
    </div>
  )

}

export default CategoryMenu