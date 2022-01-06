import React,{ useEffect,useState, useRef } from 'react'
import axios from "axios";
import ModalContainer from '../../Components/Modal/ModalContainer'
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
    background-color: #fec478;
    border-radius: 4px;
    transition: opacity 0.1s linear;
    position: relative;
    left:50%;
    margin-left: -150px;  
`;

const WorldcupContainer = () => {
    const [animation, SetAnimation] = useState(false);
    const [presenter, setPresenter] = useState(false);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef = [imageRef1, imageRef2];
    const [totaldata, setTotalData] = useState([]);
    const [worldcupData, setworldcupData] = useState([]);
    const [worldcupWin, setworldcupWin] = useState([]);
 
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
            setworldcupWin(worldcupData.concat(Object.keys(temp)[0],
                            urlErrorCheck( temp[Object.keys(temp)]['img_url'] ),
                            temp[Object.keys(temp)]['ranking']));
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
        // console.log(worldcupData,'ereree')
        const result = []
        let name = '';
        for(let i=0; i<2; i++){
            let url_ = worldcupData[i][Object.keys(worldcupData[i])]['img_url'];
            result.push(<div key={i}>
                            <Image ref={imageRef[i]} animation={animation} bgurl={urlErrorCheck(url_)}/>
                            <Button onClick={ (e) => {arrayReset1(i, e)} }> {i+1}번선택 </Button>
                        </div>);
        }
        return result;
    };

    useEffect( async() => {
        await axios.get('worldcup/rank')
        .then((res) => {
            setTotalData(
                ...totaldata,
                Object.keys(res.data).map(el=>(
                    { [el]:res.data[el] } 
                ))
            );
        })
        await axios.get('worldcup/start_rank?round=8')
        .then((res) => {
            setworldcupData(
                ...worldcupData,
                Object.keys(res.data).map(el=>(
                    { [el]:res.data[el] } 
                ))
            );
        })
    }, [])
    
    return (
        <div>
            <ModalContainer/>
            <div style={{height:300}}></div>
                <div style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
                    <div style={{display:'flex', height:300, border:'30px solid #a4d9f5', borderRadius:'5px',paddingBottom:'20px'}}>
                        {worldcupData.length > 1 ? menufunction() :
                         <WorldcupPresenter1 presenter={presenter} totaldata={totaldata} urlErrorCheck={urlErrorCheck} worldcupWin={worldcupWin} />} 
                    </div>
                </div>
        </div>
    )
}
export default WorldcupContainer;
