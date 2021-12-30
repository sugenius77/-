import RecommendCard from './RecommandCard';
import styled from 'styled-components';
import { useState, useEffect } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom';

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    direction: row;
    justify-content: space-between;
`;

const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const Card = () => {
    const history = useHistory();
    const recommendHandler = (id) => {
        console.log(id);
        history.push('/recommend/' + id);
    };

    const [lotation, setLotation] = useState({});
    const [timeStamp, setTimeStamp] = useState(new Date());
    const success = (pos) => {
        console.log(pos);
        let crd = pos.coords;
        setTimeStamp(new Date(pos.timestamp));
        setLotation((cur) => {
            const newLotation = { ...cur };
            newLotation.latitude = crd.latitude;
            newLotation.longtitude = crd.longtitude;
            return newLotation;
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, console.log('error'));
        console.log('위도 : ' + lotation.latitude + ' 경도 : ' + lotation.longtitude);
    }, []);

    return (
        <Div>
            <RecommendCard key={'날씨'} title="맑음" path="이미지 경로1" food="치킨" onClick={recommendHandler} />
            <RecommendCard key={'요일'} title={WEEKDAY[timeStamp.getDay()]} path="이미지 경로2" food="중식" onClick={recommendHandler} />
            <RecommendCard
                key={'시간'}
                title={timeStamp.getHours() + '시 ' + timeStamp.getMinutes() + '분'}
                path="이미지 경로3"
                food="양식"
                onClick={recommendHandler}
            />
        </Div>
    );
};
export default Card;
