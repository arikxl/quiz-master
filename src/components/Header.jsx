import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
    display: flex;
    flex-direction:column;
    align-items: center;
    
    a{
        cursor:pointer;
        font-size:8vw ;
        font-family: "Montserrat", sans-serif;
    }

    hr{
        margin:10px;
        width: 100%;
        background-color: grey;
    }

`;


const Header = () => {
  return (
      <HeaderStyled>
          <Link to='/'>QUIZ MASTER</Link>
          <hr/>
      </HeaderStyled>
  )
}

export default Header