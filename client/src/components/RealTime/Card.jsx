import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleDiv = styled.div`
    font-size: 2rem;
    font-weight: bold;
    height: 5vh;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: white;
    background-color: #fec478;
`;

const ImgDiv = styled.div`
    display: flex;
    height: 80vh;
    align-items: center;
    background-color: gray;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const FoodDiv = styled.div`
    font-size: 2rem;
    height: 5vh;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cae8f9;
`;
const Card = ({ title, path, food, onClick }) => {
    const clickHandler = () => {
        onClick(food);
    };

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
