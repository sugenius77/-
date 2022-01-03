import { createContext, useState, useMemo, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import RealTimeView from './RealTimeView';
import api from '../../utils/api/api';
import useCurrentLocation from '../../utils/hooks/useCurrentLocation';
export const RealTimeContext = createContext();

// const WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60 * 1,
    maximumAge: 1000 * 3600 * 24,
};

const RealTime = () => {
    const [loadingPercent, setLoadingPercent] = useState(0);
    const loading = useMemo(() => (loadingPercent === 125 ? true : false), [loadingPercent]);
    const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);

    const history = useHistory();
    const recommendHandler = (id) => {
        console.log(id);
        history.push('/detail/' + id);
    };
    const getRealTime = useCallback(async (latitude, longitude) => {
        let nx = parseInt(latitude);
        let ny = parseInt(longitude);
        const res = await api.realtime.getRealTime(nx, ny);
        console.log(res);
        console.log(currentLocation);
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!currentLocation) {
            console.log(currentError);
            return;
        } else {
            getRealTime(currentLocation.latitude, currentLocation.longitude);
        }
        //eslint-disable-next-line
    }, []);

    return (
        <RealTimeView
            loading={loading}
            recommendHandler={recommendHandler}
            setLoadingProgress={setLoadingPercent}
            loadingProgress={loadingPercent}
        />
    );
};

export default RealTime;
