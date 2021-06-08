import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import ArticleDetails from '../ArticleDetails/ArticleDetails'
import { getStories } from '../../API-Calls'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      selectedArticle: {}
    }
  }

  componentDidMount() {
    getStories('home')
    .then(data => this.setState({ stories: data.results }))
  }

  viewArticle = (article) => {
    this.setState({ selectedArticle: article })
  }

  render() {
    
    if (!Object.keys(this.state.selectedArticle).length) {
      return (
        <main className='App'>
          <h1>📰 Fit-2-Print</h1>
          <ArticleContainer stories={this.state.stories} viewArticle={this.viewArticle} />
        </main>
      )
    } else {
      return (
        <main className='App'>
          <h1>📰 Fit-2-Print</h1>
          <ArticleDetails article={this.state.selectedArticle} />
        </main>
      )
    }
    
    
  }
}
