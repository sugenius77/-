import { Route, Switch } from 'react-router-dom';
import { Detail, Developer, Introduce, RealTime } from './Pages';
const Index = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/realtime">
                    <RealTime />
                </Route>
                r
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Route path="/random">랜덤 추천</Route>
                <Route path="/worldcup">음식 월드컵</Route>
                <Route path="/developer">
                    <Developer />
                </Route>
                <Route exact path="/">
                    <Introduce />
                </Route>
            </Switch>
        </div>
    );
};

export default Index;
