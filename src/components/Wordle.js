import React, { useEffect } from "react"
import useWordle from "../hooks/useWordle"
import Grid from "./Grid"
import Keypad from "./Keypad"

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad />
    </div>
  )
}
