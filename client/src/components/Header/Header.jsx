import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainLogo from './MainLogo';
import Menu from './Menu';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #81c8ee;
    padding: 8px 12px;
    border-bottom: 2px solid black;
    font-size: 24px;
    background-color: white;

    @media screen and (max-width: 980px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const [innerWidth, setInnerWidth] = useState(0);
    const toggleHandler = (event) => {
        event.preventDefault();
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
        <Div>
            <MainLogo innerWidth={innerWidth} onClick={toggleHandler} />
            {innerWidth >= 980 && <Menu />}
            {innerWidth < 980 && toggle && <Menu />}
        </Div>
    );
};
export default Header;
