/*!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * LogoImage is licensed under the Creative Commons Attribution-Share Alike 4.0 International license.
 * https://seeklogo.com/vector-logo/5123/air-jordan
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LogoImage from './image/LogoImage.jpg';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut(); // firebase에서 제공하는 메서드
        }
    }
    return (
        <HeaderDiv>
            <Link to="/">
                <img alt="" className="header_logo" src={LogoImage} />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">{!user ? "Hello, Sign in" : user.email}</span>
                    <Link to={!user && "/login"} className="homelogin">
                        <span onClick={handleAuthentication} className="header_optionLineTwo">{user ? "로그아웃" : "로그인"}</span>
                    </Link>
                </div>
                <div className="createbyreact">
                    <a className="header_option" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        <span className="header_optionLineOne">Created by</span>
                        <span className="header_optionLineTwo">React</span>
                    </a>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket />
                        <span className="header_BasketCount">
                            {basket?.length}{/* Optional Chaining */}
                        </span>
                    </div>
                </Link>
            </div>
        </HeaderDiv>
    );
}
const HeaderDiv = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: black;
    position: sticky; top: 0; // 스크롤 영향 안받게 고정
    z-index: 100;
    .header_logo {
        width: 150px;
        object-fit: contain; // 비율을 유지한 상태로 조정
        margin-top: 10px; margin-left: 10px;
    }
    .header_search {
        display: flex;
        flex: 1;
        align-items: center;
        margin-right: 5px;
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
        padding: 5px;
        color: #ffffff;
        border: 1px solid #000000; border-radius: 5px;
        text-decoration: none;
        
        .homelogin {
            text-decoration: none;
            color: white;
        }
        &:hover {
            border-color: #ffffff;
        }
    }
    .header_optionLineOne {
        font-size: 12px;
    }
    .header_optionLineTwo {
        font-size: 13px;
        font-weight: 800;
        margin-top: 3px;
    }
    .header_optionBasket {
        display: flex;
        align-items: center;
        padding: 10px 5px 10px 10px;
        margin-right: 3px;
        color: white;
        border: 1px solid #000000; border-radius: 5px;
        
        &:hover {
            border-color: #ffffff;
        }
    }
    .header_BasketCount {
        margin-left: 10px; margin-right: 10px;
    }
    
    @media screen and (max-width:767px) {
        .header_logo {
            display: block;
            width: 120px;
        }
        .header_search {
            display: none;
        }
        .createbyreact {
            display: none;
        }
        .header_option {&:hover {border-color: #000000;}}
        .header_optionBasket {&:hover {border-color: #000000;}}
    }
`
export default Header;