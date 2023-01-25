import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    text-align: center;
    margin-bottom: 10px;
    
`;

const Footer = () => {
    return (
        <FooterStyled>
            made with ❤️ by
            <a href='https://www.linkedin.com/in/arik-alexandrov/'
                target="_blank" rel="noreferrer"
            > arikxl
            </a>
        </FooterStyled>
    )
}

export default Footer