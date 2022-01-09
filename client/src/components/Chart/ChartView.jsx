import { CoronaChart, TimeChart, WeekChart, WeatherChart, MenuChart } from './Charts';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #cae8f9;
    overflow: ${(props) => (props.modalToggle ? 'hidden' : 'auto')};
`;
const ButtonDiv = styled.div`
    margin-top: 10vh;
    width: 100%;
    display: flex;
    button {
        width: 20vw;
        background-color: #a5c9ff;
        color: white;
        font-size: 2vw;
        height: 10vh;
    }
`;
const ChartDiv = styled.div`
    background-color: none;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    display: ${(props) => (props.modalToggle ? 'block' : 'none')};
    background-color: rgba(0, 0, 0, 0.4);

    .show {
        display: block;
    }

    .modal_body {
        position: absolute;
        bottom: 20%;
        left: 80%;
        width: 60vw;
        height: auto;
        background-color: white;
        padding: 5vh;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
        transform: translateX(-50%) translate(-50%);
    }
`;

const ModalButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 2vh 2vw;
    width: 10vw;
    text-align: center;
    display: flex;
    background-color: #a5c9ff;
    font-size: 1em;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`;
const ChartView = ({ chartIdx, windowSize, setChartIdx, modalToggle, onClick }) => {
    return (
        <Div modalToggle={modalToggle}>
            <ButtonDiv>
                <button onClick={() => setChartIdx(0)}>코로나</button>
                <button onClick={() => setChartIdx(1)}>요일별</button>
                <button onClick={() => setChartIdx(2)}>업종별</button>
                <button onClick={() => setChartIdx(3)}>날씨별</button>
                <button onClick={() => setChartIdx(4)}>시간별</button>
            </ButtonDiv>
            <ChartDiv windowSize={windowSize}>
                <div style={{ backgroundColor: 'white' }}>
                    {chartIdx === 0 && <CoronaChart windowSize={windowSize} />}
                    {chartIdx === 1 && <WeekChart windowSize={windowSize} />}
                    {chartIdx === 2 && <MenuChart windowSize={windowSize} />}
                    {chartIdx === 3 && <WeatherChart windowSize={windowSize} />}
                    {chartIdx === 4 && <TimeChart windowSize={windowSize} />}
                </div>
            </ChartDiv>

            <Modal modalToggle={modalToggle} onClick={onClick}>
                <div className="modal_body">
                    {chartIdx === 0 && (
                        <>
                            <h1>
                                두 데이터 모두 2020년 08월과 12월에 증가 <br />
                                2020년 10월과 2021년 03월에 감소하는 양상을 보인다
                                <br />
                            </h1>
                            <h2>
                                이는 코로나 확진자가 증가할수록 사회적 거리두기가 강화되어
                                <br />
                                식당 내 취식 또는 야외 활동 대신 배달 음식을 찾게 되는 <br />
                                사람들의 행동이 반영된 결과라고 해석이 가능하다. <br />
                                <br />
                                따라서 코로나의 증가에 따라 배달 주문량도 <br />
                                함께 증가하는 상관관계라고 결론 내릴 수 있다.
                            </h2>
                        </>
                    )}
                    {chartIdx === 1 && (
                        <div>
                            <h1>일주일 간 가장 배달이 활성화된 업종은 "디저트"</h1>
                            <br />
                            <h2>
                                데이터의 약 186000건 중 39636건, 업종 별 평균 주문량인
                                <br /> 15431 건보다 24204 건 많이 배달되었다.
                                <br />
                            </h2>
                            <br />
                            <h3>
                                이는 사진 중심의 플랫폼인 인스타그램 특성상 피드의 미적 요소를 중요시하는 유저들이 많아
                                <br /> 비교적 푸드 디자인이 아름답고고 화려한 디저트류에 대한 사용자들의 애정이 반영된 결과라고 미루어
                                짐작할 수 있다.같은 맥락에서 한식 등 기타 업종에 비해 로맨틱하고 화려한 분위기를 주는 양식이 2위를
                                차지하였다.
                                <br /> <br />
                                <h2>이를 토대로 '인스타그래머블'한 업종이 배달 주문량 인기 순위를 차지한다는 것을 예측할 수 있다.</h2>
                                두드러지는 점은 디저트 업종의 배달 주문량을 선 그래프로 시각화 하였을 때 돔 형태로 나타나는 양상을 보인다는
                                것이다. 구체적으로 월요일부터 꾸준히 증가하며 목요일에 정점을 찍고 금요일부터 주말까지 계속해서 하락하는
                                모양을 보이는 것은 제법 흥미로운 결과이다. <br />
                                이러한 현상은 평일 동안 받는 업무, 학업 등 스트레스를 디저트를 통해 해소하는 소비자들이 많은 것으로 해석할
                                수 있다.
                                <br />
                                <br />
                                <h2>
                                    또한 특정 요일에 특정 업종이 인기 많을 것이라고 예상했던 점과 달리 전체적으로 요일간의 차이는 크지
                                    않았다.
                                </h2>
                                <br />
                                대신, 중식을 제외한 모든 업종이 주말동안(토-일) 감소하는 형태를 띄고 있다. 이는 업종별 주문량이 요일에 따라
                                영향을 크게 받지 않고, 업종과 관계 없이 평일 대비 휴일인 주말에 바깥 활동이 늘어나면서 배달 주문량이
                                전반적으로 적어짐을 뜻한다.
                            </h3>
                        </div>
                    )}
                    {chartIdx === 3 && (
                        <div>
                            <h1>날씨에 따라 주문량이 크게 줄어든다</h1>
                            <br />
                            <h3>
                                맑음의 분포도가 평균적으로 8 위아래에 자리잡은 것에 반해
                                <br />
                                비와 눈은 각각 6과 4 근처에 분포하고 있다.
                            </h3>
                            <br />
                            <h2>이는 날씨에 따라서 사람들의 배달주문량이 줄어든다는 것을 의미한다</h2>
                            <h3>주문 자체가 줄어든 것임과 동시에 태풍이나 폭설 등의 이유로 주문 취소 가능성이 더 높아진 것이다.</h3>
                        </div>
                    )}
                    {chartIdx === 4 && (
                        <div>
                            <h1>저녁에 비해 점심 시간대의 증가폭이 훨씬 높다.</h1>
                            <br />
                            <h2>
                                점심시간대(11시 ~ 1시)와 저녁시간대(5시~7시) 사이의 증가폭엔 큰 차이가 있었다. 이는 코로나의 여파로
                                거리두기와 식당 입장 제한과 같은 사유로 식당 방문 대신 배달 음식으로 점심을 해결하는 경우가 증가한 것으로
                                이해할 수 있다. 저녁 시간대에는 집에서 가족끼리 식사를 하거나 소수 인원끼리 외식하는 코로나 시대의 식습관의
                                형태가 나타난 것으로 볼 수 있다.
                            </h2>
                            <br />
                            <h1>치킨은 오후 10시부터 오전 6시까지 가장 잘 팔린다</h1>
                            <br />
                            <h2>
                                이는 치킨이 대표 야식 인기 메뉴인만큼, 한국인들의 치킨에 대한 애정과 야식 라이프 스타일이 반영된 결과라고
                                해석할 수 있다. 요일별과 시간별 그래프를 비교했을 때, 유의미한 차이를 보인 것은 시간별 그래프였다.
                                <br />
                            </h2>
                            <br />
                            <h1>이는 곧 배달 음식 선택에 있어서 요일보단 시간의 영향이 더 크다는 것을 의미한다.</h1>
                        </div>
                    )}
                </div>
            </Modal>
            {chartIdx !== 2 && <ModalButton onClick={onClick}>설명보기</ModalButton>}
        </Div>
    );
};

export default ChartView;
