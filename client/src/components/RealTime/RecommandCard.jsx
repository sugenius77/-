import styled from 'styled-components';

const Div = styled.div`
    max-width: 50%;
    background-color: yellow;
    display: flex;
    flex-direction: row;
`;

const TitleDiv = styled.div`
    font-size: 32px;
    background-color: #fec478;
`;

const FoodDiv = styled.div`
    font-size: 32px;
    background-color: #cae8f9;
`;
const RecommendCard = ({ title, path, food, onClick }) => {
    const clickHandler = () => {
        onClick(food);
    };

    return (
        <Div onClick={clickHandler}>
            <TitleDiv>{title}</TitleDiv>
            <div style={{ height: '512px', backgroundColor: 'gray' }}>
                <img src={`${process.env.PUBLIC_URL}/images/3-4.png`} alt="사진" />
            </div>
            <FoodDiv>{food}</FoodDiv>
        </Div>
    );
};

export default RecommendCard;
