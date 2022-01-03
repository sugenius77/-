import styled from 'styled-components';
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

const MainLogo = ({ innerWidth, toggleHandler }) => {
    return (
        <Div>
            <img src={`${process.env.PUBLIC_URL}/header/logo_48.png`} alt="logo" />
            <strong>구구절절</strong>
            {innerWidth <= 1040 && <MenuToggle toggleHandler={toggleHandler} />}
        </Div>
    );
};

export default MainLogo;
