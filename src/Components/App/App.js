import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { getStories } from '../../API-Calls'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
    }
  }

  componentDidMount() {
    getStories('home')
    .then(data => this.setState({ stories: data.results }))
  }

  changeCategory = (cat) => {
    getStories(cat)
    .then(data => this.setState({ stories: data.results }))
  }

  render() {
    console.log(this.state)
    return (
      <main className="App">
        <Link to='/'><h1 className='site-header'>📰 Fit-2-Print</h1></Link>
        <Switch>
          <Route 
            exact path='/' 
            render={() => <ArticleContainer stories={this.state.stories} /> } 
          />
          <Route
            path='/categories'
            render={() => <CategoryMenu changeCategory={this.changeCategory} /> }
          />
          <Route 
            path='/article/:id' 
            render={({ match }) => <ArticleDetails article={this.state.stories.find(story => story.uri === `nyt://article/${match.params.id}`)} /> } 
          />
        </Switch>
        <nav className='nav-bar'>
          <NavLink to='/'><button className='nav-button' onClick={() => this.changeCategory('home')}>TOP STORIES</button></NavLink>
          <NavLink to='/categories'><button className='nav-button'>CATEGORIES</button></NavLink>
        </nav>
      </main>
    )       
  }
  
}
