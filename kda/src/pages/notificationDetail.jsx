import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";

function NotificationDetailPage() {
    return (
        <>
            <Header/>
            <Body>
                <TopBox>
                    <InfomationBox>
                        <span>대충 제목들어갈 부분</span>
                        <span>2022.08.22 오전 12:48</span>
                    </InfomationBox>
                    <DetailBox>
                        <div>분류 : 교사</div>
                        <div>작성자 : 최수장 (나)</div>
                        <div>afsdg</div>
                    </DetailBox>
                </TopBox>
                <ContentBox>
                한국어 단어 '글'은 고대 한국어에서는 향찰로 文尸라고 기록했을 정도로 오래된 단어다.삼국사기에서는 고구려어로 추정되는 지명에서 斤尸라는 어형을 확인할 수 있는데
                '글'의 어원이 된 단어의 음차로 보인다. 중세 한국어에서는 '글ᄫᅡᆯ'(오늘날 '글월'의 원형)이라고 부르기도 했다. 계약서를 만들 목적으로 나무나 바위에 새긴 글을 뜻하는 契의 상고한어
                음가를 차용했다는 설도 있으나 증명되지 않았다.음성 정보인 언어를 글자의 형태로 
                기록하게 됨에 따라 인류의 정보량은 폭발적으로 증가하였다. 글은 인류가 이만큼 발전하는데 굉장히 공헌을 한 도구이다. 그때문에 단순히 글자로 기록된 정보란 의미에서
                나아가 학식을 나타내는 말로 확대되기도 하였다. 그리고 글 좀 쓴다고 한다는 표현은 의도를 갖고 편찬된 문학이나 비문학 텍스트를 가리키는 말이 되었다.
                </ContentBox>
            </Body>
        </>
    )
}

export default NotificationDetailPage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const TopBox = styled.div`
    width:1600px;
    height:220px;
    border-bottom:1px solid black;
    display:flex;
`;

const InfomationBox = styled.div`
    width:1400px;
    height:220px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    :first-child {
        font-size:38px;
        font-weight:700;
    }
    :last-child {
        font-size:20px;
        color:#7C7C7C;
        font-weight:100;
    }
`;

const DetailBox = styled.div`
    width:200px;
    height:220px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    div {
        width:200px;
        display:flex;
        justify-content:end;
        color:#7C7C7C;
    }
    :nth-child(2) {
        margin:10px 0;
    }
`;

const ContentBox = styled.div`
    margin-top:50px;
    width:1600px;
    font-size:20px;
    font-weight:350;
`;