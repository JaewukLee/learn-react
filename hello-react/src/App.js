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

class App extends Component {
  render() {
    return (
      <div>
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