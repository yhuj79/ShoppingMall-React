import React from 'react';
import styled from 'styled-components';

function MainTitle() {
    return (
        <StyledMainTitle>
            <Styleda>AIR &nbsp; JORDAN.</Styleda>
        </StyledMainTitle>
    );
}
const StyledMainTitle = styled.div`
    background-color: black;
    color: white;
    font-family: 'Monoton'; font-size: 3rem; letter-spacing: 5px;
    text-align: center;
`
const Styleda = styled.a`
    text-decoration-color : black;
`
export default MainTitle;