/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Product Image All rights reserved © KREAM Corp.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function ProductList() {
    return (
        <StyledProductList>
            <div className='product_container'>
                <div className='product_row'>
                    <Product
                        id="0001"
                        image={require("./image/product/Jordan1_RetroHighOGUniversityBlue.png")}
                        category="Jordan 1"
                        title="Retro High OG University Blue"
                        price={606000}
                    />
                    <Product
                        id="0002"
                        image={require("./image/product/Jordan1_MidLightSmokeGrey.png")}
                        category="Jordan 1"
                        title="Mid Light Smoke Grey"
                        price={695000}
                    />
                    <Product
                        id="0003"
                        image={require("./image/product/Jordan6_RetroCarmine2021.png")}
                        category="Jordan 6"
                        title="Retro Carmine 2021"
                        price={269000}
                        size={245}
                    />
                    <Product
                        id="0004"
                        image={require("./image/product/Jordan1_TravisScottxFragmentRetroLowOGSPMilitaryBlue.png")}
                        category="Jordan 1"
                        title="Travis Scott x Fragment Retro Low Military Blue"
                        price={2920000}
                    />
                </div>
                <div className='product_row'>
                    <Product
                        id="0005"
                        image={require("./image/product/Jordan1_LowSEChocolateBliss.png")}
                        category="Jordan 1"
                        title="Low SE Chocolate Bliss"
                        price={279000}
                    />
                    <Product
                        id="0006"
                        image={require("./image/product/Jordan11_RetroCoolGrey2021.png")}
                        category="Jordan 11"
                        title="Retro Cool Grey 2021"
                        price={295000}
                    />
                    <Product
                        id="0007"
                        image={require("./image/product/Jordan1_RetroHighOGBlackMocha.png")}
                        category="Jordan 1"
                        title="Retro High OG Black Mocha"
                        price={786000}
                    />
                    <Product
                        id="0008"
                        image={require("./image/product/Jordan1_LowGolfChicago.png")}
                        category="Jordan 1"
                        title="Low Golf Chicago"
                        price={624000}
                    />
                </div>
                <div className='product_row'>
                    <Product
                        id="0009"
                        image={require("./image/product/Jordan1_RetroHighOGPatentBred.png")}
                        category="Jordan 1"
                        title="Retro High OG Patent Bred"
                        price={289000}
                    />
                    <Product
                        id="0010"
                        image={require("./image/product/Jordan2_Off-WhiteRetroLowSPWhiteandVarsityRed.png")}
                        category="Jordan 2"
                        title="Off-White Retro Low SP White and Varsity Red"
                        price={1290000}
                    />
                    <Product
                        id="0011"
                        image={require("./image/product/Jordan1_DiorHighOG.png")}
                        category="Jordan 1"
                        title="Jordan1 x Dior High OG"
                        price={12400000}
                    />
                    <Product
                        id="0012"
                        image={require("./image/product/Jordan4_RetroCrimson.png")}
                        category="Jordan 4"
                        title="Retro Crimson"
                        price={336000}
                    />
                </div>
            </div>
        </StyledProductList>
    );
}
const StyledProductList = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto; margin-right: auto; // 왼쪽 오른쪽 여백 균등
    
    .product_container {
    }
    .product_row {
        display: flex;
        z-index: 1;
        margin-left: 5px; margin-right: 5px;
    }
`
export default ProductList;