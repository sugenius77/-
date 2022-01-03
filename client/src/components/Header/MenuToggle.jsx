import styled from 'styled-components';
const Div = styled.div`
    position: absolute;
    display: none;
    right: 12px;
    padding: 8px 12px;
    font-size: 24px;
    font-size: 32px;
    @media screen and (max-width: 1040px) {
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

const MenuToggle = ({ toggleHandler }) => {
    return (
        <Div>
            <Button onClick={toggleHandler}>
                <img src={`${process.env.PUBLIC_URL}/header/menu_48.png`} alt="menu_button" />
            </Button>
        </Div>
    );
};

export default MenuToggle;
