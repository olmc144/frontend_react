import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import FourOFour from "../views/404";
import Search from "../views/Search";

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Search />
                </Route>
                <Route>                    
                    <FourOFour />
                </Route>
            </Switch>
        </Router>
    );
}