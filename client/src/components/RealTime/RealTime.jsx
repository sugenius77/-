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
    const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
    const [data, setData] = useState(undefined);
    const history = useHistory();
    const loading = useMemo(() => (loadingPercent >= 125 ? true : false), [loadingPercent]);

    const RealTime = () => {
        const [loadingPercent, setLoadingPercent] = useState(0);
        const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
        const [data, setData] = useState([]);
        const history = useHistory();
        const loading = useMemo(() => (loadingPercent >= 125 ? true : false), [loadingPercent]);

        const recommendHandler = (id) => {
            console.log(id);
            history.push('/detail/' + id);
        };

        const getRealTime = useCallback(async () => {
            let nx = parseInt(currentLocation.latitude);
            let ny = parseInt(currentLocation.longitude);
            const res = await api.realtime.getRealTime(nx, ny);
            if (res.data !== '500 server error') {
                console.log(res);
                setData(() => {
                    const newData = [...res.data];
                    return newData;
                });
                setTimeout(() => {
                    setLoadingPercent((cur) => cur + 25);
                    setLoadingPercent((cur) => cur + 25);
                }, 2000);
                //eslint-disable-next-line
            } else {
                setData((cur) => {
                    const newData = [[...cur]];
                    newData.push([...cur]);
                    return newData;
                });
            }
        }, [currentLocation]);

        useEffect(() => {
            if (!currentLocation) {
                console.log(currentError);
                return;
            } else if (data.length <= 1) {
                getRealTime();
            }
            //eslint-disable-next-line
        }, [getRealTime]);

        useEffect(() => {
            if (data.length > 0) {
                setTimeout(() => {
                    setLoadingPercent((cur) => cur + 25);
                }, 4000);
                setTimeout(() => {
                    setLoadingPercent((cur) => cur + 20);
                }, 5000);
                setTimeout(() => {
                    setLoadingPercent((cur) => cur + 20);
                }, 1000);
            }
        }, [data]);

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
                setLoadingPercent={setLoadingPercent}
                loadingPercent={loadingPercent}
                data={data}
            />
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setLoadingPercent((cur) => cur + 25);
        }, 1000);
        return () => {
            setLoadingPercent(0);
        };
    }, []);

    const getRealTime = useCallback(async () => {
        let nx = parseInt(currentLocation.latitude);
        let ny = parseInt(currentLocation.longitude);
        const res = await api.realtime.getRealTime(nx, ny);
        if (res.data !== undefined) {
            console.log(res);
            setData(() => {
                const newData = [...res.data];
                return newData;
            });
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 25);
                setLoadingPercent((cur) => cur + 25);
            }, 2000);
            //eslint-disable-next-line
        } else {
            setData((cur) => {
                const newData = [[...cur]];
                newData.push([...cur]);
                return newData;
            });
        }
    }, [currentLocation]);

    useEffect(() => {
        if (!currentLocation) {
            console.log(currentError);
            return;
        } else {
            getRealTime();
        }
        //eslint-disable-next-line
    }, [getRealTime]);

    useEffect(() => {
        if (Array.isArray(data)) {
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 25);
            }, 4000);
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 20);
            }, 5000);
            setTimeout(() => {
                setLoadingPercent((cur) => cur + 20);
            }, 1000);
        }
    }, [data]);

    useEffect(() => {
        console.log(data);
    }, [data]);

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
