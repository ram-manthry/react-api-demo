import { useState } from 'react'
import { getFact } from '../api/factFinderApi'

const FactFinder = () => {
  const [fact, setFact] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const num = event.target.elements.number.value;

    const fact = await getFact(num);
    setFact(fact.text)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="number" />
        <button type="submit">Get Fact</button>
      </form>
      <p>{fact}</p>
    </div>
  )
}

export default FactFinder