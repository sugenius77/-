import React,{ useEffect,useState, useRef } from 'react'
import axios from "axios";
import ModalContainer from '../../components/Modal/ModalContainer';

import styled, {css, keyframes} from "styled-components";
import WorldcupPresenter1 from './WorldcupPresenter1';
import api from '../../utils/api/api';

const Image = styled.div`
    background-image: url(${props=>props.bgurl});
    &:hover {{opacity: 0.3;}}
    height: 300px;
    width: 300px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Button = styled.button`
    width:300px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 4px;
    transition: opacity 0.1s linear;
    position: relative;
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

const WorldcupContainer = () => {
    const [animation, SetAnimation] = useState(false);
    const [modalRound, setModalRound] = useState(-1);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef = [imageRef1, imageRef2];
    const [worldcupData, setworldcupData] = useState([]);
    const [worldcupWin, setworldcupWin] = useState([]);
    const [winRank, setWinRank] = useState("");
 
    const arrayReset1 = (i, e)=>{
        imageRef[i].current.style.transitionProperty = 'all';
        imageRef[i].current.style.transitionDuration = `${0.3}s`;
        imageRef[i].current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2 ,1)';
        imageRef[i].current.style.transitionDelay = `${0.3}s`;
        imageRef[i].current.style.transform = 'translate3d(0, 0, 0)';
        imageRef[i].current.style.transform = 'translateX(300px) scaleX(1.5)';        
        imageRef[i].current.style.transform = 'scaleX(1.3)';
        arrayReset2(i,e);
    }
    const arrayReset2 = (i, e)=>{
        const timerId = setTimeout(() => {
            try{
                // imageRef[0].current.style.transitionProperty = '';
                imageRef[0].current.style.transitionDuration = ``;
                imageRef[0].current.style.transitionTimingFunction = '';
                imageRef[0].current.style.transitionDelay = ``;
                imageRef[0].current.style.transform = '';
                // imageRef[1].current.style.transitionProperty = '';
                imageRef[1].current.style.transitionDuration = ``;
                imageRef[1].current.style.transitionTimingFunction = '';
                imageRef[1].current.style.transitionDelay = ``;
                imageRef[1].current.style.transform = '';
            }catch(error){
                SetAnimation(!Animation);
            }

        }, 1000);
        
        let temp = worldcupData[i];
        if(worldcupData.length==2){
            worldcupData.splice(0,2);
            console.log(temp,'우승')
            setworldcupWin(worldcupData.concat(Object.keys(temp)[0],
                            urlErrorCheck( temp[Object.keys(temp)]['img_url'] ),
                            temp[Object.keys(temp)]['menu_id']));
            return
        }
        worldcupData.splice(0,2);
        setworldcupData(worldcupData.concat(temp));
    }
    
    const urlErrorCheck = (url_)=>{
        let result = "";
        for (let i=0; i<url_.length; i++) { 
            result = result+(url_[i]);
            if (url_[i]=='s' && url_[i+1]!="\/"){ result = result+"\/"; }
        }
        return result;            
    }

    const menufunction = () => {
        const result = []
        let name = '';
        for(let i=0; i<2; i++){
            // console.log([Object.keys(worldcupData[i])][0],'ddd');
            let url_ = worldcupData[i][Object.keys(worldcupData[i])]['img_url'];
            result.push(<div style={{display:'inline-flex'}}> 
                        <div key={i} >
                            <Image ref={imageRef[i]} animation={animation} bgurl={urlErrorCheck(url_)}/>
                            <Button onClick={ (e) => {arrayReset1(i, e)} }> {[Object.keys(worldcupData[i])][0]} </Button>
                        </div>
                        {i==0 &&
                            <div>
                                <div style={{height:'43%', backgroundColor:'#a4d9f5'}}></div>
                                <div style={{height:'10%', backgroundColor:'#a4d9f5', paddingTop:'5px',fontFamily:'sans-serif',fontWeight:'bold',color:'#fec478',fontSize:'xx-large'}}>vs</div>
                                <div style={{height:'55%', backgroundColor:'#a4d9f5'}}></div>
                            </div>}
                        </div>
                        
                        );
        }
        return result;
    };

    useEffect( async() => {
        if(modalRound!=-1){
            try{
                await axios.get(`http://localhost:5000/worldcup/start_rank?round=${modalRound}`)
                .then((res) => {
                    setworldcupData(
                        ...worldcupData,
                        Object.keys(res.data).map(el=>(
                            { [el]:res.data[el] } 
                        ))
                    );
                })
            }catch(error){
                console.log("worldcup/start_rank?round"+"-error")
            }
        }
    }, [modalRound]);

    const test11 = useEffect( async() => {
        console.log(worldcupWin[2],'woldcupwin')
        const tt = "";
        if(worldcupWin.length > 0){
            try{
                await axios.get(`http://localhost:5000/worldcup/output_rank?menu_id=${worldcupWin[2]}`)
                .then((test)=>{
                    console.log(test.data['world_ranking'],'여기기');
                    setWinRank(test.data['world_ranking']);
                })
            }catch(error){
                console.log("worldcup/rank"+"-error")
            }
            try{
                await axios.put(`http://localhost:5000/worldcup/rank`, { "menu_id": worldcupWin[2] })
                .then((res) => {
                    console.log('put_api', res)
                });
            }catch(error){
                console.log("worldcup/rank?round"+"-error")
            }
        }
    }, [worldcupWin]);
    
    return (
        <div>
            {modalRound==-1 && <ModalContainer setModalRound={setModalRound}/>}
            
            <div style={{ margin:'0 auto', padding:'100px' }}></div>
                {modalRound!=-1 && <div style={{textAlign:'center'}} >
                    <Text color={"#81c8ee"}>메뉴 월드컵</Text>
                    <Text color={"#fec478"}>{modalRound}</Text>
                    <Text color={"#81c8ee"}>강</Text>
                </div>}
                <div style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
                    <div style={{display:'flex', height:378, border:'30px solid #a4d9f5', borderRadius:'5px',paddingBottom:'20px'}}>
                        {worldcupData.length > 1 ? menufunction() :
                            modalRound==-1 ? <div>라운드 선택중</div> :
                            <WorldcupPresenter1 winRank={winRank} urlErrorCheck={urlErrorCheck} worldcupWin={worldcupWin} />} 
                    </div>
                </div>
        </div>
    )
}
export default WorldcupContainer;
