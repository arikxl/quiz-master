import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    /* margin:  0 -5px -5px; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #155283;
    padding: 10px 0;
    
`;

const Footer = () => {
    return (
        <FooterStyled>
            made with ❤️ by&nbsp;
            <a href='https://www.linkedin.com/in/arik-alexandrov/'
                target="_blank" rel="noreferrer"
            > arikxl
            </a>
        </FooterStyled>
    )
}

export default Footer