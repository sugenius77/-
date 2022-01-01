import { useState, useEffect } from 'react';
import HeaderView from './HeaderView';
import React from 'react';

export const HeaderContext = React.createContext();

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [innerWidth, setInnerWidth] = useState(0);
    const toggleHandler = () => {
        setToggle((cur) => !cur);
    };

    //브라우저의 길이를 반환하는 이벤트
    const InnerWidth = () => {
        return setInnerWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', InnerWidth);
        return () => {
            window.removeEventListener('resize', InnerWidth);
        };
    }, []);

    return (
        <HeaderContext.Provider value={{ innerWidth: innerWidth, toggle: toggle, toggleHandler: toggleHandler }}>
            <HeaderView />
        </HeaderContext.Provider>
    );
};
export default Header;
