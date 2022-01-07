import { Route, Routes, Switch } from 'react-router-dom';
import { Detail, Developer, Introduce, RealTime } from './Pages';
import Random from './Routes/Random';
import Worldcup from './Routes/Worldcup';
import WorldcupRank from './Routes/Worldcup/WorldcupPresenter2'
const Index = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/realtime">
                    <RealTime />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Route path="/random">
                    <Random/>
                </Route>
                <Route path="/worldcup">
                    <Worldcup/>
                </Route>
                <Route path="/rank">
                    <WorldcupRank/>
                </Route>
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
