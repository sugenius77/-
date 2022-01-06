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

    async addLike(menuId) {
        const res = axios.put('http://localhost:5000/food/like-add', {
            id: menuId,
        });
        console.log(res);
    }

    async subLike(menuId) {
        const res = axios.put('http://localhost:5000/food/like-sub', {
            id: menuId,
        });
        console.log(res);
    }
}

const menu = new Menu();
export default menu;
