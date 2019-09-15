import React from "react";
import {Switch, Route} from "react-router-dom";
import Servers from "./components/Servers";
import Home from "./components/Home";


export default(
<Switch>
    <Route exact path="/" component={Home} ></Route>
    <Route path="/servers" component={Servers} ></Route>
</Switch>

)
