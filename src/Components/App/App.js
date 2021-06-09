import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import CategoryMenu from '../CategoryMenu/CategoryMenu'
import { getStories } from '../../API-Calls'
import { Switch, Route, NavLink } from 'react-router-dom'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      selectedCategory: 'home'
    }
  }

  componentDidMount() {
    getStories('home')
    .then(data => this.setState({ stories: data.results }))
  }

  changeCategory = (cat) => {
    getStories(cat)
    .then(data => this.setState({ stories: data.results, selectedCategory: cat }))
  }

  render() {
        
    return (
      <main className="App">
        <Switch>
          <Route 
            exact path='/' 
            render={() => <ArticleContainer stories={this.state.stories} category={this.state.selectedCategory} /> } 
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
