import React from 'react';
import styled from 'styled-components';

const ErrorStyled = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: orangered;
    text-align: center;
    color: white;
    text-transform: capitalize;
    margin-bottom: 10px;
`;

const Error = ({children}) => {
  return (
      <ErrorStyled>{children}</ErrorStyled>
  )
}

export default Error