import React from 'react'
import { render } from 'react-dom'
import Canvas from './containers/Canvas'
import { HashRouter, Route } from 'react-router-dom'


//  route path - main site will be rendered on ANY site with '/'
//  route exact path - home site will only be rendered on exact path '/' - main site will still be rendered
//  order of routes here matters


window.onload = () => {
  render(
    <HashRouter>
      <div>
        <Route path="/" component={Canvas} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  )
}
