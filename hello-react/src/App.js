import React, {Component} from 'react';
import MyComponent from './components/MyComponent'
import MyClassComponent from './components/MyClassComponent'
import Counter from './components/Counter'
import Say from './components/Say'
import EventPracticeClass from './components/EventPracticeClass'
import EventPractice from './components/EventPractice'
import ValidationSample from './components/ValidationSample'
import ScrollBox from './components/ScrollBox'
import IterationSample from './components/IterationSample'
import LifeCycleSample from './components/LIfeCycleSample'
import ErrorBoundary from './components/ErrorBoundary'

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>랜덤색상</button>
          <ErrorBoundary>
            <LifeCycleSample color={this.state.color}/>
          </ErrorBoundary>
        </div>
        <IterationSample />
        <br/>
        <br/>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>to bottom</button>
        <br/>
        <br/>
        <ValidationSample/>
        <br/>
        <EventPractice/>
        <br/>
        <EventPracticeClass/>
        <br/>
        <MyComponent name="React" favoriteNumber={1}>React</MyComponent>
        <br/>
        <MyClassComponent name="class" favoriteNumber={333}>test</MyClassComponent>
        <br/>
        <Counter/>
        <br/>
        <Say/>
      </div>
    )
  }
}

export default App;