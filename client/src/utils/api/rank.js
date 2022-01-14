import axios from 'axios';
class Rank {
    async getRank() {
        const res = axios.get('http://elice-kdt-3rd-team-09.koreacentral.cloudapp.azure.com/worldcup/rank', {
            params: {},
        });
        return res;
    }
}

const rank = new Rank();
export default rank;
