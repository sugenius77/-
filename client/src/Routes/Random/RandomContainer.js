import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";

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

const TOTAL_SLIDES = 20;
function RandomContainer(props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [stop, setStop] = useState(false);
  const [current, setCurrent] = useState(props.current);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { 
      console.log('ere')
      setCurrentSlide(1);
      slideRef.current.style.transform = `translateX(-${"0"}00%)`
    } else {
      setCurrentSlide(currentSlide + 1);
      console.log('hhhhhhh')
    }
  };
  const prevSlide = () => {
    setStop(true);
    slideRef.current.style.transition = '';
    slideRef.current.style.transform = '';
    // if (currentSlide === 0) {
    //   setCurrentSlide(TOTAL_SLIDES);
    // } else {
    //   setCurrentSlide(currentSlide - 1);
    // }
  };
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      if(stop){
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
    <div style={{display:'flex', justifyContent:'center', marginTop:'200px'}}>
      <div style={{width:'600px'}}>
        <Container>
          {/* {currentSlide} */}
          <SliderContainer ref={slideRef}>
            <Slide img={"/images/1-1.png"} />
            <Slide img={"/images/2-1.png"} />
            <Slide img={"/images/3-1.png"} />
            <Slide img={"/images/4-1.png"} />
            <Slide img={"/images/4-2.png"} />
            <Slide img={"/images/5-1.png"} />
      
            <Slide img={"/images/1-2.png"} />
            <Slide img={"/images/2-2.png"} />
            <Slide img={"/images/3-2.png"} />
            <Slide img={"/images/4-2.png"} />
            <Slide img={"/images/4-2.png"} />
            <Slide img={"/images/5-2.png"} />
          </SliderContainer>
          <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
            <Button onClick={prevSlide}>정지버튼</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default RandomContainer;