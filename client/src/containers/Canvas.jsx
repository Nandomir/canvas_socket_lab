import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

class Canvas extends React.Component {

  constructor(props){
    super(props)
    this.canvas = null
    this.onMouseClick = this.onMouseClick.bind(this)

    this.socket = io("http://localhost:3000")
    this.socket.on('draw', this.drawSomething.bind(this))
  }

  componentDidMount(){
    this.canvas = document.querySelector('canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.onclick = this.onMouseClick
  }

  onMouseClick(event){
    let rect = this.canvas.getBoundingClientRect()
    
    let coords = {
      x: event.clientX - rect.left,
      y:event.clientY - rect.top
    }

    this.drawSomething(coords)
    this.socket.emit('draw', coords)
  } 

  drawSomething(coords){
    this.context.fillStyle = 'hotpink'
    this.context.fillRect(coords.x, coords.y, 20, 20)
    this.context.stroke()
  }



  render() {
    return (
      <div>
        <h4>Canvas</h4>
        <h1>Welcome to our great canvas</h1>
        <canvas width='600' height='500'></canvas>
        <input type='color'/>
      </div>
      )
  }

}


export default Canvas