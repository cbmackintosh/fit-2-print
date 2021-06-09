import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import { getStories } from '../../API-Calls'
import { Switch, Route } from 'react-router-dom'
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

  render() {
    console.log(this.state)
    return (
      <main className="App">
        <h1>📰 Fit-2-Print</h1>
        <Switch>
          <Route 
            exact path='/' 
            render={() => <ArticleContainer stories={this.state.stories} /> } 
          />
          <Route 
            path='/article/:id' 
            render={({ match }) => <ArticleDetails article={this.state.stories.find(story => story.uri === `nyt://article/${match.params.id}`)} /> } 
          />
        </Switch>
      </main>
    )       
  }
  
}
