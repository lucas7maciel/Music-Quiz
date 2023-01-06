import { useState } from "react"
import "./testCard.css"

const TestCard = () => {
  const [flip, setFlip] = useState(false)

  return (
    <>
    <div className="front">
      <h1>Lado da frente</h1>
    </div>
    <div className="back">
      <h1>Lado de trás</h1>
    </div>
    </>
  )
}

export default TestCard
