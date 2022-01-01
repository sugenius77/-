<<<<<<< sprint
import { useEffect, useState, useMemo, useCallback, createContext } from 'react';
import IntroduceView from './IntroduceView';

export const ScrollContext = createContext();
const Introduce = () => {
    const heightNum = 5; // 브라우저의 높이의 5배로 scrollHeight 세팅
    const [yOffset, setYOffset] = useState(0); // 윈도우의 현재 높이
    //   Mount/UnMount
=======
import { useEffect, useState, useMemo, useCallback } from 'react';
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

const MainMessage = styled.div`
    opacity: ${({ messageOpacity }) => messageOpacity};
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
`;

const End = styled.div`
    display: flex;
    height: ${({ scrollHeight }) => scrollHeight}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: white;
    font-weight: bold;

    strong {
        font-size: 3rem;
    }
`;
const Canvas = styled.canvas``;
const Introduce = () => {
    const heightNum = 5; // 브라우저의 높이의 5배로 scrollHeight 세팅
    const [yOffset, setYOffset] = useState(0); // 윈도우의 현재 높이

>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
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

<<<<<<< sprint
    const setLayout = () => {
        setYOffset(window.scrollY);
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            } else if (sceneInfo[i].type === 'normal') {
                sceneInfo[i].scrollHeight = 0.5 * window.innerHeight;
            }
        }
    };

=======
    //   Mount/UnMount
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
    const scrollLoop = () => {
        setYOffset(window.scrollY);
    };

    const sceneInfo = useMemo(() => {
        return [
            {
<<<<<<< sprint
                type: 'sticky',
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
                type: 'normal',
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
=======
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    messageOpacityA: [0, 1, { start: 0.1, end: 0.2 }],
                },
            },
            {
                scrollHeight: heightNum * window.innerHeight,
                heightNum: 1,
                values: {
                    opacity: [
                        [0, 1, { start: 0.1, end: 0.2 }],
                        [0, 1, { start: 0.3, end: 0.5 }],
                        [0, 1, { start: 0.6, end: 0.8 }],
                        [0, 1, { start: 0.85, end: 0.95 }],
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
                    ],
                },
            },
            {
<<<<<<< sprint
                type: 'sticky',
                scrollHeight: heightNum * window.innerHeight,
                heightNum: 5,
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
=======
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    opacity: [
                        [0, 1, { start: 0.1, end: 0.2 }],
                        [0, 1, { start: 0.3, end: 0.5 }],
                        [0, 1, { start: 0.6, end: 0.8 }],
                        [0, 1, { start: 0.85, end: 0.95 }],
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
                    ],
                },
            },
            {
<<<<<<< sprint
                type: 'sticky',
                scrollHeight: heightNum * window.innerHeight,
                heightNum: 2,
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
=======
                scrollHeight: heightNum * window.innerHeight,
                heightNum: heightNum,
                values: {
                    opacity: [
                        [0, 1, { start: 0.1, end: 0.2 }],
                        [0, 1, { start: 0.3, end: 0.5 }],
                        [0, 1, { start: 0.6, end: 0.8 }],
                        [0, 1, { start: 0.85, end: 0.95 }],
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
                    ],
                },
            },
            {
<<<<<<< sprint
                type: 'normal',
=======
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
                scrollHeight: heightNum * window.innerHeight,
                heightNum: 1,
                values: {
                    opacity: [
<<<<<<< sprint
                        [0, 1, { start: 0.2, end: 0.25 }],
=======
                        [0, 1, { start: 0.1, end: 0.2 }],
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
                        [0, 1, { start: 0.3, end: 0.5 }],
                        [0, 1, { start: 0.6, end: 0.8 }],
                        [0, 1, { start: 0.85, end: 0.95 }],
                    ],
<<<<<<< sprint
                    translateY: [
                        [0, 20, { start: 0.1, end: 0.2 }, { start: 0.25, end: 0.3 }],
                        [0, 20, { start: 0.3, end: 0.4 }, { start: 0.45, end: 0.5 }],
                        [0, 20, { start: 0.5, end: 0.6 }, { start: 0.65, end: 0.7 }],
                        [0, 20, { start: 0.7, end: 0.8 }, { start: 0.85, end: 0.9 }],
                    ],
=======
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
                },
            },
        ];
    }, []);

