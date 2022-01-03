import RecommendCard from './RecommandCard';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin: auto;
    bottom: 0;
    direction: row;
    justify-content: space-between;
    align-items: center;
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
