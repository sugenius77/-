import axios from 'axios';
class Menu {
    async getMenu(id) {
        const res = axios.get('/food/menu', {
            params: {
                kindsID: id,
            },
        });
        return res;
    }
}

const menu = new Menu();
export default menu;
