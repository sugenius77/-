import styled from 'styled-components';
import Loading from '../Loading';
import Recommendation from './Recommendation';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const RealTimeView = ({ loading, loadingPercent, recommendHandler, data }) => {
    return (
        <Div>
            {!loading && <Loading loadingPercent={loadingPercent} />}
            {loading && data.length > 2 && <Recommendation recommendHandler={recommendHandler} data={data} />}
        </Div>
    );
};

export default RealTimeView;
