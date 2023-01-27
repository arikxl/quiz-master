import React from 'react';
import styled from 'styled-components';

import QuizSettings from '../components/QuizSettings';


const HomeStyled = styled.main`
    display:flex;
    justify-content:space-around;

    img{
        width:55%;
        align-self:center;
        padding:8px;
    }

    @media (max-width:800px){
        flex-direction: column-reverse;
        align-items: center;

        img{
            width: 85%;
            padding:20px 0 0 0 ;
        }
    }
`;

const HomePage = ({ name, setName, fetchQuestions }) => {
    return (
        <HomeStyled>
            <QuizSettings name={name} setName={setName} fetchQuestions={fetchQuestions } />

            <img src="/quiz.svg" alt="quiz arik alexandrov"/>
        </HomeStyled>
    )
}

export default HomePage