import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../../utils/api/api';

const Div = styled.div`
    padding-top: 10vh;
    display: grid;
    place-items: center;
    justify-content: center;
    min-height: 100vh;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: #cae8f9;
`;

const ItemWrap = styled.div`
    .ItemWrap {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 6px;
        margin: 0 1vw;
    }

    .ItemWrap-Top {
        display: flex;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        background-color: #e2e5e7;
        color: #566270;
        font-size: 2.25rem;
        justify-content: center;
        text-align: center;
        align-items: center;

        img {
            object-fit: cover;
        }
    }

    .ItemWrap-Body {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        margin-top: -3vh;
        font-size: 1rem;
        font-weight: bold;
        justify-content: center;
        display: flex;
        align-items: start;
    }

    .ItemWrap-Body-Title {
        width: 300px;
        height: 36px;
        margin: 16px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e2e5e7;
    }

    .ItemWrap-Rating {
        padding: 8px 12px;
        font-weight: bold;
        font-size: 2rem;
        display: flex;
        justify-content: right;
    }
`;

const Item = ({ imgSrc, menuName, rating }) => {
    const [toggle, setToggle] = useState(false);
    const [number, setNumber] = useState(rating);
    const plusHandler = () => {
        if (toggle == false) {
            setNumber((cur) => cur + 1);
        } else if (toggle === true) {
            setNumber((cur) => cur - 1);
        }
        setToggle((cur) => !cur);
    };
    return (
        <ItemWrap>
            <div className="ItemWrap">
                <div className="ItemWrap-Top ">
                    <img src={`${process.env.PUBLIC_URL}/images/1-1.png`} alt={`'메뉴이미지'`} />
                </div>
                <div className="ItemWrap-Body">
                    <div className="ItemWrap-Body-Title ">{menuName}</div>
                </div>
                <div className="ItemWrap-Rating">
                    <button onClick={plusHandler}>하트 버튼</button>
                    {number}
                </div>
            </div>
        </ItemWrap>
    );
};

const Detail = () => {
    const { id } = useParams();
    const [menuData, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);

    const getRealTime = useCallback(async () => {
        const res = await api.menu.getMenu(id);
        console.log(res);
        setMenu((cur) => {
            const newMenu = [];
            newMenu.push({ menu_name: 'BBQ', image_url: '/introduce/introduce_2', toggle_rating: 14 });
            newMenu.push({ menu_name: 'BHC', image_url: '/introduce/introduce_1', toggle_rating: 13 });
            newMenu.push({ menu_name: '치킨플러스', image_url: '/introduce/introduce_0', toggle_rating: 14 });
            newMenu.push({ menu_name: 'BBQ', image_url: '/introduce/introduce_2', toggle_rating: 14 });
            newMenu.push({ menu_name: 'BHC', image_url: '/introduce/introduce_1', toggle_rating: 13 });
            newMenu.push({ menu_name: '치킨플러스', image_url: '/introduce/introduce_0', toggle_rating: 14 });
            return newMenu;
        });
        //eslint-disable-next-line
    }, [id]);
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
