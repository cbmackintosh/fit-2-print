import React, { Component } from 'react'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import { getStories } from '../../API-Calls'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    getStories('home')
    .then(data => this.setState({ stories: data.results }))
  }

  render() {
    console.log(this.state)
    return (
      <main className='App'>
        <h1>Fit-2-Print</h1>
        <ArticleContainer stories={this.state.stories} />
      </main>
    )
  }
}
