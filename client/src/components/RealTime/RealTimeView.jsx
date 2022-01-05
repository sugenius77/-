import styled from 'styled-components';
import Loading from '../Loading';
import Recommendation from './Recommendation';

const Div = styled.div`
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const RealTimeView = ({ loading, loadingPercent, recommendHandler, data }) => {
    return (
        <Div>
            {!loading && <Loading loadingPercent={loadingPercent} />}
            {loading && <Recommendation recommendHandler={recommendHandler} data={data} />}
        </Div>
    );
};

export default RealTimeView;
