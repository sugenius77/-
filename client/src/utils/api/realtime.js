import axios from 'axios';
class RealTime {
    async getRealTime(nx, ny) {
        axios
            .get('/food/recommendation', {
                params: {
                    nx: nx,
                    ny: ny,
                },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
}

const realtime = new RealTime();
export default realtime;
