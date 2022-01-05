import axios from 'axios';
class Menu {
    async getMenu(id) {
        const res = axios.get('http://localhost:5000/food/menu', {
            params: {
                kindsID: id,
            },
        });
        return res;
    }
}

const menu = new Menu();
export default menu;
