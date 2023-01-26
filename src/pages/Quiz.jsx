import React, { useEffect } from 'react';
import styled from 'styled-components';


const Quiz = ({ score, setScore, questions, setQuestions, name }) => {
  
  useEffect(() => {
    console.log('questions:', questions)
  }, [questions]);



  return (
    <div>Quiz❤️❤️❤️❤️❤️❤️❤️❤️</div>
  )
}

export default Quiz