import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterModal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import LoginLogo from './image/LoginLogo.PNG';
import { auth } from './Firebase';

function Login() {
    const navigate = useNavigate();
    const [regiModalIsOpen, setRegiModalIsOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [LoginError, setLoginError] = useState("");
    const [RegiError, setRegiError] = useState("");

    const signIn = e => {
        e.preventDefault(); // firebase method
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/")
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode === "auth/invalid-email") {
                    errorCode = "메일 형식이 올바르지 않습니다.";
                } else if (errorCode === "auth/user-not-found") {
                    errorCode = "이메일이 잘못 입력되었습니다.";
                } else if (errorCode === "auth/wrong-password") {
                    errorCode = "비밀번호가 잘못 입력되었습니다.";
                } else if (errorCode === "auth/email-already-in-use") {
                    errorCode = "이메일 주소가 사용 중입니다. 다른 이메일 주소를 시도하십시오.";
                } else {
                    errorCode = "로그인 실패. 다시 시도해 주세요.";
                }
                setLoginError(errorCode)
            });
    }
    const register = e => {
        e.preventDefault(); // firebase method
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate("/")
                }
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode === "auth/invalid-email") {
                    errorCode = "메일 형식이 올바르지 않습니다.";
                } else if (errorCode === "auth/weak-password") {
                    errorCode = "비밀번호는 6자 이상이어야 합니다.";
                } else if (errorCode === "auth/user-not-found") {
                    errorCode = "이메일이 잘못 입력되었습니다.";
                } else if (errorCode === "auth/wrong-password") {
                    errorCode = "비밀번호가 잘못 입력되었습니다.";
                } else if (errorCode === "auth/email-already-in-use") {
                    errorCode = "이메일 주소가 사용 중입니다. 다른 이메일 주소를 사용하십시오.";
                } else {
                    errorCode = "회원가입 실패. 다시 시도해 주세요.";
                }
                setRegiError(errorCode)
            });
    }
    const regiClick = () => {
        setEmail('')
        setPassword('')
        setRegiModalIsOpen(true)
    }
    const [checkedInputs, setCheckedInputs] = useState([]);
    const changeHandler = (checked, id) => {
        if (checked) {
            setCheckedInputs([...checkedInputs, id]);
            // console.log("약관 확인 : check");
        } else {
            setCheckedInputs(checkedInputs.filter(el => el !== id));
            // console.log("약관 확인 : none");
        }
    };
    const isChecked = checkedInputs.length === 1;
    const disabled = !isChecked;

    const afterButton = {
        backgroundColor: '#F2CB61',
        '&:hover': {
            backgroundColor: '#E0B94F',
        },
    }

    return (
        <LoginDiv>
            <Link to="/">
                <Logo alt="" src={LoginLogo} />
            </Link>
            <LoginForm>
                <LoginTitle>ACCOUNT LOGIN</LoginTitle>
                <form>
                    <h3>이메일</h3>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h3>비밀번호</h3>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    {LoginError && <ErrorText key={LoginError}>{LoginError}</ErrorText>}
                    <LoginButton onClick={signIn}><h3>로그인</h3></LoginButton>
                </form>
                <RegiButton onClick={regiClick}><h3>회원가입</h3></RegiButton>
            </LoginForm>

            <RegisterModal closeTimeoutMS={400} ariaHideApp={false} isOpen={regiModalIsOpen} onRequestClose={() => setRegiModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    },
                    content: {
                        position: 'absolute',
                        width: '730px', height: '650px',
                        top: '50%',
                        left: '50%',
                        right: '40px',
                        bottom: '40px',
                        transform: 'translate(-50%, -50%)',
                        border: '3px solid #7B7B7B',
                        background: '#D5D5D5',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '15px',
                        outline: 'none',
                        paddingTop: '0px',
                        padding: '40px',
                    }
                }}
            >
                <RegiForm>
                    <LoginTitle>REGISTER</LoginTitle>
                    <form>
                        <h3>신규 이메일</h3>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                        <h3>신규 비밀번호</h3>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                        {RegiError && <ErrorText key={RegiError}>{RegiError}</ErrorText>}
                    </form>
                    <ClauseDiv>
                        <Clause>
                            이 사이트는 개인 연습용 프로젝트 입니다. <br />
                            권한이 거부되거나 그 외 몇 개의 경우에 한하여 api-key가 노출됩니다. <br />
                            API는 Firebals/Google 서비스와 상호 작용할 때 Firebase 프로젝트를 식별합니다.<br />
                            Google Firebase JS는 API에 대하여 공개가 되어도 문제가 되지 않는다고 밝혔으나,<br />
                            예상치 못한 보안 문제가 발생할 가능성이 있습니다. <br />
                            따라서 다른 웹사이트와 관련된 비밀번호를 입력하는 것은 권장하지 않습니다.<br />
                        </Clause>
                    </ClauseDiv>
                    <CheckBox>
                        <input type="checkbox" id="check"
                            onChange={e => {
                                changeHandler(e.currentTarget.checked, 'check');
                            }}
                            checked={checkedInputs.includes('check') ? true : false}
                        />
                        &nbsp;약관을 모두 확인하였습니다.
                    </CheckBox>
                    <RegiFinalButton
                        disabled={disabled}
                        onClick={register}
                        style={
                            disabled
                                ? { backgroundColor: '#B8B8B8' }
                                : { afterButton }
                        }
                    >
                        <h3>회원가입</h3>
                    </RegiFinalButton>
                </RegiForm>
            </RegisterModal>
        </LoginDiv>
    );
}
const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 767px) {
        zoom: 0.5;
    }
