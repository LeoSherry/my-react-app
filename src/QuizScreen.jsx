import React, { useState } from 'react';
// Gets Questions from other file
import { quizQuestions } from './QuizData'
// Gets the Endscreen
import EndScreen from './FinalScreen'

function shuffleArray(array) {
    // Creates a copy of the array inorder to leave the original list intact.
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled
}

function QuizScreener() {

    // Lock the answers after submitting
    const [hasSubmitted, setHasSubmitted] = useState(false);

    // Holds and updates what you have selected
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Keeps track of what question you are looking at
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // This runs our shuffle function once when the screen component loads and limits to only 10 questions
    const [questionsList, setQuestionList] = useState(() => shuffleArray(quizQuestions).slice(0, 10));

    // Keeps track of your score
    const [score, setScore] = useState(0)

    //Tracks if the quiz is finnished
    const [quizFinnished, setQuizFinnished] = useState(false);

    // This function runs when the submit button is hit.
    const handleSubmit = () => {

         if (hasSubmitted === false) {

            // Make sure user has selected something
            if (!selectedAnswer) {
                alert('Please select an answer');
                return;
            }

            // Lock it down instantly for both correct and incorrect options
            setHasSubmitted(true);

            if (selectedAnswer === questionsList[currentQuestion].correct) {
                alert('Correct, click next to continue');
                setScore(score + 1)
            } else {
                alert(`Incorrect, correct answer was ${questionsList[currentQuestion].correct}`);
            }
        } else {
            alert('You have already submitted, press next to continue');
        }
    }

    // This function handles what happens when you hit the next button
    const handleNext = () => {

        if (currentQuestion < questionsList.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setHasSubmitted(false)
        } else {
            setQuizFinnished(true);
        }

    };

    // This function wipes all the previous data
    const handleRestart = () => {
        setQuestionList(shuffleArray(quizQuestions).slice(0, 10));
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setHasSubmitted(false);
        setScore(0);
        setQuizFinnished(false)
    }

    if (quizFinnished) {
        return <EndScreen score={score} onRestart={handleRestart}/>
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', padding: '40px' }}>
            {/*Title Changes depending on how may questions there have been*/}
            <h1>Question {currentQuestion + 1}</h1>
            <p style={{ fontSize: '20px' }}>{questionsList[currentQuestion].question}</p>

            <div className='quiz-grid'>
            {questionsList[currentQuestion].answers.map((answerText, index) => {
                
                // This keeps your 4 exact colors mapped to slots 1, 2, 3, and 4 in order!
                const gridColors = ['#2ec4b6', '#e63946', '#4ea8de', '#f4a261'];
                
                return (
                    <button 
                        key={index}
                        disabled={hasSubmitted}
                        onClick={() => setSelectedAnswer(answerText)} 
                        style={{ 
                            backgroundColor: gridColors[index] || '#1d3557', 
                            border: selectedAnswer === answerText ? '4px solid white' : 'none',
                            opacity: hasSubmitted && selectedAnswer !== answerText ? 0.4 : 1
                        }}
                    >
                        {answerText}
                    </button>
                );
            })}
        </div>

        <div style={{ display: 'flex', width: '100%', maxWidth: '650px', marginTop: '35px', fontFamily: 'sans-serif' }}>
            
            <button className='submit' onClick={handleSubmit} style={{ backgroundColor: '#1d3557' }}>Submit</button>

            <button className='next' style={{ marginLeft: 'auto', backgroundColor: '#1d3557' }} onClick={handleNext}>Next</button>

        </div>
    </div>
)
};

export default QuizScreener;
