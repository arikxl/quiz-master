import React, { useState } from 'react';
import styled from 'styled-components';
import {  useNavigate } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@mui/material';

import Error from './Error';
import Categories from '../data/categories';

const SettingsStyled = styled.form`
        width:45%;
        padding:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        font-family: "Poppins", sans-serif;
        font-weight:300;
    span{
        font-size:30px;
    }
    .select-wrapper{
        display:flex;
        flex-direction: column;
        padding:20px;
        width:100%;
        flex: 0.8;
        justify-content: space-evenly;
    }

    
    @media (max-width:800px){
        width:100%
    }
`;


const QuizSettings = ({ name, setName, fetchQuestions }) => {

    const navigate = useNavigate()

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('')
    const [isError, setIsError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!category || !name || !difficulty) {
            setIsError(true)
            return
        } else {
            setIsError(false)
            fetchQuestions(category, difficulty);
            navigate('/quiz');            
        }
    }

    return (
        <SettingsStyled>
            <span>Quiz Settings</span>
            <div className='select-wrapper'>
                {isError && <Error>Please fill all the fields</Error>}
                <TextField style={{ marginBottom: 25 }} variant='outlined'
                    label="Enter Your Name" onChange={(e) => setName(e.target.value)}
                />
                <TextField select label="Select Category" variant='outlined'
                    style={{ marginBottom: 30 }} value={ category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {Categories.map((cat) => (
                        <MenuItem key={cat.value} value={cat.value}>
                            {cat.category}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField select label="Select Difficulty" variant="outlined"
                    style={{ marginBottom: 30 }} value={difficulty }
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <MenuItem key="Easy" value="easy">
                        Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                        Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                        Hard
                    </MenuItem>
                </TextField>

                <Button variant="contained" color="primary" size="large"
                    onClick={handleSubmit}
                >
                    Start Quiz
                </Button>

            </div>
        </SettingsStyled>
    )
}

export default QuizSettings