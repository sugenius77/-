const data = [
    {
        name: '디저트',
        맑음: 21587,
        비: 1438,
        눈: 214,
    },
    {
        name: '양식',
        맑음: 14624,
        비: 1077,
        눈: 162,
    },
    {
        name: '치킨',
        맑음: 11638,
        비: 831,
        눈: 132,
    },
    {
        name: '분식',
        맑음: 11153,
        비: 818,
        눈: 90,
    },
    {
        name: '한식',
        맑음: 10194,
        비: 635,
        눈: 108,
    },
    {
        name: '회',
        맑음: 7019,
        비: 467,
        눈: 81,
    },
    {
        name: '피자',
        맑음: 4626,
        비: 266,
        눈: 46,
    },
    {
        name: '도시락',
        맑음: 3935,
        비: 23,
        눈: 46,
    },
    {
        name: '중식',
        맑음: 3797,
        비: 230,
        눈: 49,
    },
    {
        name: '일식',
        맑음: 3477,
        비: 241,
        눈: 46,
    },
    {
        name: '돈까스',
        맑음: 2756,
        비: 161,
        눈: 38,
    },
    {
        name: '햄버거',
        맑음: 1392,
        비: 107,
        눈: 23,
    },
];
const weather = ['맑음', '비', '눈'];
const food = ['디저트', '양식', '치킨', '한식', '분식', '회', '중식', '일식', '피자', '도시락', '돈까스', '햄버거'];
const weatherColor = { 맑음: '#a4d9f5', 비: '#8884d8', 눈: '#fec478' };
const menuColor = {
    디저트: 'red',
    양식: 'yellowGreen',
    치킨: 'orange',
    한식: '#A5C9FF',
    분식: '#FF5D6C',
    회: '#EDA5FF',
    중식: '#A5FFC9',
    일식: '#FFA5A5',
    피자: '#FFECA5',
    도시락: '#C8A5FF',
    돈까스: '#705EFF',
    햄버거: '#5DFFF0',
};
const menu = { data: data, weather: weather, food: food, weatherColor: weatherColor, menuColor: menuColor };
export default menu;
