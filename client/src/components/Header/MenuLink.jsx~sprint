import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GitLink from './GitLink';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    background-color: white;

    a {
        justify-content: space-between;
        padding: 8px 12px;
        text-decoration: none;
        color: #81c8ee;
    }
    a:hover {
        color: #fec478;
    }

    @media screen and (max-width: 1040px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;


        a {
            width: 100%;
            margin-top: 4px;
        a {
            width: 100%;
            margin-top: 4px;
            height: auto;
        }
    }
`;

const MenuLink = ({ toggleHandler }) => {
    return (
        <>
            <Div>
                <Link to="/" onClick={toggleHandler}>
                    소개
                </Link>
                <Link to="/realtime" onClick={toggleHandler}>
                    실시간 추천
                </Link>
                <Link to="/random" onClick={toggleHandler}>
                    랜덤 추천
                </Link>
                <Link to="/worldcup" onClick={toggleHandler}>
                    음식 월드컵
                </Link>
                <Link to="/developer" onClick={toggleHandler}>
                    개발자 소개
                </Link>
            </Div>
            <GitLink />
        </>
    );
};

export default MenuLink;
