import MainLogo from './MainLogo';
import MenuLink from './MenuLink';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    margin-top: -1px;
    padding-top: 1px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #81c8ee;

    border-bottom: 2px solid black;
    font-size: 24px;
    background-color: white;
    @media screen and (max-width: 1040px) {
        flex-direction: column;
        align-items: flex-start;
        background-color: white;
    }
`;

const HeaderView = ({ toggle, innerWidth, toggleHandler }) => {
    return (
        <Div innerWidth={toggle}>
            <MainLogo innerWidth={innerWidth} toggleHandler={toggleHandler} />
            {innerWidth > 1040 && <MenuLink />}
            {innerWidth <= 1040 && toggle && <MenuLink />}
        </Div>
    );
};

export default HeaderView;
