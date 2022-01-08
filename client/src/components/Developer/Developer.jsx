import { useEffect, useState, useMemo, useCallback } from 'react';
import DeveloperView from './DeveloperView';

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
        <DeveloperView
            currentScene={currentScene}
            sceneInfo={sceneInfo}
            messageOpacity={messageOpacity}
            messageTranslateY={messageTranslateY}
        />
    );
};

export default Developer;
