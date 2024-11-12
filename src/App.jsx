import { useState, useEffect } from 'react'
import './App.css'
import { isAbstinence } from './abstinence.cjs'

function App() {
  const [result, setResult] = useState('');

  useEffect(() => {
    const abstinenceStatus = isAbstinence(new Date()) ? 'Sim' : 'Não';
    setResult(abstinenceStatus);
  }, []);

  return (
    <>
    <h1>Hoje é dia de abstinência?</h1>
    <p>{result}</p>
    </>
  )
}

export default App
