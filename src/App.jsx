import React, { useState } from 'react'
import './App.css'
import QuizScreener from './QuizScreen'
import HowToPage from './HowToPage'


function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div id="center">
      {currentStep === 0 && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'sans-serif' }}>
            <h1>Welcome to the Quiz!</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button className='giantStartButton' onClick={() => setCurrentStep(1)}>
              Continue
            </button>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <HowToPage onStart={() => setCurrentStep(2)} />
      )}

      {currentStep === 2 && (
        <QuizScreener />
      )}
    </div>
  )
}
export default App;