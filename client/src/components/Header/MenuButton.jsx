import styled from 'styled-components';
import menu from './images/menu_48.png';
const Div = styled.div`
    position: absolute;
    display: none;
    right: 12px;
    padding: 8px 12px;
    font-size: 24px;
    font-size: 32px;
    @media screen and (max-width: 980px) {
        display: block;
    }
`;

const Button = styled.button`
    background-color: transparent !important;
    background-image: none !important;
    border-color: transparent;
    border: none;
    color: #ffffff;
`;

const MenuButton = ({ onClick }) => {
    return (
        <Div>
            <Button onClick={onClick}>
                <img src={menu} alt="menu_button" />
            </Button>
        </Div>
    );
};

export default MenuButton;
