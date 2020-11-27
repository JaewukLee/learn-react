import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      fixedNumber: 222
    }
  }

  render() {
    const {number, fixedNumber} = this.state
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={()=>{
            this.setState(prevState => ({
              number: prevState.number + 1
            }),
            () => {
              console.log('setState called first')
            })
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              }
            },
            () => {
              console.log('setState called second')
            })
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Counter