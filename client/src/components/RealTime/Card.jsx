import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    bottom: 0;
    direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Card = ({ recommendHandler, data }) => {
    return (
        <Div>
            {data.map((info) => (
                <RecommendCard
                    key={info?.value}
                    title={info?.value}
                    path={info?.image_url[0]}
                    food={info?.kinds_name[0]}
                    onClick={recommendHandler}
                />
            ))}

            {/*<RecommendCard key="weather" title={data.weather.weather} path="이미지 경로3" food="양식" onClick={recommendHandler} /> */}
        </Div>
    );
};

export default Card;
