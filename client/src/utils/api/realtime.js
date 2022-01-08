import axios from 'axios';
class RealTime {
    async getRealTime(nx, ny) {
        try {
            return await axios.get('http://localhost:5000/food/recommendation', {
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
