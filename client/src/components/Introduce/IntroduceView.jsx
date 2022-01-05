import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Scene = styled.div`
    display: flex;
    background-color: #cae8f9;
    flex-direction: column;
    height: ${(props) => props.scrollHeight}px;
    h1 {
        font-size: 4rem;
        display: block;
    }

    img {
        width: 100%;
        object-fit: contain;
        overflow: hidden;
        transform: translate3d(0px 0px -1px);
    }
    @media screen and (max-width: 850px) {
        transform: translate3d(0px 0px -1px) scale(${window.innerHeight / 1080});
    }
`;

const MainMessage = styled.div.attrs((props) => ({
    style: {
        opacity: props.opacity,
    },
}))`
    top: 35vh;
    display: inline;
    position: fixed;
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    display: inline;
    transform: translateY(${(props) => props.translateY}%);
    color: ${(props) => props.color};

    @media screen and (max-width: 850px) {
        top: 50vh;
    }
`;

const End = styled.div`
    padding-top: 10vh;
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

const IntroduceView = ({ sceneInfo, currentScene, messageOpacity, messageTranslateY }) => {
    return (
        <>
            <Scene scrollHeight={sceneInfo[0].scrollHeight}>
                {currentScene === 0 && (
                    <>
                        <MainMessage opacity={messageOpacity[0]} translateY={messageTranslateY[0]} color="black">
                            코로나 이후로 늘어난
                            <br /> 배달 주문
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[1]} translateY={messageTranslateY[1]} color="white">
                            치킨은 점심 때 먹었는데...
                            <br /> 그럼 저녁엔 뭘 먹지?
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[2]} translateY={messageTranslateY[2]}>
                            오늘 비가 온다는데
                            <br /> 파전이나 먹을까?
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[3]} translateY={messageTranslateY[3]} color="white">
                            <p>
                                이젠 메뉴 고르는 것도
                                <br /> 일인 지금!
                            </p>
                        </MainMessage>
                        <MainMessage opacity={messageOpacity[4]} translateY={messageTranslateY[4]} color="white">
                            <p>
                                저희가 <br />
                                해결해드리겠습니다!
                            </p>
                        </MainMessage>
                        <img src={`${process.env.PUBLIC_URL}/introduce/introduce_Scene0.jpg`} alt="로고이미지" />
                    </>
                )}
            </Scene>
            <End scrollHeight={sceneInfo[3].scrollHeight}>
                <h1>
                    인스타그램 데이터를 이용하여
                    <br /> 지금 이 순간 가장 인기 있는 메뉴를
                    <br />
                    추천해드립니다!
                </h1>

                <img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} style={{ transform: 'scale(0.5)' }} alt="로고이미지" />
                <h1>구구절절</h1>
                <LinkDiv>
                    <Link to="/realtime">추천 받으러 가기</Link>
                </LinkDiv>
            </End>
        </>
    );
};

export default IntroduceView;
