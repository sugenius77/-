import { useEffect, useState, useMemo, useCallback, createContext } from 'react';
import styled from 'styled-components';

const Scene = styled.div`
    padding-top: 50vh;
    height: ${({ scrollHeight }) => scrollHeight}px;
    color: black;
    border: 3px solid red;
    h1 {
        font-size: 4rem;
    }
`;

const MainMessage = styled.div.attrs((props) => ({
    style: {
        opacity: props.opacity,
        transform: `translateY(${props.translateY}%`,
    },
}))`
    position: fixed;
    top: 35vh;
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
`;

const Img = styled.img`
    transform: ${`scale(${window.innerHeight / 1080})`};
`;

export const DeveloperContext = createContext();

const Developer = () => {
    const heightNum = 6; // 브라우저의 높이의 6배로 scrollHeight 세팅
    const [yOffset, setYOffset] = useState(0); // 윈도우의 현재 높이

    useEffect(() => {
        setLayout();
        window.addEventListener('resize', setLayout);
        window.addEventListener('scroll', scrollLoop);
        return () => {
            window.removeEventListener('resize', setLayout);
            window.removeEventListener('scroll', scrollLoop);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //   Mount/UnMount
    const scrollLoop = () => {
        setYOffset(window.scrollY);
    };

    const sceneInfo = useMemo(() => {
        return [
            {
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    opacity: [
                        [0, 1, { start: 0.0, end: 0.1 }, { start: 0.15, end: 0.2 }],
                        [0, 1, { start: 0.2, end: 0.3 }, { start: 0.25, end: 0.4 }],
                        [0, 1, { start: 0.4, end: 0.5 }, { start: 0.55, end: 0.6 }],
                        [0, 1, { start: 0.6, end: 0.7 }, { start: 0.75, end: 0.9 }],
                        [0, 1, { start: 0.8, end: 0.9 }, { start: 0.85, end: 1 }],
                    ],
                    translateY: [
                        [0, 20, { start: 0.0, end: 0.1 }, { start: 0.15, end: 0.2 }],
                        [0, 20, { start: 0.2, end: 0.3 }, { start: 0.35, end: 0.4 }],
                        [0, 20, { start: 0.4, end: 0.5 }, { start: 0.55, end: 0.6 }],
                        [0, 20, { start: 0.6, end: 0.7 }, { start: 0.75, end: 0.8 }],
                        [0, 1, { start: 0.8, end: 0.9 }, { start: 0.95, end: 1 }],
                    ],
                },
            },
            {
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    opacity: [
                        [0, 1, { start: 0.0, end: 0.1 }, { start: 0.15, end: 0.2 }],
                        [0, 1, { start: 0.2, end: 0.3 }, { start: 0.25, end: 0.4 }],
                        [0, 1, { start: 0.4, end: 0.5 }, { start: 0.55, end: 0.6 }],
                        [0, 1, { start: 0.6, end: 0.7 }, { start: 0.75, end: 0.8 }],
                        [0, 1, { start: 0.8, end: 0.9 }, { start: 0.8, end: 0.9 }],
                    ],
                    translateY: [
                        [0, 20, { start: 0.1, end: 0.2 }, { start: 0.25, end: 0.3 }],
                        [0, 20, { start: 0.3, end: 0.4 }, { start: 0.45, end: 0.5 }],
                        [0, 20, { start: 0.5, end: 0.6 }, { start: 0.65, end: 0.7 }],
                        [0, 20, { start: 0.7, end: 0.8 }, { start: 0.85, end: 0.9 }],
                    ],
                },
            },
            {
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    opacity: [
                        [0, 1, { start: 0.1, end: 0.2 }, { start: 0.25, end: 0.3 }],
                        [0, 1, { start: 0.3, end: 0.4 }, { start: 0.35, end: 0.5 }],
                        [0, 1, { start: 0.5, end: 0.6 }, { start: 0.65, end: 0.7 }],
                        [0, 1, { start: 0.7, end: 0.8 }, { start: 0.85, end: 0.9 }],
                    ],
                    translateY: [
                        [0, 20, { start: 0.1, end: 0.2 }, { start: 0.25, end: 0.3 }],
                        [0, 20, { start: 0.3, end: 0.4 }, { start: 0.45, end: 0.5 }],
                        [0, 20, { start: 0.5, end: 0.6 }, { start: 0.65, end: 0.7 }],
                        [0, 20, { start: 0.7, end: 0.8 }, { start: 0.85, end: 0.9 }],
                    ],
                },
            },
            {
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    opacity: [
                        [0, 1, { start: 0.1, end: 0.2 }, { start: 0.25, end: 0.3 }],
                        [0, 1, { start: 0.3, end: 0.4 }, { start: 0.35, end: 0.5 }],
                        [0, 1, { start: 0.5, end: 0.6 }, { start: 0.65, end: 0.7 }],
                        [0, 1, { start: 0.7, end: 0.8 }, { start: 0.85, end: 0.9 }],
                    ],
                    translateY: [
                        [0, 20, { start: 0.1, end: 0.2 }, { start: 0.25, end: 0.3 }],
                        [0, 20, { start: 0.3, end: 0.4 }, { start: 0.45, end: 0.5 }],
                        [0, 20, { start: 0.5, end: 0.6 }, { start: 0.65, end: 0.7 }],
                        [0, 20, { start: 0.7, end: 0.8 }, { start: 0.85, end: 0.9 }],
                    ],
                },
            },
            {
                scrollHeight: heightNum * window.innerHeight,
                heightNum: 1,
                values: {
                    opacity: [
                        [0, 1, { start: 0.2, end: 0.25 }],
                        [0, 1, { start: 0.3, end: 0.5 }],
                        [0, 1, { start: 0.6, end: 0.8 }],
                        [0, 1, { start: 0.85, end: 0.95 }],
                    ],
                },
            },
        ];
    }, []);

    const setLayout = () => {
        setYOffset(window.scrollY);
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }
    };

    //현재 Scene번호
    const currentScene = useMemo(() => {
        let PrevScrollHeight = 0;
        let count = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            PrevScrollHeight += sceneInfo[i].scrollHeight;
            if (PrevScrollHeight < yOffset) {
                count += 1;
            }
        }
        return count;
    }, [yOffset, sceneInfo]);

    //이전 스크롤
    const prevScrollHeight = useMemo(() => {
        let scrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            scrollHeight += sceneInfo[i].scrollHeight;
        }
        return scrollHeight;
    }, [currentScene, sceneInfo]);

    //현재 스크롤 위치
    const currentYoffset = useMemo(() => {
        console.log(yOffset);
        return yOffset - prevScrollHeight;
    }, [yOffset, prevScrollHeight]);

    // // 현재 스크롤의 비율에 따라 원하는 메세지의 투명도를 바꾸기 위한 값

    const calcOpacity = useCallback(
        (values) => {
            let rv;
            const scrollHeight = sceneInfo[currentScene].scrollHeight;
            const scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;

            if (values.length === 4) {
                const fadeInScrollStart = values[2].start * scrollHeight;
                const fadeInScrollEnd = values[2].end * scrollHeight;
                const fadeInScrollHeight = fadeInScrollEnd - fadeInScrollStart;

                const fadeOutScrollEnd = values[3].end * scrollHeight;
                const fadeOutScrollHeight = fadeInScrollEnd - fadeInScrollStart;

                if (fadeInScrollStart <= currentYoffset && currentYoffset <= fadeInScrollEnd) {
                    rv = ((currentYoffset - fadeInScrollStart) / fadeInScrollHeight) * (values[1] - values[0]);
                } else if (currentYoffset < fadeInScrollStart) {
                    rv = values[0];
                } else if (currentYoffset > fadeInScrollEnd) {
                    rv = values[0];
                }
                if (fadeInScrollEnd <= currentYoffset && currentYoffset <= fadeOutScrollEnd) {
                    rv = ((fadeOutScrollEnd - currentYoffset) / fadeOutScrollHeight) * (values[1] - values[0]);
                }
            } else {
                rv = scrollRatio * (values[1] - values[0]) + values[0];
            }
            return rv;
        },

        [currentYoffset, currentScene, sceneInfo],
    );

    const calcTranslateY = useCallback(
        (values) => {
            let rv;
            const scrollHeight = sceneInfo[currentScene].scrollHeight;
            const scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;

            if (values.length === 4) {
                const translateInScrollStart = values[2].start * scrollHeight;
                const translateInScrollEnd = values[2].end * scrollHeight;
                const translateInScrollHeight = translateInScrollEnd - translateInScrollStart;

                const translateOutScrollStart = values[3].start * scrollHeight;
                const translateOutScrollEnd = values[3].end * scrollHeight;

                if (translateInScrollStart <= currentYoffset && currentYoffset <= translateInScrollEnd) {
                    rv = -((currentYoffset - translateInScrollStart) / translateInScrollHeight) * (values[1] - values[0]);
                } else if (translateInScrollEnd <= currentYoffset && currentYoffset <= translateOutScrollStart) {
                    rv = values[1];
                }
                if (translateInScrollStart <= currentYoffset && currentYoffset <= translateOutScrollEnd) {
                    rv = ((translateOutScrollEnd - currentYoffset) / translateInScrollHeight) * (values[1] - values[0]);
                }
            } else {
                rv = scrollRatio * (values[1] - values[0]) + values[0];
            }
            return rv;
        },

        [currentYoffset, currentScene, sceneInfo],
    );

    const messageOpacity = useMemo(() => {
        const message = [];
        let values = sceneInfo[currentScene].values.opacity;

        for (let i = 0; i < values.length; i++) {
            message.push(calcOpacity(values[i]));
        }
        return message;
    }, [sceneInfo, currentScene, calcOpacity]);

    const messageTranslateY = useMemo(() => {
        const message = [];
        let values = sceneInfo[currentScene].values.translateY;

        for (let i = 0; i < values.length; i++) {
            message.push(calcTranslateY(values[i]));
        }
        return message;
    }, [sceneInfo, currentScene, calcTranslateY]);

    return (
        <>
            <Scene scrollHeight={sceneInfo[0].scrollHeight}>
                {currentScene === 0 && (
                    <>
                        <Img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} alt="로고이미지" />

                        <MainMessage opacity={messageOpacity[0]} translateY={messageTranslateY[0]}>
                            <p>
                                프론트엔드
                                <br /> 홍준형
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[1]} translateY={messageTranslateY[1]}>
                            <p>
                                프론트엔드
                                <br /> 박진호
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[2]} translateY={messageTranslateY[2]}>
                            <p>
                                백엔드
                                <br /> 이수진
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[3]} translateY={messageTranslateY[3]}>
                            <p>
                                백엔드
                                <br /> 노영훈
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[4]} translateY={messageTranslateY[4]}>
                            <p>
                                데이터 분석가
                                <br /> 현소영
                            </p>
                        </MainMessage>
                    </>
                )}
            </Scene>
            <Scene scrollHeight={sceneInfo[1].scrollHeight}>
                <h1>봐주셔서 감사합니다.</h1>
                <Img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="로고이미지" />

                <button>깃랩 보러 가기</button>
            </Scene>
        </>
    );
};

export default Developer;
