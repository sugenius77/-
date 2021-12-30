import { useState, useMemo } from 'react';
import styled from 'styled-components';
import Loading from '../../Loading';
import Card from './Card';
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RealTime = () => {
    const [loadingPercent, setLoadingPercent] = useState(0);

    const loading = useMemo(() => (loadingPercent === 125 ? true : false), [loadingPercent]);

    return (
        <Div>
            {!loading && <Loading loadingPercent={loadingPercent} />}
            <p>{loadingPercent}</p>
            <button
                onClick={() => {
                    setLoadingPercent((cur) => cur + 25);
                }}
            >
                버튼
            </button>
            <button
                onClick={() => {
                    setLoadingPercent(0);
                }}
            >
                초기화
            </button>
            <Card />
        </Div>
    );
};

export default RealTime;
