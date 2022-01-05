import styled from 'styled-components';

const Div = styled.div`
    background-color: yellow;
    display: flex;
    margin: 8px;
    flex-direction: column;
`;

const TitleDiv = styled.div`
    font-size: 32px;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    background-color: #fec478;
`;

const ImgDiv = styled.div`
    background-color: gray;
    img {
        object-fit: cover;
    }
`;

const FoodDiv = styled.div`
    font-size: 32px;
    background-color: #cae8f9;
`;
const Card = ({ title, path, food, onClick }) => {
    const clickHandler = () => {
        onClick(food);
    };

    return (
        <Div onClick={clickHandler}>
            <TitleDiv>{title}</TitleDiv>
            <ImgDiv>
                <img src={`${process.env.PUBLIC_URL}/images/3-4.png`} alt="사진" />
            </ImgDiv>
            <FoodDiv>{food}</FoodDiv>
        </Div>
    );
};

export default Card;
