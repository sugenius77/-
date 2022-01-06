import Card from './Card';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
    body {
        color: red;
    }

    @media screen and (max-width: 600px) {
        display:flex;
        flex-direction:column;
    } 
}
`;

const Recommendation = ({ recommendHandler, data }) => {
    return (
        <Div>
            {data.map((info) => (
                <Card
                    key={info?.value}
                    id={info?.kinds_id}
                    title={info?.value}
                    path={info?.image_url}
                    food={info?.kinds_name}
                    onClick={recommendHandler}
                />
            ))}
        </Div>
    );
};
export default Recommendation;
