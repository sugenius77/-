import axios from 'axios';
class Menu {
    async getMenu(id) {
        const res = axios.get('http://elice-kdt-3rd-team-09.koreacentral.cloudapp.azure.com/food/menu', {
            params: {
                kindsID: id,
            },
        });
        return res;
    }

    async addLike(menuId) {
        axios
            .put('http://elice-kdt-3rd-team-09.koreacentral.cloudapp.azure.com/food/like', {
                menu_id: menuId,
            })
            .catch((err) => console.log(err));
    }

    async subLike(menuId) {
        axios
            .put('http://elice-kdt-3rd-team-09.koreacentral.cloudapp.azure.com/food/dislike', {
                menu_id: menuId,
            })
            .catch((err) => console.log(err));
    }
}

const menu = new Menu();
export default menu;
