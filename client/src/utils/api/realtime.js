import axios from 'axios';
class RealTime {
    async getRealTime(nx, ny) {
        const res = axios.get('/food/recommendation', {
            params: {
                nx: nx,
                ny: ny,
            },
        });
        return res ? res : 'error';
    }
}

const realtime = new RealTime();
export default realtime;
