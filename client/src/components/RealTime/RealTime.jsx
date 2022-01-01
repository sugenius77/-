import { createContext, useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RealTimeView from './RealTimeView';
import axios from 'axios';
export const RealTimeContext = createContext();

const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const RealTime = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const loading = useMemo(() => (loadingProgress === 125 ? true : false), [loadingProgress]);

    const history = useHistory();
    const recommendHandler = (id) => {
        console.log(id);
        history.push('/detail/' + id);
    };

    const [lotation, setLotation] = useState({});
    const success = (pos) => {
        console.log('success 호출');
        console.log(pos);
        let crd = pos.coords;
        let timestamp = pos.timestamp;
        setLotation(() => {
            const newLotation = {};
            newLotation.latitude = crd.latitude;
            newLotation.longtitude = crd.longtitude;
            newLotation.day = WEEKDAY[new Date(timestamp).getDay()];
            newLotation.hours = new Date(timestamp).getHours();
            newLotation.minutes = new Date(timestamp).getMinutes();
            return newLotation;
        });
    };
    // const getWeather = useCallback(async () => {
    //     if (Object.keys(lotation).length >= 2) {
    //         const res = await api.weather.getPTY();
    //         if (res) {
    //             console.log(res);
    //         } else {
    //             console.log('getWeather 오류');
    //         }
    //     }
    //     console.log('getWeather 호출');
    //     console.log(lotation);
    // }, [lotation]);

    useEffect(() => {
        const locationWatchId = navigator.geolocation.watchPosition(success, console.log('error'));
        setLoadingProgress((cur) => cur + 25);
        return () => navigator.geolocation.clearWatch(locationWatchId);
    }, []);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
            params: {
                serviceKey: 'y0g%2Fa5rg15oSMXYYVZyErtu%2BUVmJSyn4JXkrl8FM6VKKxwCfvIjopgp1KQMhGJyt7EHFQ6OZv99R%2ByxDNht15Q%3D%3D',
                numOfRows: '10',
                pageNo: '1',
                dataType: 'JSON',
                base_date: '20211231',
                base_time: '0200',
                nx: '55',
                ny: '127',
            },
        })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    }, [lotation]);

    return (
        <RealTimeContext.Provider
            value={{
                loadingPercent: loadingProgress,
                loading: loading,
                setLoadingPercent: setLoadingProgress,
                lotation: lotation,
                recommendHandler: recommendHandler,
            }}
        >
            <RealTimeView />
        </RealTimeContext.Provider>
    );
};

export default RealTime;
