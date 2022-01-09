import MainLogo from './MainLogo';
import MenuLink from './MenuLink';
import styled from 'styled-components';

const Div = styled.div`
    z-index: 1;
    min-height: 10vh;
    position: fixed;
    margin-top: -1px;
    padding-top: 1px;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #81c8ee;

    font-size: 24px;
    background-color: white;
    @media screen and (max-width: 1090px) {
        flex-direction: column;
        align-items: flex-start;
        background-color: white;
    }
`;

const HeaderView = ({ toggle, innerWidth, toggleHandler, logoName }) => {
    return (
        <Div innerWidth={toggle}>
            <MainLogo innerWidth={innerWidth} toggleHandler={toggleHandler} logoName={logoName} />
            {innerWidth > 1090 && <MenuLink />}
            {innerWidth <= 1090 && toggle && <MenuLink />}
        </Div>
    );
};

export default HeaderView;
