import React, {useEffect}from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Image = styled.div`
    background-image: url(${props=>props.bgurl});
    height: 320px;
    width: 300px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Button = styled.button`
    width:300px;
    height:30px;
    background-color: #fec478;
    border-radius: 4px;
    transition: opacity 0.1s linear;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #fec478;
        color: #fff;
    }  
`;
const Text = styled.h2`
    color: ${props=>props.color};
    display: inline;
`;
function WorldcupPresenter1({ worldcupWin, winRank }) {
    const navigate = useNavigate();
    const nextpage = ()=>{
        navigate('/rank');
       
    }
    
    return (
        <>  
            {worldcupWin.length > 0 ? <Image bgurl={worldcupWin[1]}/> : <div>라운드 선택중</div>}
            {worldcupWin.length > 0 ? 
            <div style={{ margin:'0 auto', padding:'30px' }}>
                <div>
                    <Text>선택하신 메뉴 </Text>
                    <Text color={"#fec478"}>{worldcupWin[0]}</Text>
                    <Text>(은)는</Text>
                    <br/><Text>현재</Text>
                    <Text color={"#fec478"}>{winRank}</Text>
                    <Text>등 입니다</Text>
                </div>
                <div style={{marginTop:'50px'}}>
                    <Button onClick={nextpage}>Ranking 보러가기</Button>
                </div>
            </div>
            : <div></div>}
        </>
    )
}

export default WorldcupPresenter1;
