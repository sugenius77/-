import styled from 'styled-components';
import { useState } from 'react';
import api from '../../utils/api/api';

const ItemWrap = styled.div`
    .ItemWrap {
        width: 100%;
        background-color: #ffffff;
        border: 1px solid #888;
        @media screen and (max-width: 680px) {
            width: 100%;
            margin: 0;
        }
    }

    .ItemWrap-Top {
        display: flex;
        height: 35vh;
        background-color: #e2e5e7;
        color: #566270;
        font-size: 2.25rem;
        justify-content: center;
        text-align: center;
        align-items: center;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .ItemWrap-Body {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        font-size: 1rem;
        font-weight: bold;
        justify-content: center;
        display: flex;
        align-items: start;
    }

    .ItemWrap-Body-Left {
        display: flex;
        align-items: flex-start;
        justify-content: start;
        margin: auto;
        font-size: calc(1vw + 1vmin);

        @media screen and (max-width: 900px) {
            font-size: 1em;
        }
    }

    .ItemWrap-Rating {
        padding: 1vh 1vw;
        font-weight: bold;
        font-size: 2rem;
        display: flex;
        justify-content: right;
        align-items: center;
        background-color: #fec478;
        color: white;
        img {
            max-width: 3rem;
            min-width: calc(1vw+1vh+1vmin);
        }
        h3 {
            color: black;
        }
    }
`;
const Item = ({ imgSrc, menuName, rating, id }) => {
    const [toggle, setToggle] = useState(false);
    const [number, setNumber] = useState(rating);
    const plusHandler = () => {
        if (toggle === false) {
            setNumber((cur) => cur + 1);
            const res = api.menu.addLike(id);
            console.log(res);
        } else if (toggle === true) {
            setNumber((cur) => cur - 1);
            const res = api.menu.subLike(id);
            console.log(res);
        }
        setToggle((cur) => !cur);
    };
    return (
        <ItemWrap>
            <div className="ItemWrap">
                <div className="ItemWrap-Top ">
                    <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={`'메뉴이미지'`} />
                </div>
                <div className="ItemWrap-Rating">
                    <div className="ItemWrap-Body-Left ">{menuName}</div>
                    <div className="ItemWrap-Body-Right">
                        <button onClick={plusHandler}>
                            <img src={`${process.env.PUBLIC_URL}/${toggle ? 'heart_on.png' : 'heart_off.png'}`} alt="좋아요" />
                        </button>
                    </div>
                    <h3>{number}</h3>
                </div>
            </div>
        </ItemWrap>
    );
};

export default Item;
