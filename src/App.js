/*
应用根组件
 */
import {Component} from "react";

import {BrowserRouter,Switch,Route} from "react-router-dom";
import './App.less'


import Login from './pages/login/login'
import Admin from './pages/admin/admin'



export default class App extends Component{



render() {

         return (
             <BrowserRouter>
                 <Switch>  {/*只匹配其中一个路由*/}
                     <Route path='/login'  component={Login}/>
                     <Route path='/'  component={Admin}/>
                 </Switch>
             </BrowserRouter>
         )
    }
}