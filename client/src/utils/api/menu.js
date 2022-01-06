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

    async addLike(menuId) {
        const res = axios.put('/food/like-add', {
            id: menuId,
        });
        console.log(res);
    }

    async subLike(menuId) {
        const res = axios.put('/food/like-sub', {
            id: menuId,
        });
        console.log(res);
    }
}

const menu = new Menu();
export default menu;
