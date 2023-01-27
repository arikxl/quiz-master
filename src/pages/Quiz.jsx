import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Questions from '../components/Questions';

const QuizStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:"Poppins", sans-serif;
  
  .quiz-headline{
    font-weight:bold;
    font-size:25px;
    border: 1px solid black;
    box-shadow: 4px 4px 2px black;
    padding: 5px 10px;
  }

  .quiz-info{
    width:90%;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    margin: 10px;
  }

`;


const Quiz = ({ score, setScore, questions, setQuestions, name }) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);


  useEffect(() => {
    setOptions(
      questions &&
      handleShuffle([
        questions[currQues]?.correct_answer,
        questions[currQues]?.incorrect_answers,
      ])
    );
  }, [currQues, questions]);


  const handleShuffle = (distractions) => {

    return distractions.flat().sort(() => Math.random() - 0.5);
  }


  return (
    <QuizStyled>
      <span className="quiz-headline">Welcome {name}</span>
      {!questions
        ? (
          <Loader />
        )
        : (
          <>
            <div className='quiz-info'>
              <span>{questions[currQues]?.category}</span>
              <span>Score: {score}</span>
            </div >
            <Questions options={options} currQues={currQues} questions={questions}
              setCurrQues={setCurrQues} score={score} setScore={setScore}
              correct={questions[currQues]?.correct_answer}
            />
          </>
        )}
    </QuizStyled>
  )
}

export default Quiz