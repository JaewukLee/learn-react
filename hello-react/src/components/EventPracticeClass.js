import React, {Component} from 'react'

class EventPracticeClass extends Component {
  state = {
    message: '',
    username: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message)
    this.setState({
      message: '',
      username: ''
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return <div>
      <h1>Event Practice by Class</h1>
      <input
        type="text"
        name="username"
        placeholder="input name"
        value={this.state.username}
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="input anything"
        value={this.state.message}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
      <button onClick={this.handleClick}>test</button>
    </div>
  }
}

export default EventPracticeClass