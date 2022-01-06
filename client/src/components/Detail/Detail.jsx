import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../../utils/api/api';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Div = styled.div`
    min-height: 100vh;
    background-color: #cae8f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
        margin: 10vh;
        width: 50vw;
        height: 25vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3vw;
        background-color: #fec478;
    }
    @media screen and (max-width: 680px) {
        display: flex;
        flex-direction: column;
    }
`;

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

const Container = styled.div`
    overflow: hidden;
    background-color: #cae8f9;
    width: 100%;

    .slick-prev {
        left: 3% !important;
        z-index: 1;
    }
    .slick-next {
        right: 3% !important;
        z-index: 1;
    }
`;

const Detail = () => {
    const { id } = useParams();
    const [menuData, setMenu] = useState([]);
    const [loading, setLoading] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: innerWidth / 480,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
    };

    const getInnerWidth = () => {
        setInnerWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', getInnerWidth);
        return () => window.removeEventListener('resize', getInnerWidth);
    }, []);

    const getRealTime = useCallback(async () => {
        const res = await api.menu.getMenu(id);
        console.log(res);
        setMenu(() => {
            const newMenu = [...res.data];
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
            <div className="title">
                <h1>추천 메뉴 입니다</h1>
            </div>
            <Container>
                <Slider {...settings}>
                    {menuData.map((menu, idx) => {
                        return (
                            <div>
                                <Item
                                    key={idx}
                                    imgSrc={menu.image_url}
                                    menuName={menu.menu_name}
                                    rating={menu.toggle_rating}
                                    id={menu.menu_id}
                                />
                            </div>
                        );
                    })}
                </Slider>
                {/* <ScrollView ref={ref}>Element {inView.toString()}</ScrollView> */}
            </Container>
        </Div>
    );
};

export default Detail;
