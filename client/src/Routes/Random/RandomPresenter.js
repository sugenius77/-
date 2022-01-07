import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import axios from "axios";

const Text_ = styled.h2`
color: ${props=>props.color};
display: inline;
`;
const Container = styled.div`
    paddingTop:'200px',
    margin:'0 auto'
    width: 300px;
    overflow: hidden; 
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 200px;
  display: flex;
`;


function RandomPresenter({ slide_, TOTAL_SLIDES, setChoice, animation}) {
      
  const [currentSlide, setCurrentSlide] = useState(1);
  const [stop, setStop] = useState(false);
//   const [current, setCurrent] = useState(props.current);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { 
      setCurrentSlide(0);
      slideRef.current.style.transform = `translateX(-${"0"}00%)`
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const stopSlide = () => {
    setStop(true);
    slideRef.current.style.transition = '';
    slideRef.current.style.transform = '';
  };
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      if(stop){
          console.log(currentSlide);
          setChoice(currentSlide);
          animation();
          slideRef.current.style.transition = '';
          slideRef.current.style.transform = '';
      }else{
          slideRef.current.style.transition = "all ease 0.05s 0s";
          slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
          nextSlide();
      }
      
    }, 50);
},[currentSlide] ,[stop]);


return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'140px'}}>
           
        <div style={{width:'1000px'}}>
            <Container>
            <div style={{display:'flex', justifyContent:'center'}}>
            <Text_ color={"#fec478"}>Random</Text_>&nbsp;&nbsp;&nbsp;<Text_>선택</Text_>
            </div>
            <div style={{display:'flex',maxWidth:'1000px',justifyContent:'center', border:'50px solid #a4d9f5', borderRadius:'5px'}}>
         
            <SliderContainer ref={slideRef}>
                {slide_}
            </SliderContainer>
            </div>
            <div style={{width:'100px'}}></div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                <Button onClick={stopSlide}>멈춰!</Button>
            
                {/* <Button onClick={(e)=>{setStop(false); setCurrentSlide(currentSlide+1);}}>멈추지마!</Button> */}
            </div>
            </Container>
        
        </div>
    </div>
        
  );
}
export default RandomPresenter;