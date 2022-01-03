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
        axios
            .put('/food/like', {
                menu_id: menuId,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    async subLike(menuId) {
        axios
            .put('/food/dislike', {
                menu_id: menuId,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
}

const menu = new Menu();
export default menu;
