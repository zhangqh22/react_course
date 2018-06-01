/**
 * Created by win10 on 2018/6/1.
 */
import React, { Component } from 'react';
import './css/index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="login-box">
                <fieldset>
                    <legend>后台</legend>
                    <div><input type="text" onChange={this.changeUsername.bind(this)} /></div>
                    <div className="mt-10"><input type="password"  onChange={this.changePassword.bind(this)}/></div>
                    <button className="mt-10" type="button" onClick={this.handleLogin.bind(this)}>登录</button>
                </fieldset>
            </div>
        );
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value.trim()
        });
    }

    changePassword(e) {
        this.setState({
            password: e.target.value.trim()
        });
    }

    handleLogin() {
        let {username, password} = this.state;
        if(username==='admin' && password==='123456') {
            sessionStorage.setItem('username', username);
            this.props.router.replace('/home');
        } else {
            alert('用户名/密码错误~');
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', (e)=>{
            if(e.keyCode === 13) {
                this.handleLogin();
            }
        });
    }
}

export default Login;