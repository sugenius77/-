import styled from 'styled-components';
import { HeaderContext } from './Header';
import MenuToggle from './MenuToggle';

const Div = styled.div`
    padding: 8px 12px;
    font-size: 32px;
    display: flex;
    align-items: center;

    img {
        margin-right: 12px;
    }
`;

const MainLogo = () => {
    return (
        <HeaderContext.Consumer>
            {({ innerWidth }) => (
                <Div>
                    <img src={`${process.env.PUBLIC_URL}/header/logo_48.png`} alt="logo" />
                    <strong>구구절절</strong>
                    {innerWidth <= 1040 && <MenuToggle />}
                </Div>
            )}
        </HeaderContext.Consumer>
    );
};

export default MainLogo;
