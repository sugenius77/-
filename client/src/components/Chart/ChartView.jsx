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
    top: 50;
    left: 50;

    width: 100%;
    height: 100%;
    display: ${(props) => (props.modalToggle ? 'block' : 'none')};
    background-color: rgba(0, 0, 0, 0.4);

    .show {
        display: block;
    }

    .modal_body {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 40vw;
        height: 60vh;

        padding: 5vw 5vh;

        text-align: center;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
        transform: translateX(-50%) translate(-50%);
    }
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
                        <p>
                            2020년 07월부터 2021년 06월까지 약 1년 8개월간의 서울시의 코로나 확진자 추세와 배달 주문량의 데이터를 결합해
                            시각화였다.
                            <br />두 데이터 모두 2020년 08월, 12월에 증가, 그리고 2020년 10월, 2021년 03월에 감소하는 양상을 보이고 있다.
                            <br /> 이는 코로나 확진자가 증가할수록 사회적 거리두기가 강화되며 식당 내 취식 또는 야외 활동 대신 배달 음식을
                            찾게 되는 사람들의 행동이 반영된 결과라고 해석이 가능하다. <br />
                            따라서 코로나의 증가에 따라 배달 주문량도 함께 증가하는 상관관계라고 결론 내릴 수 있다.
                        </p>
                    )}
                    {chartIdx === 1 && (
                        <p>
                            일주일 간 가장 배달이 활성화된 업종은 "디저트"로 나타났다. 데이터 약 186,000건 중 39,636건으로, 업종 별 평균
                            주문량인 15,431 건보다 24,204 건 많이 배달 되는 것으로 나타났다. <br />
                            이는 사진 중심의 플랫폼인 인스타그램 특성상 피드의 미적 요소를 중요시하는 유저들이 많은만큼, 비교적 푸드
                            디자인이 예쁘고 화려한 디저트류에 대한 사용자들의 애정이 반영된 결과라고 미루어 짐작할 수 있다. 같은 맥락에서
                            한식 등 기타 업종에 비해 로맨틱하고 화려한 분위기를 주는 양식이 2위를 차지하였다. 이를 토대로 '인스타그래머블'한
                            업종이 배달 주문량 인기 순위를 차지한다는 것을 예측할 수 있다. 두드러지는 점은 디저트 업종의 배달 주문량을 선
                            그래프로 시각화 하였을 때 돔 형태로 나타나는 양상을 보인다는 것이다. 구체적으로 월요일부터 꾸준히 증가하며
                            목요일에 정점을 찍고 금요일부터 주말까지 계속해서 하락하는 모양을 보이는 것은 제법 흥미로운 결과이다. 이러한
                            현상은 평일 동안 받는 업무, 학업 등 스트레스를 디저트를 통해 해소하는 소비자들이 많은 것으로 해석할 수 있다.
                            또한 특정 요일에 특정 업종이 인기 많을 것이라고 예상했던 점과 달리 전체적으로 요일간의 차이는 크지 않았다. 대신,
                            중식을 제외한 모든 업종이 주말동안(토-일) 감소하는 형태를 띄고 있다. 이는 업종별 주문량이 요일에 따라 영향을
                            크게 받지 않고, 업종과 관계 없이 평일 대비 휴일인 주말에 바깥 활동이 늘어나면서 배달 주문량이 전반적으로
                            적어짐을 뜻한다.
                        </p>
                    )}

                    {chartIdx === 3 && (
                        <p>
                            24시간 간의 업종별 배달 주문량 변화를 살펴보면 저녁에 비해 점심 시간대(11-13시)의 증가폭이 훨씬 높은 것을 확인할
                            수 있다. 이는 코로나의 여파로 거리두기와 식당 입장 제한과 같은 사유로 식당 방문 대신 배달 음식으로 점심을
                            해결하는 경우가 증가한 것으로 이해할 수 있다. 퇴근 이후의 저녁 시간대(17-19)에는 집에서 가족끼리 식사를 하거나
                            소수 인원끼리 외식하는 코로나 시대의 식습관의 형태가 나타난 것으로 볼 수 있다. 특징적인 점은 오후 10시경부터
                            오전 6시까지는 치킨이 가장 활성화된 업종이라는 것이다. 이는 치킨이 대표 야식 인기 메뉴인만큼, 한국인들의 치킨에
                            대한 애정과 야식 라이프 스타일이 반영된 결과라고 해석할 수 있다. 시간별 업종 순위를 살펴보면 요일별 업종 순위
                            그래프에 비해 역동적이고 복잡하다는 것을 알 수 있다. 이는 곧 배달 음식 선택에 있어서 요일보단 시간의 영향이 더
                            크다는 것을 뜻한다.
                        </p>
                    )}
                    {chartIdx === 4 && (
                        <p>
                            24시간 간의 업종별 배달 주문량 변화를 살펴보면 저녁에 비해 점심 시간대(11-13시)의 증가폭이 훨씬 높은 것을 확인할
                            수 있다. 이는 코로나의 여파로 거리두기와 식당 입장 제한과 같은 사유로 식당 방문 대신 배달 음식으로 점심을
                            해결하는 경우가 증가한 것으로 이해할 수 있다. 퇴근 이후의 저녁 시간대(17-19)에는 집에서 가족끼리 식사를 하거나
                            소수 인원끼리 외식하는 코로나 시대의 식습관의 형태가 나타난 것으로 볼 수 있다. 특징적인 점은 오후 10시경부터
                            오전 6시까지는 치킨이 가장 활성화된 업종이라는 것이다. 이는 치킨이 대표 야식 인기 메뉴인만큼, 한국인들의 치킨에
                            대한 애정과 야식 라이프 스타일이 반영된 결과라고 해석할 수 있다. 시간별 업종 순위를 살펴보면 요일별 업종 순위
                            그래프에 비해 역동적이고 복잡하다는 것을 알 수 있다. 이는 곧 배달 음식 선택에 있어서 요일보단 시간의 영향이 더
                            크다는 것을 뜻한다.
                        </p>
                    )}
                </div>
            </Modal>
        </Div>
    );
};

export default ChartView;
