import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import api from '../../utils/api/api';

const Div = styled.div`
    width: 100%;
    height: 100vh;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: #cae8f9;
`;

const ItemWrap = styled.div`
    .ItemWrap {
        width: 350px;
        height: 370px;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        margin: 10vw 30vh;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 6px;
    }

    .ItemWrap-Top {
        display: flex;
        width: 350px;
        height: 170px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #e2e5e7;
        color: #566270;
        font-size: 2.25rem;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    .ItemWrap-Body {
        height: 200px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        padding: 10px;
    }

    .ItemWrap-Body-Title {
        width: 300px;
        height: 36px;
        margin: 16px;
        border-radius: 4px;
        background-color: #e2e5e7;
    }
`;

const Item = ({ imgSrc, menuName, rating }) => {
    return (
        <ItemWrap>
            <div className="ItemWrap">
                <div className="ItemWrap-Top ">
                    <img src={`${process.env.PUBLIC_URL + imgSrc}.jpg`} alt={`'메뉴이미지'`} />
                </div>
                <div className="ItemWrap-Body">
                    <div className="ItemWrap-Body-Title ">{menuName}</div>
                    <div className="ItemWrap-Body-Title ">{rating}</div>
                </div>
            </div>
        </ItemWrap>
    );
};

const ScrollView = styled.div`
    ref: ${({ ref }) => ref};
`;
const Detail = () => {
    const { id } = useParams();
    const [menuData, setMenu] = useState([]);
    const [ref, inView] = useInView();
    const [loading, setLoading] = useState(false);

    const getRealTime = useCallback(async () => {
        const res = await api.menu.getMenu(id);
        console.log(res);
        setMenu((cur) => {
            const newMenu = [...cur];
            newMenu.push({ menu_name: 'BBQ', image_url: '/introduce/introduce_2', toggle_rating: 14 });
            newMenu.push({ menu_name: 'BHC', image_url: '/introduce/introduce_1', toggle_rating: 13 });
            newMenu.push({ menu_name: '치킨플러스', image_url: '/introduce/introduce_0', toggle_rating: 14 });
            newMenu.push({ menu_name: 'BBQ', image_url: '/introduce/introduce_2', toggle_rating: 14 });
            newMenu.push({ menu_name: 'BHC', image_url: '/introduce/introduce_1', toggle_rating: 13 });
            newMenu.push({ menu_name: '치킨플러스', image_url: '/introduce/introduce_0', toggle_rating: 14 });
            return newMenu;
        });
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        getRealTime();
        //eslint-disable-next-line
    }, [getRealTime]);

    return (
        <Div>
            {menuData.map((menu, idx) => {
                return <Item key={idx} imgSrc={menu.image_url} menuName={menu.menu_name} rating={menu.toggle_rating} />;
            })}
            {/* <ScrollView ref={ref}>Element {inView.toString()}</ScrollView> */}
        </Div>
    );
};

export default Detail;
