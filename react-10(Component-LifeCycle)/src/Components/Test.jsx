import React, { Component } from 'react'

class Test extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Susan",
         count: 0
      }
    }

    componentDidMount() {
      console.log("componentDidMount")
    }

    componentDidUpdate(prevProps , prevState){
      if(prevState.count !== this.state.count){
        console.log("componentDidUpdate")
      }
    }

    componentWillUnmount(){
      console.log("componentWillUnmount")
    }

    changeName = () => {
        this.setState(prev => {
            return {
                name: prev.name + (Math.floor(Math.random() * 10) + 1)
            }
        })
    }
    
    changeCount = () => {
        this.setState(prev => {
            return{
                count: prev.count + 1
            }
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>ChangeName</button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.changeCount()}>ChangeCount</button>
      </div>
    )
  }
}

export default Test