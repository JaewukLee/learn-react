import React, {useState} from 'react'

import Info from './Info'
import Counter from './Counter'
import Average from './Average'

const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>{visible ? '숨기기' : '보이기'}</button>
      <hr />
      {visible && <Info />}
      <br/>
      <Counter />
      <br/>
      <Average />
    </div>
  );
}

export default App
