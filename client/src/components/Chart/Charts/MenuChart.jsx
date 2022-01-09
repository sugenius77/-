import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { menu } from '../../../utils/db';
import styled from 'styled-components';
const data = menu.data;
const menuColor = menu.menuColor;
const weatherColor = menu.weatherColor;
const food = menu.food;
const weather = menu.weather;

const Div = styled.div`
    h1 {
        margin: 5vh;
    }
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .active {
        background-color: #4a4f5a;
    }
`;
const Button = styled.button`
    color: ${(props) => props.color};
    background-color: #888e99;
    border: 1px solid #4a4f5a;
    width: 4em;
    font-size: 2vw;
    margin: 1vh 1vw;
    height: 2em;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`;

const TitleDiv = styled.div`
    width: 100%;
`;

const WeatherDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const WeatherButton = styled.button`
    background-color: #888e99;
    border: 1px solid #4a4f5a;
    width: 4em;
    font-size: 2vw;
    margin: 1vh 1vw;
    height: 1.5em;
    display: ${(props) => props.display};
    background-color: ${(props) => props.weatherColor};
    color: white;
`;

const MenuChart = ({ windowSize }) => {
    const [currentWeather, setCurrentWeather] = useState(['맑음']);
    const [foodData, setFoodData] = useState([...data]);
    const [foodArray, setFoodArray] = useState([...food]);
    const [toggle, setToggle] = useState({});

    useEffect(() => {
        setToggle(() => {
            const newToggle = {};
            for (let i = 0; i < food.length; i++) {
                newToggle[food[i]] = true;
            }
            return newToggle;
        });
    }, []);

    const weatherhandle = (e) => {
        const id = e.target.id;
        setCurrentWeather(() => {
            const newWeather = [];
            if (newWeather.includes(id)) {
                const idx = newWeather.indexOf(id);
                newWeather.splice(idx, 1);
            } else newWeather.push(id);

            // newWeather.sort((a, b) => (a === '비') - (b === '비') || a - b).sort((a, b) => (a === '눈') - (b === '눈') || a - b);
            return newWeather;
        });
    };

    const foodhandle = (e) => {
        const id = e.target.id;
        setFoodArray((cur) => {
            const newFood = [...cur];
            if (newFood.includes(id)) {
                const idx = newFood.indexOf(id);
                newFood.splice(idx, 1);
            } else newFood.push(id);
            return newFood;
        });
        setToggle((cur) => {
            const newToggle = { ...cur };
            newToggle[id] = !cur[id];
            return newToggle;
        });
        setFoodData(() => {
            const newFoodData = [];
            for (let i = 0; i < data.length; i++) {
                if (foodArray.includes(data[i].name)) {
                    newFoodData.push(data[i]);
                }
            }
            return newFoodData;
        });
    };
    return (
        <Div>
            <Title>
                <WeatherDiv>
                    {weather.map((weather, idx) => (
                        <WeatherButton
                            key={weather + idx}
                            id={weather}
                            display={currentWeather[0] === weather ? 'none' : ''}
                            onClick={weatherhandle}
                            weatherColor={weatherColor[weather]}
                        >
                            {weather}
                        </WeatherButton>
                    ))}
                </WeatherDiv>
                <TitleDiv>
                    <h1>업종별 주문량 추세</h1>
                </TitleDiv>
            </Title>
            <BarChart
                width={windowSize.width}
                height={(windowSize.height / 10) * 9}
                data={foodData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{ bottom: 0 }} />
                {currentWeather.map((bar, idx) => (
                    <Bar dataKey={bar} key={bar + idx} stackId="a" fill={weatherColor[bar]} />
                ))}
            </BarChart>
            <ButtonDiv>
                {food.map((key, idx) => (
                    <Button key={key + idx} className={toggle[key] ? 'active' : ''} id={key} color={menuColor[key]} onClick={foodhandle}>
                        {key}
                    </Button>
                ))}
            </ButtonDiv>
        </Div>
    );
};
export default MenuChart;
