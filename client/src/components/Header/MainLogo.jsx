import styled from 'styled-components';
import logo from './images/logo_48.png';
import MenuButton from './MenuButton';

const Div = styled.div`
    padding: 8px 12px;
    font-size: 32px;
    display: flex;
    align-items: center;

    img {
        margin-right: 12px;
    }
`;

const MainLogo = ({ innerWidth, onClick }) => {
    return (
        <Div>
            <img src={logo} alt="logo" />
            <strong>구구절절</strong>
            {innerWidth < 980 && <MenuButton onClick={onClick} />}
        </Div>
    );
};

export default MainLogo;