`
const Logo = styled.img`
    width: 500px;
    margin-top: 30px;
`
const LoginForm = styled.div`
    width: 500px;
    background-color: #D5D5D5;
    border: 3px solid #7B7B7B;
    margin: 40px; padding: 70px; padding-top: 50px; padding-right: 75px;
    border-radius: 15px;
    & > form > h3 {
        margin-bottom: 5px;
    }
    & > form > input {
        height: 30px;
        margin-bottom: 10px;
        width: 98.3%;
        border-radius: 5px;
        border-color: #EAEAEA;
    }
`
const LoginTitle = styled.h1`
    margin-bottom: 20px;
    font-family: Righteous;
`
const ErrorText = styled.p`
    color: #FF0000;
    font-weight: bold;
    transition: all 1s;
    @keyframes moveError {
        0% {
            transform: translateX(-1%);
        }
        20% {
            transform: translateX(1%);
        }
        40% {
            transform: translateX(-1%);
        }
        60% {
            transform: translateX(1%);
        }
        80% {
            transform: translateX(-1%);
        }
        100% {
            transform: translateX(0);
        }
    }
    animation: moveError 0.3s ease-in-out;
`
const LoginButton = styled.button`
    background: #F2CB61;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    border: 1px solid;
    margin-top: 15px;
    border-color: #CEA73D;
    &:hover {
        background: #E0B94F;
    }
`
const RegiForm = styled(LoginForm)`
    border: none;
`
const ClauseDiv = styled.div`
    background-color: #F6F6F6;
    margin-top: 10px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #C0C0C0;
`
const Clause = styled.p`
    font-size: 0.82rem;
`
const CheckBox = styled.small`
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 10px;
    
    .input {
        margin-right: 5px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1368px) {
        zoom: 1.2;
    }
`
const RegiButton = styled(LoginButton)`
    background: #EAEAEA;
    margin-top: 10px;
    border-color: #C6C6C6;
    &:hover {
        background: #D8D8D8;
    }
`
const RegiFinalButton = styled(LoginButton)`
    border: 1px solid #828282;
    margin-top : 15px;
`
export default Login;