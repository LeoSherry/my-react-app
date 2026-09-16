import React from 'react';
import './App.css';
import SadPuppy from './assets/SadPuppy.avif';
import ConfusedPuppy from './assets/ConfusedPuppy.avif';
import SmartPuppy from './assets/SmartPuppy.jpeg';
import PuppyBirthday from './assets/PuppyBirthday.jpg';

let selectedImg = null;
let message = "";

// 🚀 1. Accept onRestart as a parameter prop
function EndScreen({ score, onRestart }) {

    if (score <= 3) {
        message = `${score} / 10, There is always next time`;
        selectedImg = SadPuppy;
    } else if (score <= 6) {
        message = `${score} / 10, I guess it could have been worse`;
        selectedImg = ConfusedPuppy;
    } else if (score <= 9) {
        message = `${score} / 10, Fantastic effort`;
        selectedImg = SmartPuppy;
    } else {
        message = `${score} / 10, Perfect Score, well done`;
        selectedImg = PuppyBirthday;
    }

    return (
        <div id="center" style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
            <div>
                <h1>Congratulations!</h1>
                <p style={{ fontSize: '24px' }}>{message}</p>
                <div>
                    <img 
                        src={selectedImg}
                        alt='Quiz Result Evaluation'
                        style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                    />
                </div>
                
                {/* 🚀 2. A clean, single button that triggers the parent's reset logic */}
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '30px' }}>
                    <button className='giantStartButton' onClick={onRestart}>
                        Play Again 🔄
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EndScreen;
