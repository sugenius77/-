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
    background-color: #fec478;
    border-radius: 4px;
    transition: opacity 0.1s linear;    
`;
function WorldcupPresenter1({worldcupWin, totaldata, prosenter}) {
    const navigate = useNavigate();
    const nextpage = ()=>{
        navigate('/worldcup/rank');
    }
    
    return (
        <>  
            <Image bgurl={worldcupWin[1]}/>
            <div>
                <h2>선택하신 메뉴 {worldcupWin[0]}은(는) 현재
                {totaldata.map((test)=>{
                if([Object.keys(test)][0][0]==worldcupWin[0]){
                    return test[Object.keys(test)]['ranking'];
                }})}
                등입니다.</h2>
                <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
                    <Button onClick={nextpage}>현재순위 보러가기</Button>
                </div>
            </div>
        </>
    )
}

export default WorldcupPresenter1;
