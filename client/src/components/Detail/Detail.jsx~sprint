import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import api from '../../utils/api/api';
import Item from './Item';
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
    }, []);

    return (
        <Div>
            <div className="title">
                <h1>추천 메뉴 입니다</h1>
            </div>
            <Container>
                <Slider {...settings}>
                    {menuData.map((menu, idx) => {
                        return (
                            <Item
                                key={menu + idx}
                                imgSrc={menu.image_url}
                                menuName={menu.menu_name}
                                rating={menu.toggle_rating}
                                id={menu.menu_id}
                            />
                        );
                    })}
                </Slider>
            </Container>
        </Div>
    );
};

export default Detail;
