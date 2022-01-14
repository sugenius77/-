import { useState, useEffect, useRef } from 'react';
import Slide from './Slide';
import styled from 'styled-components';
import axios from 'axios';
import RandomView from './RandomView';

const H2 = styled.h2`
    color: ${(props) => props.color};
    display: inline;
`;

function Random() {
    const [data, setData] = useState([]);
    const [choice, setChoice] = useState(-1);
    const urlErrorCheck = (url_) => {
        let result = '';
        for (let i = 0; i < url_.length; i++) {
            result = result + url_[i];
            if (url_[i] === 's' && url_[i + 1] !== '/') {
                result = result + '/';
            }
        }
        return result;
    };

    useEffect(async () => {
        try {
            await axios.get(`http://elice-kdt-3rd-team-09.koreacentral.cloudapp.azure.com/worldcup/rank`).then((test) => {
                // console.log(test.data, 'test');

                [test].map((res) => setData(...data, res.data));
            });
        } catch (error) {
            console.log('worldcup/rank' + '-error', error);
        }
    }, []);
    const TOTAL_SLIDES = 64;
    const slide_ = data.map((res, index) => {
        if (index <= TOTAL_SLIDES) {
            return <Slide key={index} img={`${urlErrorCheck(res[2])}`} />;
        } else {
            return undefined;
        }
    });

    const imageRef = useRef(null);
    const animation = () => {
        console.log('ereree');
        imageRef.current.style.transitionProperty = 'all';
        imageRef.current.style.transitionDuration = `${2}s`;
        imageRef.current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2 ,1)';
        imageRef.current.style.transitionDelay = `${2}s`;
        imageRef.current.style.transform = 'translate3d(0, 0, 0)';
        // imageRef.current.style.transform = 'translateX(300px) scaleX(1.5)';
        imageRef.current.style.transform = 'scaleX(1.3)';

        setTimeout(() => {
            imageRef.current.style.transitionProperty = '';
            imageRef.current.style.transitionDuration = ``;
            imageRef.current.style.transitionTimingFunction = '';
            imageRef.current.style.transitionDelay = ``;
            imageRef.current.style.transform = '';
        }, 2000);
    };
    return (
        <div>
            {/* {console.log(choice)} */}

            {choice === -1 && <RandomView animation={animation} slide_={slide_} TOTAL_SLIDES={TOTAL_SLIDES} setChoice={setChoice} />}
            {choice !== -1 && (
                <div style={{ marginTop: '280px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div
                            style={{
                                display: 'flex',
                                maxWidth: '450px',
                                justifyContent: 'center',
                                border: '15px solid #a4d9f5',
                                borderRadius: '5px',
                            }}
                        >
                            {<img src={`${urlErrorCheck(data[choice][2])}`} width={"330px"} height={"330px"}></img>}
                            {/* <Slide size={30} ref={imageRef} img={`${urlErrorCheck(data[choice][2])}`} /> */}
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <H2>선택한 메뉴는 !! ~</H2>&nbsp;&nbsp;<H2 color={'#fec478'}>{data[choice][0]}</H2>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Random;
