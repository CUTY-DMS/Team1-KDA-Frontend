import React, { useState } from "react";
import { styled } from "styled-components";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import { signUpPost } from "../apis/signUp";
import CustomToastContainer from "../utils/toast/customToastContainer";
import { customToast } from "../utils/toast/customToast";

function SignUpPage() {
    const [data, setData] = useState({
        email:"",
        teachGrade:"",
        teachClass:"",
        name:"",
        password:"",
        birth:"",
        code:"",
        okPassword:""
    })

    const {email, teachGrade, teachClass, name, password, birth, code, okPassword} = data;

    const onSignIn = () => {
        window.location.href = "/signIn";
    };

    const onClick = () => {
        if(password != okPassword) {
            customToast("비밀번호 확인을 실패했습니다.","error");
            return;
        }
        signUpPost(data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                const error = err.response.status;
                console.log(error);
                console.log(err.response);
                console.log(err);
                if(error === 403) {
                    customToast("이미 가입한 이메일입니다.");
                } else if(error === 500) {
                    customToast("코드가 유효하지 않습니다.","error");
                }
            });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    return (
        <Body>
            <TopBox>
                <Title>회원가입</Title>
                <Img><img src="/images/signpagelogo.svg"/></Img>
            </TopBox>
            <InputBox>
                <TextField type="text" width={1000} height={50} text="이름" name="name" value={name} event={onChange}/>
                <TextField type="email" width={1000} height={50} text="이메일" name="email" value={email} event={onChange}/>
                <TextField type="password" width={1000} height={50} text="비밀번호" name="password" value={password} event={onChange}/>
                <TextField type="password" width={1000} height={50} text="비밀번호 확인" name="okPassword" value={okPassword} event={onChange}/>
                <InnerInputBox>
                    <TextField type="text" width={310} height={50} text="학년" name="teachGrade" value={teachGrade} event={onChange}/>
                    <TextField type="text" width={310} height={50} text="반" name="teachClass" value={teachClass} event={onChange}/>
                    <TextField type="text" width={310} height={50} text="생년월일 (ex 20001212)" name="birth" value={birth} event={onChange}/>
                </InnerInputBox>
            </InputBox>
            <BottomBox>
                <TextField type="text" width={650} height={50} text="교직원 확인 코드" name="code" value={code} event={onChange}/>
                <Button red={false} width={300} text="회원가입" event={onClick}></Button>
            </BottomBox>
            <LinkBox>
                <span>계정이 있으신가요?&nbsp;&nbsp;</span>
                <span onClick={onSignIn}>로그인</span>
            </LinkBox>
        </Body>
    )
}

export default SignUpPage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Img = styled.div`
    width:200px;
    height:200px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Title = styled.div`
    font-weight:bold;
    font-size:40px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const TopBox = styled.div`
    display:flex;
    justify-content:space-between;
    width:1000px;
    height:200px;
    align-items:center;
    margin-top:40px;
`;

const InputBox = styled.div`
    width:1000px;
    :nth-child(1n) {
        margin-top:70px;
    }
    :first-child {
        margin-top:1px;
    }
`;

const InnerInputBox = styled.div`
    width:1000px;
    display:flex;
    justify-content:space-between;
    :nth-child(1n) {
        margin-top:0px;
    }
`;

const LinkBox = styled.div`
    width:1000px;
    display:flex;
    justify-content:end;
    span {
        font-weight:100;
        font-size:20px;
        cursor:default;
        margin-top:5px;
    }
    :first-child {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    :last-child {
        color:#7c7c7c;
        cursor: pointer;
        transition:0.1s ease-in-out;
        &:hover {
            opacity: .8;
            text-decoration:underline;
        }
    }
`;

const BottomBox = styled.div`
    width:1000px;
    height:50px;
    display:flex;
    justify-content:space-between;
    margin-top:70px;
    :first-child {
        position:relative;
        top:6px;
    }
`;