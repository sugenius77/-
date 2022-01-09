import { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart } from 'recharts';
import { week } from '../../../utils/db';
import styled from 'styled-components';
const data = week.data;
const color = week.color;
const food = week.food;

const Div = styled.div`
    h1 {
        margin-top: 5vh;
    }
`;

const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .active {
        background-color: #4a4f5a;
    }

    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(4, 1fr);
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

    @media screen and (max-width: 640px) {
        width: 4em;
        font-size: 4vw;
    }
`;

const WeekChart = ({ windowSize }) => {
    const [Lines, setLines] = useState([...food]);
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

    const foodhandle = (e) => {
        const id = e.target.id;
        setLines((cur) => {
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
        console.log(id);
    };
    return (
        <Div>
            <h1>요일별 업종 주문량 추세</h1>
            <LineChart width={windowSize.width} height={windowSize.height} data={data} margin={{ top: 50, right: 50, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" label={{ value: '건', offset: 10, angle: 0, position: 'top' }} />
                <Tooltip />
                {windowSize.width > 640 && <Legend />}
                {Lines.map((food, idx) => (
                    <Line
                        yAxisId="left"
                        key={'line' + food + idx}
                        type="monotone"
                        dataKey={food.name ? food.name : food}
                        barSize={30}
                        stroke={color[food]}
                    />
                ))}
            </LineChart>
            <ButtonDiv>
                {food.map((key, idx) => (
                    <Button key={key + idx} className={toggle[key] ? 'active' : ''} id={key} color={color[key]} onClick={foodhandle}>
                        {key}
                    </Button>
                ))}
            </ButtonDiv>
        </Div>
    );
};

export default WeekChart;
