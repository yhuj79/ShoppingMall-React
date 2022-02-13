import React from 'react';
import styled from 'styled-components';

function MainTitle() {
    return (
        <StyledMainTitle>
            <h1>AIR &nbsp; JORDAN.</h1>
        </StyledMainTitle>
    );
}
const StyledMainTitle = styled.div`
    background-color: black;
    color: white;
    font-family: 'Monoton'; font-size: 2rem; letter-spacing: 5px;
    text-align: center;
`
export default MainTitle;