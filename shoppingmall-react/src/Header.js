/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * LogoImage is licensed under the Creative Commons Attribution-Share Alike 4.0 International license.
 * https://seeklogo.com/vector-logo/5123/air-jordan
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LogoImage from './image/LogoImage.jpg';

function Header() {
    return (
        <StyleHeader>
            <img alt='' className='header_logo' src={LogoImage} />
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>안녕하세요!</span>
                    <span className='header_optionLineTwo'>로그인하기</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>돌아가기</span>
                    <span className='header_optionLineTwo'>주문내역</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Created by</span>
                    <span className='header_optionLineTwo'>React</span>
                </div>

                <div className='header_optionBasket'>
                    <ShoppingBasket />
                    <span className='header_optionLineTwoheader_basketCount'>0</span>
                </div>
            </div>
        </StyleHeader>
    );
}
const StyleHeader = styled.div`
    height: 75px;
    display: flex;
    align-items: center;
    background-color: black;
    position: sticky;   // 스크롤을 내려도
    top: 0;             // 상단에 고정
    z-index: 100;

    .header_logo {
        width: 150px;
        object-fit: contain; // 비율을 유지한 상태로 조정
        border-radius: 100%;
        margin: 0 20px;
    }
    .header_search {
        display: flex;
        flex: 1;
        align-items: center;
        border-radius: 20px;
    }
    .header_searchInput {
        height: 15px;
        padding: 10px;
        border: none;
        width: 100%;
    }
    .header_searchIcon {
        background-color: #F2CB61;
        padding: 5px;
        height: 25px;
    }
    .header_nav {
        display: flex;
        justify-content: space-evenly;
    }
    .header_option {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        margin-right: 12px;
        color: #ffffff;
    }
    .header_optionLineOne {
        font-size: 10px;
    }
    .header_optionLineTwo {
        font-size: 13px;
        font-weight: 800;
        margin-top: 3px;
    }
    .header_optionBasket {
        display: flex;
        align-items: center;
        color: white;
    }
    .header_optionLineTwoheader_basketCount {
        margin-left: 10px; margin-right: 10px;
    }
`
export default Header;