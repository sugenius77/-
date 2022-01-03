import axios from 'axios';
class RealTime {
    async getRealTime(nx, ny) {
        try {
            return await axios.get('/food/recommendation', {
                params: {
                    nx: nx,
                    ny: ny,
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
}

const realtime = new RealTime();
export default realtime;
