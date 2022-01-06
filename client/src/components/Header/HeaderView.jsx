import MainLogo from './MainLogo';
import MenuLink from './MenuLink';
import styled from 'styled-components';

const Div = styled.div`
    z-index: 1;
    height: 10vh;
    position: fixed;
    margin-top: -1px;
    padding-top: 1px;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #81c8ee;
    padding: 8px 12px;
    border-bottom: 2px solid black;
    font-size: 24px;
    background-color: white;
    @media screen and (max-width: 1040px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const HeaderView = ({ toggle, innerWidth, toggleHandler }) => {
    return (
        <Div>
            <MainLogo innerWidth={innerWidth} toggleHandler={toggleHandler} />
            {innerWidth > 1040 && <MenuLink />}
            {innerWidth <= 1040 && toggle && <MenuLink />}
        </Div>
    );
};

export default HeaderView;
