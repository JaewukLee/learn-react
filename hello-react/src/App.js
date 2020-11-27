import React, {Component} from 'react';
import MyComponent from './MyComponent'
import MyClassComponent from './MyClassComponent'
import Counter from './Counter'
import Say from './Say'
import EventPracticeClass from './EventPracticeClass'
import EventPractice from './EventPractice'
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox'

class App extends Component {
  render() {
    return (
      <div>
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