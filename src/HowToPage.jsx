import React from 'react';
import QuizScreen from './QuizScreen'

function HowTo({ onStart }) {
    return (
        <div>
            <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '40px', padding: '0 20px' }}>
                <h1>How To Play</h1>
                
                <h3 style={{ marginTop: '25px', color: '#1d3557' }}>Scoring</h3>
                <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                    You will be asked 10 random questions and at the end will be graded out of 10.
                </p>
                
                <h3 style={{ marginTop: '25px', color: '#1d3557' }}>Choices</h3>
                <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 15px auto' }}>
                    Throughout this quiz you will have either four multiple choice options or a true or false question. 
                    Once you have selected one, it will be highlighted and you can still change your choice.
                </p>
                <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 15px auto' }}>
                    Once you are happy with your answer, press submit and an alert will pop up on your screen letting you 
                    know whether or not you got the answer correct.
                </p>
                <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 25px auto' }}>
                    When you are finally ready to move on, press next and it will take you to the next question.
                </p>
                
                <h2 style={{ marginTop: '30px', color: '#2ec4b6' }}>Good Luck!</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '40px' }}>
                <button className='giantStartButton' onClick={onStart}>Start</button>
            </div>
        </div>
    )
}

export default HowTo;