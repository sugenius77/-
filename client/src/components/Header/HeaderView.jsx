import MainLogo from './MainLogo';
import Menu from './Menu';
import styled from 'styled-components';
import { HeaderContext } from './Header';

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
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

const HeaderView = () => {
    return (
        <HeaderContext.Consumer>
            {({ toggle, innerWidth }) => (
                <Div>
                    <MainLogo />
                    {innerWidth >= 1040 && <Menu />}
                    {innerWidth < 1040 && toggle && <Menu />}
                </Div>
            )}
        </HeaderContext.Consumer>
    );
};

export default HeaderView;
