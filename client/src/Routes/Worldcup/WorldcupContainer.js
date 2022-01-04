import React,{ useEffect,useState } from 'react'
import './Worldcup.css';
import axios from "axios";
import ModalContainer from '../../Components/Modal/ModalContainer'
import styled, {css, keyframes} from "styled-components";
import WorldcupPresenter from './WorldcupPresenter';
import { useTranslation } from 'react-i18next'

let menuArray = ['dduckpoki','friedrice','gukbab','hambuger','jajangmyeon','pizza','sourpork','sushi'];

const boxFade = keyframes`
  0% {opacity: 1;}
  50% {opacity: 0;}
  100% {opacity: 1;}
`
const animation = props =>
  props.on && css`
    ${boxFade} 2s 1s infinite linear alternate;
  `
//background-image: url(/images/${props=>props.bgurl}.png);

const Image = styled.div`
    background-image: url(/images/${props=>props.bgurl}.png);
    animation: ${animation};
    &:hover {{opacity: 0.3;}}
    height: 300px;
    width: 300px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;
const Button = styled.button`
    width:200px;
    background-color: #fec478;
    border-radius: 4px;
    transition: opacity 0.1s linear;
    position: relative;
    left:50%;
    margin-left: -100px;  
`;
const WorldcupContainer = () => {
    const [menu, SetMenu] = useState(menuArray);
    const [on, SetOn] = useState(false);
    const arrayReset = (i, e)=>{
        let temp = '';
        if(i==0){
            temp = menu[0];
        }else{
            temp = menu[1];
        }
        menu.splice(0,2);
        SetMenu(menu.concat(temp));
        // SetOn(!on);
        // console.log(on);
    }
    

    const menufunction = () => {
        const result = []
        let name = '';
        for(let i=0; i<2; i++){
            name = menu[i];
            result.push(<div key={i}>
                            <Image bgurl={(name)}/>
                            <Button onClick={(e)=>{arrayReset(i, e)}}>{i+1}번선택</Button>
                        </div>);
        }
        return result;
    };

    // api test
    // const test = async() => {
    //     //https://cors-anywhere.herokuapp.com/
    //     await axios
    //     .get(`https://cors-anywhere.herokuapp.com/http://127.0.0.1:5000/test`)
    //     .then((res)=> {
    //         console.log("testmessage",res);   
    //     });
        
    // };
    // const test1 = useEffect(() => {
    //     test();
    // }, [])
    useEffect(() => {
        // fetch("/test").then(
        //   (res) => {console.log(res)}
        // )
        axios.get('worldcup/output_rank').then(
            (res) => {console.log(res)}
        )
      }, [])
   
    return (
        <div>
            <ModalContainer/>
            <div style={{height:300}}></div>
            
                <div style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
                    <div style={{display:'flex', height:300, border:'30px solid #a4d9f5', borderRadius:'5px',paddingBottom:'20px'}}>
                        {menu.length > 1 ?
                            menufunction() : <WorldcupPresenter menu={menu}/> }
                        {console.log(menu)}    
                    </div>
                </div>
            
        </div>
    )
}

export default WorldcupContainer;
