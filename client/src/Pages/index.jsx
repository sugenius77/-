import { Route, Switch } from 'react-router-dom';

import DetailRecommend from '../components/Detail/DetailRecomend';
import Introduce from '../components/Introduce/Introduce';
import RealTime from '../components/RealTime/RealTime';

const Index = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/realtime">
                    <RealTime />
                </Route>
                <Route path="/detail/:id">
                    <DetailRecommend />
                </Route>
                <Route path="/random">랜덤 추천</Route>
                <Route path="/worldcup">음식 월드컵</Route>
                <Route path="/developer">개발자 소개</Route>
                <Route exact path="/">
                    <Introduce />
                </Route>
            </Switch>
        </div>
    );
};
export default Index;
