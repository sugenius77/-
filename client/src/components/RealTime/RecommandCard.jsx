import styled from 'styled-components';

const Div = styled.div`
    width: 33%;
    background-color: yellow;
    display: flex;
    flex-direction: column;
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
        <Div onMouseUp={clickHandler}>
            <TitleDiv>{title}</TitleDiv>
            <div style={{ height: '512px', backgroundColor: 'gray' }}>{path}</div>
            <FoodDiv>{food}</FoodDiv>
        </Div>
    );
};

export default RecommendCard;
