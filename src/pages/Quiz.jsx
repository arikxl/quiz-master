import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../components/Loader';

const QuizStyled = styled.section`

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
      <span>Welcome {name}</span>
      {
        questions
          ? (

          )
            : (
              <Loader />
            )
      }
    </QuizStyled>
  )
}

export default Quiz