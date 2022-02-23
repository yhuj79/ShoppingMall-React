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
                        subImageOne={require("./image/product/img_sub/0201.jpg")}
                        subImageTwo={require("./image/product/img_sub/0202.jpg")}
                        subImageThree={require("./image/product/img_sub/0203.jpg")}
                        category="Jordan 1"
                        title="Mid Light Smoke Grey"
                        titleKR=" 미드 라이트 스모크 그레이"
                        color="LIGHT SMOKE GREY / BLACK-WHITE"
                        rdate="2020.01.11."
                        price={695000}
                    />
                    <Product
                        id="0003"
                        image={require("./image/product/Jordan6_RetroCarmine2021.png")}
                        subImageOne={require("./image/product/img_sub/0301.jpg")}
                        subImageTwo={require("./image/product/img_sub/0302.jpg")}
                        subImageThree={require("./image/product/img_sub/0303.jpg")}
                        category="Jordan 6"
                        title="Retro Carmine 2021"
                        titleKR="레트로 카마인 2021"
                        color="WHITE / BLACK-CARMINE"
                        rdate="2021.02.08."
                        price={269000}
                    />
                    <Product
                        id="0004"
                        image={require("./image/product/Jordan1_TravisScottxFragmentRetroLowOGSPMilitaryBlue.png")}
                        subImageOne={require("./image/product/img_sub/0401.jpg")}
                        subImageTwo={require("./image/product/img_sub/0402.jpg")}
                        subImageThree={require("./image/product/img_sub/0403.jpg")}
                        category="Jordan 1 x Travis Scott x Fragment"
                        title="Retro Low Military Blue"
                        titleKR="조던 1 x 트래비스 스캇 x 프라그먼트 레트로 로우 OG SP 밀리터리 블루"
                        color="SAIL / BLACK / MILITARY BLUE"
                        rdate="2021.08.13."
                        price={2920000}
                    />
                </div>
                <div className="productlist_row">
                    <Product
                        id="0005"
                        image={require("./image/product/Jordan1_LowSEChocolateBliss.png")}
                        subImageOne={require("./image/product/img_sub/0501.jpg")}
                        subImageTwo={require("./image/product/img_sub/0502.jpg")}
                        subImageThree={require("./image/product/img_sub/0503.jpg")}
                        category="Jordan 1"
                        title="Low SE Chocolate Bliss"
                        titleKR="로우 SE 초콜릿 블리스"
                        color="LIGHT CHOCOLATE / CRIMSON BLISS"
                        rdate="2021.12.15."
                        price={279000}
                    />
                    <Product
                        id="0006"
                        image={require("./image/product/Jordan11_RetroCoolGrey2021.png")}
                        subImageOne={require("./image/product/img_sub/0601.jpg")}
                        subImageTwo={require("./image/product/img_sub/0602.jpg")}
                        subImageThree={require("./image/product/img_sub/0603.jpg")}
                        category="Jordan 11"
                        title="Retro Cool Grey 2021"
                        titleKR="레트로 쿨 그레이 2021"
                        color="MEDIUM GREY / WHITE-COOL GREY"
                        rdate="2021.12.11."
                        price={295000}
                    />
                    <Product
                        id="0007"
                        image={require("./image/product/Jordan1_RetroHighOGBlackMocha.png")}
                        subImageOne={require("./image/product/img_sub/0701.jpg")}
                        subImageTwo={require("./image/product/img_sub/0702.jpg")}
                        subImageThree={require("./image/product/img_sub/0703.jpg")}
                        category="Jordan 1"
                        title="Retro High OG Black Mocha"
                        titleKR="레트로 하이 OG 블랙 모카"
                        color="SAIL / DARK MOCHA-BLACK-BLACK"
                        rdate="2020.11.13."
                        price={786000}
                    />
                    <Product
                        id="0008"
                        image={require("./image/product/Jordan1_LowGolfChicago.png")}
                        subImageOne={require("./image/product/img_sub/0801.jpg")}
                        subImageTwo={require("./image/product/img_sub/0802.jpg")}
                        subImageThree={require("./image/product/img_sub/0803.jpg")}
                        category="Jordan 1"
                        title="Low Golf Chicago"
                        titleKR="로우 골프 시카고"
                        color="VARSITY RED / BLACK-WHITE"
                        rdate="2022.01.14."
                        price={624000}
                    />
                </div>
                <div className="productlist_row">
                    <Product
                        id="0009"
                        image={require("./image/product/Jordan1_RetroHighOGPatentBred.png")}
                        subImageOne={require("./image/product/img_sub/0901.jpg")}
                        subImageTwo={require("./image/product/img_sub/0902.jpg")}
                        subImageThree={require("./image/product/img_sub/0903.jpg")}
                        category="Jordan 1"
                        title="Retro High OG Patent Bred"
                        titleKR="레트로 하이 OG 페이턴트 브레드"
                        color="BLACK / VARSITY RED-WHITE"
                        rdate="2021.12.23."
                        price={289000}
                    />
                    <Product
                        id="0010"
                        image={require("./image/product/Jordan2_Off-WhiteRetroLowSPWhiteandVarsityRed.png")}
                        subImageOne={require("./image/product/img_sub/1001.jpg")}
                        subImageTwo={require("./image/product/img_sub/1002.jpg")}
                        subImageThree={require("./image/product/img_sub/1003.jpg")}
                        category="Jordan 2 x Off-White"
                        title="Retro Low SP White and Varsity Red"
                        titleKR="조던 2 x 오프화이트 레트로 로우 SP 화이트 앤 바시티 레드"
                        color="WHITE / VARSITY RED"
                        rdate="2021.11.12."
                        price={1290000}
                    />
                    <Product
                        id="0011"
                        image={require("./image/product/Jordan1_DiorHighOG.png")}
                        subImageOne={require("./image/product/img_sub/1101.jpg")}
                        subImageTwo={require("./image/product/img_sub/1102.jpg")}
                        subImageThree={require("./image/product/img_sub/1103.jpg")}
                        category="Jordan 1"
                        title="Jordan 1 x Dior High OG"
                        titleKR="레트로 하이 OG 유니버시티 블루"
                        color="WOLF GREY / SAIL-PHOTON DUST-WHITE"
                        rdate="2020.07.08."
                        price={12400000}
                    />
                    <Product
                        id="0012"
                        image={require("./image/product/Jordan4_RetroCrimson.png")}
                        subImageOne={require("./image/product/img_sub/1201.jpg")}
                        subImageTwo={require("./image/product/img_sub/1202.jpg")}
                        subImageThree={require("./image/product/img_sub/1203.jpg")}
                        category="Jordan 4"
                        title="Retro Crimson"
                        titleKR="레트로 크림슨"
                        color="BLACK / WHITE-RED"
                        rdate="2022.01.15."
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
<<<<<<< HEAD
=======

>>>>>>> 68ed70657b5cc5280fbc6e49fc7df0c2f208bf2b
    @media screen and (max-width:767px) {
        .productlist_row {
            display: inline;
            zoom: 0.7;
        }
    }
`
export default ProductList;