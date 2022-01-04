import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Image = styled.div`
    background-image: url(/images/${props=>props.bgurl}.png);
    height: 300px;
    width: 300px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;
function WorldcupPresenter({menu}) {
    const navigate = useNavigate();
    const nextpage = ()=>{
        console.log("test");
        navigate('/worldcup2');
    }
    return (
        <div>
            <h2>선택하신 메뉴 {menu}은 현재 {"3등"}입니다.</h2>
            <Image bgurl={menu}/>
            <button onClick={nextpage}>현재순위 보러가기</button>
        </div>
    )
}

export default WorldcupPresenter;
