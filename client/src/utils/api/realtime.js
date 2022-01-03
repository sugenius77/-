import axios from 'axios';
class RealTime {
    async getRealTime(nx, ny) {
        const res = await axios.get('http://127.0.0.1:5000/food/recommendation', {
            params: {
                nx: nx,
                ny: ny,
            },
        });
        return res;
    }
}

const realtime = new RealTime();
export default realtime;
