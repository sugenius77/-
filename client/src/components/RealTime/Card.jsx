import RecommendCard from './RecommandCard';
import styled from 'styled-components';
import { RealTimeContext } from './RealTime';

const Div = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20vh;
    display: flex;
    bottom: 0;
    direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Card = () => {
    return (
        <RealTimeContext.Consumer>
            {({ lotation, recommendHandler }) => (
                <Div>
                    <RecommendCard key={'날씨'} title="맑음" path="이미지 경로1" food="치킨" onClick={recommendHandler} />
                    <RecommendCard key={'요일'} title={lotation.day} path="이미지 경로2" food="중식" onClick={recommendHandler} />
                    <RecommendCard
                        key={'시간'}
                        title={lotation.hours + '시 ' + lotation.minutes + '분'}
                        path="이미지 경로3"
                        food="양식"
                        onClick={recommendHandler}
                    />
                </Div>
            )}
        </RealTimeContext.Consumer>
    );
};
export default Card;
