import React from 'react'
import './Modal.css'
import SelectBox from '../SelectBox'
import styled from "styled-components";

const Button = styled.button`
    width: '200px'
    transition: opacity 0.1s linear;
    position: absolute;
    left:50%;
    top:75%;
    transform: translate(-50%, -50%);
    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: #fec478;
      color: #fff;
    }
`;
const ModalPresenter = ({roundSelect, modalClose}) => {
    const options = [
        { value: "8", name: "8강" },
        { value: "16", name: "16강" },
        { value: "64", name: "64강" },
    ];

    return (
        <div className="modal__container">
            <div className="modal">
                <div style={{backgroundColor:'#a4d9f5', height:130, margin:'10px 10px'}}>
                    <div style={{display:'flex', justifyContent:'center', color:'black', fontWeight:'bold'}}>
                        <div style={{marginTop:'5px'}}>총 라운드를 선택하세요</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center',marginTop:30}}>
                        <SelectBox roundSelect={roundSelect} options={options} defaultValue="8"></SelectBox>
                    </div>
                    {/* <button className="modal__button" onClick={modalClose}>시작하기</button> */}
                    <Button onClick={modalClose}> 시작하기 </Button>
                </div>
            </div>
        </div>
    )
}

export default ModalPresenter;