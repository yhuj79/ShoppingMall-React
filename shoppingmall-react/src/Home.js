/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Product Image All rights reserved © KREAM Corp.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
    return (
        <StyledHome>
            <div className='home_container'>
                <div className='home_row'>
                    <Product
                        id="0001"
                        image={require("./image/product/Jordan1_RetroHighOGUniversityBlue.png")}
                        category="Jordan 1"
                        title="Retro High OG University Blue"
                        price={(606000).toLocaleString('en')}
                    />
                    <Product
                        id="0001"
                        image={require("./image/product/Jordan1_MidLightSmokeGrey.png")}
                        category="Jordan 1"
                        title="Mid Light Smoke Grey"
                        price={(695000).toLocaleString('en')}
                    />
                    <Product />
                    <Product />
                </div>
                <div className='home_row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='home_row'>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </StyledHome>
    );
}
const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto; margin-right: auto; // 왼쪽 오른쪽 여백 균등
    
    .home_container {
    }
    .home_row {
        display: flex;
        z-index: 1;
        margin-left: 5px; margin-right: 5px;
    }
`
export default Home;