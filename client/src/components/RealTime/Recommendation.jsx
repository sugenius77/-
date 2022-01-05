import Card from './Card';
import styled from 'styled-components';

const Div = styled.div`
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
                    title={info?.value}
                    path={info?.image_url[0]}
                    food={info?.kinds_name[0]}
                    onClick={recommendHandler}
                />
            ))}
            {data.map((info) => (
                <Card
                    key={info?.value}
                    title={info?.value}
                    path={info?.image_url[1]}
                    food={info?.kinds_name[1]}
                    onClick={recommendHandler}
                />
            ))}

            {/*<RecommendCard key="weather" title={data.weather.weather} path="이미지 경로3" food="양식" onClick={recommendHandler} /> */}
        </Div>
    );
};
export default Recommendation;
