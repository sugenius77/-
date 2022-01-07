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
            return this.getRealTime(nx, ny);
        }
    }
}

const realtime = new RealTime();
export default realtime;
