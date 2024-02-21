import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'
function StarRating({ numOfStar }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleRating(currentIndex) {
    setRating(currentIndex)
  }

  function handleMouseEnter(currentINdex) {
    setHover(currentINdex)
  }
  function handleMouseLeave(currentINdex) {
    setHover(currentINdex
    )
  }


  return (
    <div className='star-rating'>
      {[...Array(numOfStar)].map((_, index) => {
        index += 1
        return (<FaStar
          key={index}
          className={ index <= (hover || rating) ? 'active' : 'inactive' }
          onClick={() => handleRating(index)}
          onMouseMove={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          size={40}
        />
        )
      })}
    </div>
  )
}

export default StarRating