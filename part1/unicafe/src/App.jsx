import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <p>{text}: {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleFeedbackClicks = (func, val) => {
    func(val) 
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => handleFeedbackClicks(setGood, good + 1)} text="good"/>
      <Button onClick={() => handleFeedbackClicks(setNeutral, neutral + 1)} text="neutral"/>
      <Button onClick={() => handleFeedbackClicks(setBad, bad + 1)} text="bad"/>
      <h1>Statistics</h1>
      { total > 0 ?
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{(good - bad) / total}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{good * 100 / total + "%"}</td>
            </tr>
          </tbody>
        </table> : 
        <p>No Feedback Given</p>
      }
    </div>
  )
}

export default App