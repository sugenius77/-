import { createContext, useState, useMemo, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import RealTimeView from './RealTimeView';
import api from '../../utils/api/api';
export const RealTimeContext = createContext();

//import useCurrentLocation from '../../utils/hooks/useCurrentLocation';
// const geolocationOptions = {
//     enableHighAccuracy: true,
//     timeout: 1000 * 60 * 1,
//     maximumAge: 1000 * 3600 * 24,
// };

const RealTime = () => {
    const [loadingPercent, setLoadingPercent] = useState(0);
    // const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
    const [data, setData] = useState([]);
    const history = useHistory();
    const loading = useMemo(() => (loadingPercent >= 125 ? true : false), [loadingPercent]);

    const recommendHandler = (id) => {
        console.log(id);
        history.push('/detail/' + id);
    };

    const getRealTime = useCallback(async () => {
        // let nx = parseInt(currentLocation.latitude);
        // let ny = parseInt(currentLocation.longitude);
        let nx = 37;
        let ny = 127;
        const res = await api.realtime.getRealTime(nx, ny);
        if (res.data !== '500 server error') {
            console.log(res);
            setData(() => {
                const newData = [...res.data];
                return newData;
            });
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 50);
            }, 2000);
            //eslint-disable-next-line
        } else {
            setData((cur) => {
                const newData = [[...cur]];
                newData.push([...cur]);
                return newData;
            });
        }
    }, []);

    // useEffect(() => {
    //     if (!currentLocation) {
    //         console.log(currentError);
    //         return;
    //     } else if (data.length <= 1) {
    //         getRealTime();
    //     }
    //     //eslint-disable-next-line
    // }, [getRealTime]);

    useEffect(() => {
        if (data.length > 0) {
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 50);
            }, 4000);
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 25);
            }, 5000);
        }
    }, [data]);

    useEffect(() => {
        getRealTime();
        //eslint-disable-next-line
    }, [getRealTime]);

    return (
        <RealTimeView
            loading={loading}
            recommendHandler={recommendHandler}
            setLoadingPercent={setLoadingPercent}
            loadingPercent={loadingPercent}
            data={data}
        />
    );
};

export default RealTime;
