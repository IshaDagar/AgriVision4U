import React from 'react'
import './questions.scss'

export default function Questions(props) {
  return (
    <div>
      <div className='question'>
        <p><span>{props.number}.</span>  Courses Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className='options'>
          <div>
            <input type="radio" value="optionA" />
            <label htmlFor="optionA">Option A</label>
          </div>
          <div>
            <input type="radio" value="optionB" />
            <label htmlFor="optionB">Option B</label>
          </div>
          <div>
            <input type="radio" value="optionC" />
            <label htmlFor="optionC">Option C</label>
          </div>
          <div>
            <input type="radio" value="optionD" />
            <label htmlFor="optionD">Option D</label>
          </div>
        </div>
        <div className='buttons'>
          <button style={{backgroundColor: "#13AE7E"}}>Answer and solution</button>
          <button style={{backgroundColor: "#5F5F5F"}}>Join the discussion</button>
          <button style={{backgroundColor: "#3362AB"}}>Save for later</button>
        </div>
      </div>
    </div>
  )
}
