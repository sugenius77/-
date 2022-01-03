import React from 'react'
import './Modal.css'
import SelectBox from '../SelectBox'

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
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div>총 라운드를 선택하세요</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center',marginTop:30}}>
                        <SelectBox roundSelect={roundSelect} options={options} defaultValue="8"></SelectBox>
                    </div>
                    <button className="modal__button" onClick={modalClose}>시작하기</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPresenter;