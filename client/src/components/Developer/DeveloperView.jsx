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
const End = styled.div`
    margin-top: 60vh;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LinkDiv = styled.div`
    border: 1px solid red;
    width: 30vw;
    height: 10vh;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    background-color: #dc143c;
    font-weight: bold;
    round: 30;

    a {
        text-decoration: none;
        color: white;
    }
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
                                <br />
                                <br />
                                소개 페이지
                                <br />
                                실시간 추천
                                <br />
                                차트
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[1]} translateY={messageTranslateY[1]}>
                            <p>
                                프론트엔드
                                <br /> 박진호
                                <br />
                                <br />
                                랜덤 추천
                                <br />
                                음식 월드컵
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[2]} translateY={messageTranslateY[2]}>
                            <p>
                                백엔드
                                <br /> 이수진
                                <br />
                                <br /> 실시간 추천 API
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[3]} translateY={messageTranslateY[3]}>
                            <p>
                                백엔드
                                <br /> 노영훈
                                <br />
                                <br /> 음식 월드컵 API
                                <br /> 배포
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[4]} translateY={messageTranslateY[4]}>
                            <p>
                                데이터 분석가
                                <br /> 현소영
                                <br />
                                <br />
                                데이터 분석
                            </p>
                        </MainMessage>
                    </>
                )}
            </Scene>
            <End scrollHeight={sceneInfo[1].scrollHeight}>
                <h1>봐주셔서 감사합니다.</h1>
                <img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} alt="로고이미지" />

                <LinkDiv>
                    <a href="https://kdt-gitlab.elice.io/003-part3-deliveryservice/team9">깃랩 보러가기</a>
                </LinkDiv>
            </End>
        </>
    );
};

export default DeveloperView;
