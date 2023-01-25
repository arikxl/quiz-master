import React from 'react';
import styled from 'styled-components';

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

const SettingsStyled = styled.section`
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

    
    @media (max-width:800px){
        width:100%
    }
`;

const HomePage = () => {
    return (
        <HomeStyled>
            <SettingsStyled>
                <span>Quiz Settings</span>
            </SettingsStyled>
            <img src="/quiz.svg" alt="quiz arik alexandrov"/>
        </HomeStyled>
    )
}

export default HomePage