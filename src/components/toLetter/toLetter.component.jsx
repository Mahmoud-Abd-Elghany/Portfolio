import React from 'react'
import PropTypes from 'prop-types'
import './toLetter.style.scss'

function ToLetters(props) {
    const wordArray = Array.from(props.children);
    console.log(wordArray)
  return (
    <div className='word'>
      {
      wordArray.map(letter => {
          return <p className='letter'>{letter}</p>
        })
      }
    </div>
  )
}

ToLetters.propTypes = {
    children: PropTypes.string
}

export default ToLetters

