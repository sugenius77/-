import { Route, Switch } from 'react-router-dom';
import { Detail, Developer, Introduce, RealTime, Random, WorldCup, Rank } from './Pages';
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
                    <Random />
                </Route>
                <Route path="/worldcup">
                    <WorldCup />
                </Route>
                <Route path="/rank">
                    <Rank />
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
