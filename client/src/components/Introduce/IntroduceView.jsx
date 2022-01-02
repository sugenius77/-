import styled from 'styled-components';
import { ScrollContext } from './Introduce';

const Scene = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 30vh;
    height: ${({ scrollHeight }) => scrollHeight}px;
    h1 {
        font-size: 4rem;
    }

    img {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        object-fit: cover;
        overflow: hidden;
        transform: scale(${window.innerHeight / 1080});
    }
`;

const MainMessage = styled.div.attrs((props) => ({
    style: {
        opacity: props.opacity,
    },
}))`
    position: fixed;
    top: 35vh;
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;

    p {
        color: black;
    }
`;

const IntroduceView = () => {
    return (
        <ScrollContext.Consumer>
            {({ sceneInfo, currentScene, messageOpacity, messageTranslateY, canvasRef }) => (
                <>
                    <Scene scrollHeight={sceneInfo[0].scrollHeight}>
                        {currentScene === 0 && (
                            <>
                                <img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} alt="로고이미지" />
                                <img src={`${process.env.PUBLIC_URL}/introduce/introduce_0.jpg`} alt="로고이미지" />
                                <MainMessage opacity={messageOpacity[0]} translateY={messageTranslateY[0]}>
                                    <p>
                                        코로나로 인해 늘어난
                                        <br /> 배달 주문
                                    </p>
                                </MainMessage>
                                <img src={`${process.env.PUBLIC_URL}/introduce/introduce_1.jpg`} alt="로고이미지" />
                                <MainMessage opacity={messageOpacity[1]} translateY={messageTranslateY[1]}>
                                    <p>
                                        치킨은 점심 때 먹었는데...
                                        <br /> 그럼 저녁엔 뭘 먹지?
                                    </p>
                                </MainMessage>
                                <img src={`${process.env.PUBLIC_URL}/introduce/introduce_2.jpg`} alt="로고이미지" />
                                <MainMessage opacity={messageOpacity[2]} translateY={messageTranslateY[2]}>
                                    <p>
                                        오늘 비가 온다는데
                                        <br /> 파전이나 먹을까?
                                    </p>
                                </MainMessage>
                                <img src={`${process.env.PUBLIC_URL}/introduce/introduce_3.jpg`} alt="로고이미지" />
                                <MainMessage opacity={messageOpacity[3]} translateY={messageTranslateY[3]}>
                                    <p>
                                        이젠 메뉴 고르는 것도
                                        <br /> 일인 지금!
                                    </p>
                                </MainMessage>
                                <img src={`${process.env.PUBLIC_URL}/introduce/introduce_4.jpg`} alt="로고이미지" />
                            </>
                        )}
                    </Scene>
                    <Scene scrollHeight={sceneInfo[1].scrollHeight}>
                        <p>
                            <strong>보통 스크롤 영역</strong>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus iste natus est saepe dolores
                            doloribus dolor praesentium odit voluptas veniam ab, ad quae aliquam error, fugit esse non facilis! Explicabo
                            sint consequatur culpa natus id non debitis aperiam ipsum dolore provident reprehenderit rerum mollitia rem enim
                            labore quia deleniti possimus nobis dolorem aliquam, quis sapiente alias! Voluptatum, natus necessitatibus
                            beatae odio accusantium id cupiditate nam quia perferendis excepturi, itaque veniam blanditiis error eum amet
                            voluptatibus. Maxime iure, animi earum quasi, tenetur laborum alias error dolorum quis nostrum aut optio
                            molestiae voluptates ratione quas deleniti et? Maiores corrupti ipsam laudantium incidunt facere. Obcaecati rem
                            minus porro dolor, aut tempore placeat illo, ipsam consequatur molestiae commodi eos corrupti quod accusamus
                            vel! Placeat, ad delectus voluptatem, et quas at amet, modi deserunt repellendus officia libero. Libero, numquam
                            quisquam ipsa temporibus natus saepe quae eveniet id. Iusto, maxime assumenda deserunt in aliquid id harum non
                            enim rem aut nam amet quasi ad dolorem quas, officia inventore soluta, mollitia totam atque sint veniam?
                            Assumenda obcaecati praesentium optio, quo repellendus dolores magni blanditiis architecto nulla quae autem
                            facilis voluptate incidunt nam sed adipisci sit voluptatum ratione asperiores ex tenetur fugiat natus a eveniet?
                            Aut, atque.
                        </p>
                    </Scene>
                    <Scene scrollHeight={sceneInfo[2].scrollHeight}>
                        {currentScene === 2 && (
                            <>
                                <MainMessage opacity={messageOpacity[0]} translateY={messageTranslateY[0]}>
                                    <p>
                                        코로나로 인해 늘어난
                                        <br /> 배달 주문
                                    </p>
                                </MainMessage>
                                <MainMessage opacity={messageOpacity[1]} translateY={messageTranslateY[1]}>
                                    <p>
                                        짜장은 저녁 때 먹었는데...
                                        <br /> 그럼 저녁엔 뭘 먹지?
                                    </p>
                                </MainMessage>
                                <MainMessage opacity={messageOpacity[2]} translateY={messageTranslateY[2]}>
                                    <p>
                                        오늘 눈이 온다는데
                                        <br /> 뭘 먹을까?
                                    </p>
                                </MainMessage>
                                <MainMessage opacity={messageOpacity[3]} translateY={messageTranslateY[3]}>
                                    <p>
                                        이젠 메뉴 고르는 것도
                                        <br /> 지긋지긋해!
                                    </p>
                                </MainMessage>
                            </>
                        )}
                    </Scene>
                    <Scene scrollHeight={sceneInfo[3].scrollHeight}>
                        <p>
                            시간 날짜 날씨를 고려하여
                            <br /> 지금 이 순간 가장 인기 있는 메뉴를
                            <br />
                            검색하여 추천해드립니다!
                        </p>

                        <img src={`${process.env.PUBLIC_URL}/loading/logo_512.png`} alt="로고이미지" />

                        <button>추천 받으러 가기</button>
                    </Scene>
                </>
            )}
        </ScrollContext.Consumer>
    );
};

export default IntroduceView;
