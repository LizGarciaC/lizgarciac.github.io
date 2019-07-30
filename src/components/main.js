import React from "react";
import {Switch, Route} from "react-router-dom";
import Contact from './Contact';
import Aboutme from './Aboutme';
import Home from './Home';
import Projects from './Projects';
import Curriculum from './Curriculum';

const Main = () =>(
<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/Aboutme" component={Aboutme}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/Projects" component={Projects}/>
    <Route path="/Curriculum" component={Curriculum}/>

</Switch>
)
    export default Main;