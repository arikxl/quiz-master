import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ResultStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  text-align: center;
   span{
        font-size:8vw;
    }
`;

const Results = ({ name, score }) => {

  const navigate = useNavigate()
  
  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  },[name, navigate])


  return (
    <ResultStyled>
      <span>Final Score: {score}</span>
      <Button variant='contained' href='/'
        color='secondary' size='large' style={{ alignSelf: 'center', marginTop: 20 }}
      >
        Go to Home Page
      </Button>
    </ResultStyled>
  )
}

export default Results