import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      topStories: []
    }
  }

  render() {
    return (
      <h1>Fit-2-Print</h1>
    )
  }
}
