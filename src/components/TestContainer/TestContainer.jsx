import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import "./TestContainer.css";

const TestContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo, onInputChange, startAgain}) => {

    return(

        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer
                                timeRemaining={timeRemaining} 
                                words={words} 
                                characters={characters} 
                                wpm={wpm}
                                selectedParagraph={selectedParagraph}
                                timerStarted={timerStarted} 
                                testInfo={testInfo}
                                onInputChange={onInputChange}
                                
                        />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}   />
                    </div>
                 )
            }

        </div>
    );    
}

export default TestContainer;
