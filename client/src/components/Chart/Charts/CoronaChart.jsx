import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { corona } from '../../../utils/db';
import styled from 'styled-components';

const data = corona.data;
const Div = styled.div`
    h1 {
        margin-top: 5vh;
    }
`;

const CoronaChart = ({ windowSize }) => {
    return (
        <Div>
            <h1>코로나 확진자 수 및 배달 주문량의 증가 추세</h1>
            <AreaChart
                width={windowSize.width}
                height={windowSize.height * 1.25}
                data={data}
                margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" label={{ value: '건', offset: 10, angle: 0, position: 'top' }} />
                <YAxis yAxisId="right" label={{ value: '명', offset: 10, angle: 0, position: 'top' }} orientation="right" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="양성" barSize={30} stroke="#8884d8" fillOpacity={0.5} fill="url(#colorUv)" />
                <Area yAxisId="right" type="monotone" dataKey="배달량" stroke="#82ca9d" fillOpacity={0.5} fill="url(#colorPv)" />
            </AreaChart>
        </Div>
    );
};

export default CoronaChart;
