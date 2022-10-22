import { useState } from "react"

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState(["hello", "ninja"]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    console.log("formatting the guess... ", currentGuess)
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {}

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    console.log("key pressed - ", key)

    if (key === "Enter") {
      //turn is less than 5
      if (turn > 5) {
        console.log("You used all your turns.")
        return
      }
      //less than 5 characters
      if (currentGuess.length < 5) {
        console.log("Your guess must have 5 characters.")
        return
      }
      //have already used this word
      if (history.includes(currentGuess)) {
        console.log("You have tried that guess already.")
        return
      }
      //if all above conditions are ok finally submit the guess
      formatGuess()
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle
