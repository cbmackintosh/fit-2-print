import React, { Component } from 'react'
import { getStories } from '../../API-Calls'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      topStories: []
    }
  }

  componentDidMount() {
    getStories('home')
    .then(data => this.setState({ topStories: data.results }))
  }

  render() {
    console.log(this.state)
    return (
      <h1>Fit-2-Print</h1>
    )
  }
}
