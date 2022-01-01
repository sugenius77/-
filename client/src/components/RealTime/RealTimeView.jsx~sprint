import styled from 'styled-components';
import { RealTimeContext } from './RealTime';
import Card from './Card';
import Loading from '../Loading';

const Div = styled.div`
    display: flex;
    top: 35vh;
    flex-direction: column;
    justify-content: center;
`;
const RealTimeView = () => {
    return (
        <RealTimeContext.Consumer>
            {({ loading, loadingPercent, setLoadingPercent }) => (
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
            )}
        </RealTimeContext.Consumer>
    );
};

export default RealTimeView;
