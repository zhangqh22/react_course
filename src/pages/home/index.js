/**
 * Created by win10 on 2018/6/1.
 */
import React, { Component } from 'react';
import { Random } from 'mockjs';
import $ from 'jquery';
import './css/index.css';

class Home extends Component {
    constructor(props) {
        super(props);

        let data = [];
        for(let i=0; i<50; i++) {
            data.push({
                id: Random.guid(),
                title: Random.title(),
                content: Random.cparagraph(),
                image: Random.dataImage(),
                time: Random.datetime()
            })
        }

        this.state = {
            list: data
        }
    }

    render() {
        let listHtml = this.state.list.map(v=>{
                return (<div className="panel" id={ v.id } key={ v.id }>
                            <div className="panel-head">
                                { v.title } | { v.time }
                                <button type="button" onClick={this.handleEdit.bind(this, v.id)} style={{ marginRight: 6 }}>编辑</button>
                                <button type="button" onClick={this.handleDel.bind(this, v.id)}>删除</button>
                            </div>
                            <div className="panel-body">
                                { v.content }
                                <img src={v.image} />
                            </div>
                        </div>);
            });
        return (
            <div>
                <button type="button" onClick={this.handleAdd.bind(this)} style={{marginRight: '10px'}}>增加一条</button>
                <button type="button" onClick={this.handleAsyncAdd.bind(this)} style={{marginRight: '10px'}}>异步增加</button>
                <button type="button" onClick={this.handleLogout.bind(this)} style={{float: 'right'}}>退出登录</button>
                { listHtml }
            </div>
        );
    }

    handleAdd() {
        let addList = [{
            id: Random.guid(),
            title: '新增-'+Random.title(),
            content: Random.cparagraph(),
            image: Random.dataImage(),
            time: Random.datetime()
        }].concat(this.state.list);
        this.setState({
            list: addList
        });
    }

    handleAsyncAdd() {
        $.getScript('list.js', res=>{
            let data = eval(res); // 只作演示参考，实际项目尽量不使用eval
            let addList = data.concat(this.state.list);
            this.setState({
                list: addList
            });
        });
    }

    handleEdit(id) {
        alert('没有编辑框，只做了随机修改演示~');
        let filterList = this.state.list.map(v=>{
            if(v.id === id) {
                v.image = Random.dataImage();
                v.title = '编辑-'+Random.title();
            }
            return v;
        });
        this.setState({
            list: filterList
        });
    }

    handleDel(id) {
        let delFlag = window.confirm('确定要删除吗？');
        if(delFlag) {
            let filterList = this.state.list.filter(v=>{
                if(v.id !== id) return v;
            });
            this.setState({
                list: filterList
            });
        }
    }

    handleLogout() {
        sessionStorage.removeItem('username');
        this.props.router.replace('/login');
    }
}

export default Home;
