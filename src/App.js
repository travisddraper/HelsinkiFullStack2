import React, { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0) {
    //CONDITIONAL RENDERING
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  //old code reference
  // we did not do the following:
  // const handleLeftClick = () => {
  //   clicks.left++
  //   setClicks(clicks)
  //}
  //As IT IS FORBIDDEN IN REACT TO MUTATE STATE DIRECTLY!! It can result in
  //unexpected side effects. Changing state always has to be done by setting the
  //state to a new object.

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1);
  }
  //Don't use .push() method, as this will mutate the original array, and as stated above
  //WE DO NOT DIRECTLY MUTATE THE STATE.

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
