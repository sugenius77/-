import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GitLink from './GitLink';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    a {
        justify-content: space-between;
        padding: 8px 12px;
        text-decoration: none;
        color: #81c8ee;
    }
    a:hover {
        color: #fec478;
    }

    @media screen and (max-width: 980px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;

        a {
            width: 100%;
            margin-top: 4px;
        }
    }
`;

const Menu = () => {
    return (
        <>
            <Div>
                <Link to="/">소개</Link>
                <Link to="/realtime">실시간 추천</Link>
                <Link to="/random">랜덤 추천</Link>
                <Link to="/worldcup">음식 월드컵</Link>
                <Link to="/developer">개발자 소개</Link>
            </Div>
            <GitLink />
        </>
    );
};

export default Menu;
