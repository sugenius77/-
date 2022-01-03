import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleDiv = styled.div`
    font-size: 2rem;
    font-weight: bold;
    height: 5vh;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: white;
    background-color: #fec478;
`;

const ImgDiv = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    background-color: gray;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Card = ({ recommendHandler }) => {
    return (
        <Div>
            <RecommendCard key={'날씨'} title="맑음" path="이미지 경로1" food="치킨" onClick={recommendHandler} />
            <RecommendCard key={'요일'} title={'월요알'} path="이미지 경로2" food="중식" onClick={recommendHandler} />
            <RecommendCard key={'시간'} title={'시분'} path="이미지 경로3" food="양식" onClick={recommendHandler} />
        </Div>
    );
};

export default Card;
