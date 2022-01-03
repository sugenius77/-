import axios from 'axios';
class Menu {
    async getMenu(id) {
        const res = axios
            .get('/food/menu', {
                params: {
                    kindsId: id,
                },
            })
            .then((res) => JSON.stringify(res))
            .catch((err) => err);
        return res;
    }
}

const menu = new Menu();
export default menu;
