import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import DetailRecommend from './components/Pages/RealTime/DetailRecomend';
import RealTime from './components/Pages/RealTime/RealTime';
function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className="container">
                <Switch>
                    <Route exact path="/realtime">
                        <RealTime />
                    </Route>
                    <Route path="/realtime/:id">
                        <DetailRecommend />
                    </Route>
                    <Route path="/random">랜덤 추천</Route>
                    <Route path="/worldcup">음식 월드컵</Route>
                    <Route path="/developer">개발자 소개</Route>
                    <Route exact path="/">
                        홈
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
