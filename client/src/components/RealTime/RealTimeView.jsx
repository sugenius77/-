import styled from 'styled-components';
import Card from './Card';
import Loading from '../Loading';
import Recommendation from './Recommendation';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const RealTimeView = ({ loading, loadingPercent, setLoadingPercent, recommendHandler }) => {
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
            <Card recommendHandler={recommendHandler} />
        </Div>
    );
};

export default RealTimeView;
