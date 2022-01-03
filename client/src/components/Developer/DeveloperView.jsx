import styled from 'styled-components';

const Scene = styled.div`
    padding-top: 30vh;
    height: ${({ scrollHeight }) => scrollHeight}px;
    color: black;
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

const Canvas = styled.canvas``;

const DeveloperView = ({ sceneInfo, currentScene, messageOpacity, messageTranslateY }) => {
    return (
        <>
            <Scene scrollHeight={sceneInfo[0].scrollHeight}>
                {currentScene === 0 && (
                    <>
                        <img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} alt="로고이미지" />
                        <div>
                            <Canvas />
                        </div>
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
                <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="로고이미지" />

                <button>깃랩 보러 가기</button>
            </Scene>
        </>
    );
};

export default DeveloperView;
