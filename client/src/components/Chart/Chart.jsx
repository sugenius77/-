import { useEffect, useState } from 'react';
import ChartView from './ChartView';

const Chart = () => {
    const [windowSize, setWindowSize] = useState({
        width: (window.innerWidth / 10) * 7,
        height: window.innerHeight / 2,
    });
    const Resize = () => {
        setWindowSize(() => {
            const newWindowSize = {};
            newWindowSize.width = (window.innerWidth / 10) * 7;
            newWindowSize.height = window.innerHeight / 2;
            return newWindowSize;
        });
    };
    useEffect(() => {
        window.addEventListener('resize', Resize);
        return () => window.removeEventListener('resize', Resize);
    }, []);

    const [chartIdx, setChartIdx] = useState(0);
    const [modalToggle, setModalToggle] = useState(false);
    const modalHandler = () => {
        setModalToggle((cur) => !cur);
    };

    return (
        <div>
            <ChartView
                windowSize={windowSize}
                chartIdx={chartIdx}
                setChartIdx={setChartIdx}
                modalToggle={modalToggle}
                onClick={modalHandler}
            ></ChartView>
        </div>
    );
};

export default Chart;
