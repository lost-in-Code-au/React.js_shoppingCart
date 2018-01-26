import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// TODO: implament all hashed out code
import BeerData from './data/BeerData'
// import CartAPI from './utils/CartAPI'
// import FluxCartApp from './components/FluxCartApp.react.js'

// Load Mock Data into localStorage
BeerData.init()

// Load Mock API Call
// CartAPI.getProductData()

// Render FluxCartApp Controller View
ReactDOM.render(
  <h1>hello</h1>,
  document.body
)
