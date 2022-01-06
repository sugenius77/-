import axios from 'axios';
class worldcup_rank {
    async getRank() {
        const res = axios.get('http://localhost:5000/worldcup/rank', {
            params: {},
        });
        return res;
    }
}

const menu = new Menu();
export default worldcup_rank;
