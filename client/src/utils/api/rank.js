import axios from 'axios';
class Rank {
    async getRank() {
        const res = axios.get('http://localhost:5000/worldcup/rank', {
            params: {},
        });
        return res;
    }
}

const rank = new Rank();
export default rank;
