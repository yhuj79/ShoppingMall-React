/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Product Image All rights reserved © KREAM Corp.
 * Product Sub Image All rights reserved Adobe Stock License.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function ProductList() {
    return (
        <ProductListDiv>
            <div>
                <div className="productlist_row">
                    <Product
                        id="0001"
                        image={require("./image/product/Jordan1_RetroHighOGUniversityBlue.png")}
                        subImageOne={require("./image/product/img_sub/0101.jpg")}
                        subImageTwo={require("./image/product/img_sub/0102.jpg")}
                        subImageThree={require("./image/product/img_sub/0103.jpg")}
                        category="Jordan 1"
                        title="Retro High OG University Blue"
                        titleKR="레트로 하이 OG 유니버시티 블루"
                        color="WHITE / UNIVERSITY BLUE / BLACK"
                        rdate="2021.03.06."
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
                        category="Jordan 1 x Travis Scott x Fragment"
                        title="Retro Low Military Blue"
                        price={2920000}
                    />
                </div>
                <div className="productlist_row">
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
                <div className="productlist_row">
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
                        category="Jordan 2 x Off-White"
                        title="Retro Low SP White and Varsity Red"
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
        </ProductListDiv>
    );
}
const ProductListDiv = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-left: auto; margin-right: auto; // 왼쪽 오른쪽 여백 균등
    
    .productlist_row {
        display: flex;
        z-index: 1;
        margin-left: 5px; margin-right: 5px;
    }
`
export default ProductList;