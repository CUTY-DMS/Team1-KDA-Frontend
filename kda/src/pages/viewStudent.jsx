import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";

function StudentPage() {
    const [students, setStudents] = useState([{
        username : "권민휘",
        classId : "1101",
    },{
        username : "김가은",
        classId : "1102",
    }])

    return (
        <>
            <Header/>
            <Body>
                <ListContainer>
                    {students.map((student) => (
                        <ListContent>
                            <Img><img src=""/></Img>
                            <TextBox>
                                <span>{student.classId}&nbsp;{student.username}</span>
                                <span>더보기</span>
                            </TextBox>
                        </ListContent>
                    ))}
                </ListContainer>
            </Body>
        </>
    )
}

export default StudentPage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const ListContainer = styled.div`
    width:1750px;
    display:flex;
    flex-wrap:wrap;
    margin-left:-50px;
`;

const ListContent = styled.div`
    margin-top:50px;
    margin-left:50px;
    width:300px;
    height:100px;
    box-shadow: 0px 0px 5px 3px #609966;
    display:flex;
    align-items:center;
`;

const Img = styled.div`
    margin-left:20px;
    width:80px;
    height:80px;
    border-radius:50%;
    overflow:hidden;
    border:1px solid black;
`;

const TextBox = styled.div`
    margin-left:50px;
    display:flex;
    flex-direction:column;
    font-size: 20px;
    font-weight: 100;
    :last-child {
        color:#7C7C7C;
        font-size:16px;
    }
`