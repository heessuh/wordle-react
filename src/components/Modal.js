import React from "react"

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1> You win! </h1>
          <p className="solution"> Solution: {solution} </p>
          <p> You got the answer in {turn} guesse(s). </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1> Sorry, Try again! </h1>
          <p className="solution"> Solution: {solution} </p>
        </div>
      )}
    </div>
  )
}