<<<<<<< sprint
=======
    const setLayout = () => {
        setYOffset(window.scrollY);
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }
    };

>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
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

<<<<<<< sprint
    //이전 Scene의 총 길이
=======
    //이전 스크롤
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
    const prevScrollHeight = useMemo(() => {
        let scrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            scrollHeight += sceneInfo[i].scrollHeight;
        }
        return scrollHeight;
<<<<<<< sprint
    }, [currentScene, sceneInfo]);

    //현재 보여지는 Scene 기준 스크롤 길이
    const currentYoffset = useMemo(() => {
        return yOffset - prevScrollHeight;
    }, [yOffset, prevScrollHeight]);

    useEffect(() => {
        console.log(currentScene);
    }, [currentScene]);
    // 현재 스크롤의 비율에 따라 투명도 계산
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
=======
    }, [currentScene]);

    //현재 스크롤 위치
    const currentYoffset = useMemo(() => {
        console.log(yOffset);
        return yOffset - prevScrollHeight;
    }, [yOffset]);

    // // 현재 스크롤의 비율에 따라 원하는 메세지의 투명도를 바꾸기 위한 값

    const calcValues = useCallback(
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
        (values) => {
            let rv;
            const scrollHeight = sceneInfo[currentScene].scrollHeight;
            const scrollRatio = currentYoffset / sceneInfo[currentScene].scrollHeight;

<<<<<<< sprint
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
=======
            if (values.length === 3) {
                const partScrollStart = values[2].start * scrollHeight;
                const partScrollEnd = values[2].end * scrollHeight;
                const partScrollHeight = partScrollEnd - partScrollStart;

                if (partScrollStart <= currentYoffset && currentYoffset <= partScrollEnd) {
                    rv = ((currentYoffset - partScrollStart) / partScrollHeight) * (values[1] - values[0]);
                } else if (currentYoffset < partScrollStart) {
                    rv = values[0];
                } else if (currentYoffset > partScrollEnd) {
                    rv = values[1];
                }
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
            } else {
                rv = scrollRatio * (values[1] - values[0]) + values[0];
            }
            return rv;
        },

<<<<<<< sprint
        [currentYoffset, currentScene, sceneInfo],
    );

    const messageOpacity = useMemo(() => {
        const message = [];
        let values = sceneInfo[currentScene].values.opacity;

        for (let i = 0; i < values.length; i++) {
            message.push(calcOpacity(values[i]));
        }
        return message;
    }, [currentScene, sceneInfo, calcOpacity]);

    const messageTranslateY = useMemo(() => {
        const message = [];
        let values = sceneInfo[currentScene].values.translateY;

        for (let i = 0; i < values.length; i++) {
            message.push(calcTranslateY(values[i]));
        }
        return message;
    }, [sceneInfo, currentScene, calcTranslateY]);

    return (
        <ScrollContext.Provider value={{ currentScene, sceneInfo, messageOpacity, messageTranslateY }}>
            <IntroduceView />
        </ScrollContext.Provider>
=======
        [currentYoffset],
    );

    const messageOpacityA = useMemo(() => {
        let values = sceneInfo[currentScene].values;
        let messageA_opacity_in = calcValues(values.messageOpacityA);
        return messageA_opacity_in;
    }, [currentYoffset, calcValues]);

    return (
        <>
            <Scene scrollHeight={sceneInfo[0].scrollHeight}>
                {currentScene === 0 && (
                    <>
                        <h1>구구절절</h1>
                        <div>
                            <Canvas />
                        </div>
                        <MainMessage messageOpacity={messageOpacityA}>
                            <p>
                                코로나로 인해 늘어난
                                <br /> 배달 주문
                            </p>
                        </MainMessage>
                        {/* <MainMessage>
                            <p>
                                치킨은 점심 때 먹었는데...
                                <br /> 그럼 저녁엔 뭘 먹지?
                            </p>
                        </MainMessage>
                        <MainMessage>
                            <p>
                                오늘 비가 온다는데
                                <br /> 파전이나 먹을까?
                            </p>
                        </MainMessage>
                        <MainMessage>
                            <p>
                                이젠 메뉴 고르는 것도
                                <br /> 일인 지금!
                            </p>
                        </MainMessage> */}
                    </>
                )}
            </Scene>
            <Scene scrollHeight={sceneInfo[1].scrollHeight}>
                <p className="description">
                    <strong>보통 스크롤 영역</strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus iste natus est saepe dolores doloribus
                    dolor praesentium odit voluptas veniam ab, ad quae aliquam error, fugit esse non facilis! Explicabo sint consequatur
                    culpa natus id non debitis aperiam ipsum dolore provident reprehenderit rerum mollitia rem enim labore quia deleniti
                    possimus nobis dolorem aliquam, quis sapiente alias! Voluptatum, natus necessitatibus beatae odio accusantium id
                    cupiditate nam quia perferendis excepturi, itaque veniam blanditiis error eum amet voluptatibus. Maxime iure, animi
                    earum quasi, tenetur laborum alias error dolorum quis nostrum aut optio molestiae voluptates ratione quas deleniti et?
                    Maiores corrupti ipsam laudantium incidunt facere. Obcaecati rem minus porro dolor, aut tempore placeat illo, ipsam
                    consequatur molestiae commodi eos corrupti quod accusamus vel! Placeat, ad delectus voluptatem, et quas at amet, modi
                    deserunt repellendus officia libero. Libero, numquam quisquam ipsa temporibus natus saepe quae eveniet id. Iusto, maxime
                    assumenda deserunt in aliquid id harum non enim rem aut nam amet quasi ad dolorem quas, officia inventore soluta,
                    mollitia totam atque sint veniam? Assumenda obcaecati praesentium optio, quo repellendus dolores magni blanditiis
                    architecto nulla quae autem facilis voluptate incidunt nam sed adipisci sit voluptatum ratione asperiores ex tenetur
                    fugiat natus a eveniet? Aut, atque.
                </p>
            </Scene>
            <Scene scrollHeight={sceneInfo[2].scrollHeight}>
                {currentScene === 2 && (
                    <>
                        <div className="sticky-elem sticky-elem-canvas">
                            <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
                        </div>
                        <h1>구구절절</h1>
                        <div>
                            <Canvas />
                        </div>
                        <MainMessage>
                            <p>
                                코로나로 인해 늘어난
                                <br /> 배달 주문
                            </p>
                        </MainMessage>
                        <MainMessage>
                            <p>
                                지킨은 점심 때 먹었는데...
                                <br /> 그럼 저녁엔 뭘 먹지?
                            </p>
                        </MainMessage>
                        <MainMessage>
                            <p>
                                오늘 비가 온다는데
                                <br /> 파전이나 먹을까?
                            </p>
                        </MainMessage>
                        <MainMessage>
                            <p>
                                이젠 메뉴 고르는 것도
                                <br /> 일인 지금!
                            </p>
                        </MainMessage>
                    </>
                )}
            </Scene>
            <div className="section5"></div>
            <Scene scrollHeight={sceneInfo[3].scrollHeight}>
                <p>
                    시간 날짜 날씨를 고려하여
                    <br /> 지금 이 순간 가장 인기 있는 메뉴를
                    <br />
                    검색하여 추천해드립니다!
                </p>

                <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="로고이미지" />

                <button>추천 받으러 가기</button>
            </Scene>
        </>
>>>>>>> feat:스크롤 이벤트로 투명도 조절하기
    );
};

export default Introduce;
