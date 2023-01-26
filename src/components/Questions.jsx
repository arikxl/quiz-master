import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';


const QuestionStyled = styled.section`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SingleQuestStyled = styled.div`
    width: 95%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    border :5px #61dafb solid;
    padding: 20px;
    margin-top:10px;

    .btns-panel{
        display: flex;
        width:100%;
        justify-content: space-around;
    }
`;
const OptionsStyled = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    flex:1;
    align-items: center;
    justify-content:space-around;
    margin:10px;

    .singleOption{
        width:46%;
        height:50px;
        padding: 15px 20px;
        margin: 10px;
        box-shadow: 0 0 2px black;
    }

    @media (max-width:600px){
        .singleOption{
            width:100%;
        }
    }

    .select, .wrong{
        background-color:rgb(7,207,0);
        color: white;
        box-shadow: 0 0 1px black;
    }
    
    .wrong{
        background-color: rgb(233, 0, 0);
    }


`;

const Questions = ({ score, setScore, options, currQues,
    questions, setQuestions, setCurrQues, correct }) => {

    const navigate = useNavigate()

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    console.log('questions[currQues]?.question:', questions[currQues]?.question)

    const handleSelect = (option) => {
        if (selected === option && selected === correct) {
            return "select"
        } else if (selected === option && selected !== correct) {
            return "wrong"
        } else if (option === correct) {
            return "select"
        }
    }

    const handleCheck = (option) => {
        setSelected(option)
        if (option === correct) {
            setScore(score + 1)
        }
    }

    const handleQuit = () => {

    }

    const handleNext = () => {
        if (currQues > 8) {
            navigate('/result')
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected('');
        } else {
            setError('Choose your answer');

        }
    }

    return (
        <QuestionStyled>
            <h1>Question {currQues + 1}</h1>
            <SingleQuestStyled>
                <h2>{questions[currQues]?.question}</h2>
                <OptionsStyled>
                    {error && <Error>{error}</Error>}
                    {options && options.map((opt, index) => (
                        <button onClick={() => handleCheck(opt)}
                            key={index} disabled={selected}
                            className={`singleOption ${selected && handleSelect(opt)}`}
                        >
                            {opt}
                        </button>
                    ))}
                </OptionsStyled>
                <div className="btns-panel">
                    <Button variant='contained' color='secondary'
                        size='large' style={{ width: 185 }}
                        href='/' onClick={handleQuit}
                    >Quit</Button>
                    <Button variant='contained' color='primary'
                        size='large' style={{ width: 185 }}
                        onClick={handleNext}

                    >
                        {currQues === 9 ? 'Finish' : 'Next Question'}
                    </Button>
                </div>
            </SingleQuestStyled>
        </QuestionStyled>
    )
}

export default Questions