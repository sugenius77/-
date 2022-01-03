import { useState, useEffect, createContext } from 'react';
import HeaderView from './HeaderView';
import React from 'react';

export const HeaderContext = createContext();
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [innerWidth, setInnerWidth] = useState(0);
    const toggleHandler = () => {
        setToggle((cur) => !cur);
    };

    //브라우저의 길이를 반환하는 이벤트
    const getInnerWidth = () => {
        return setInnerWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('load', getInnerWidth);
        window.addEventListener('resize', getInnerWidth);
        return () => {
            window.removeEventListener('load', getInnerWidth);
            window.removeEventListener('resize', getInnerWidth);
        };
    }, []);

    return <HeaderView innerWidth={innerWidth} toggle={toggle} toggleHandler={toggleHandler} />;
};
export default Header;
