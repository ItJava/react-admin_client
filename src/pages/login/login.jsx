/*
用户登录的路由组件
 */

import './login.less'
import {Component} from "react";
import logo from '../images/logo.png'

export default class Login extends Component{

    render(){
        return (
            <div className='login'>

                <header className='login-header'>
                    <img src={logo} alt='logo'/>
                    <h1>React 项目：后台管理系统</h1>

                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <div>Form组件标签</div>

                </section>

            </div>
        )
    }
}