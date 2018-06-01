/**
 * Created by win10 on 2018/6/1.
 */
import React, { Component } from 'react';
import { Random } from 'mockjs';
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
                { listHtml }
            </div>
        );
    }

    handleEdit(id) {
        console.log(id);
    }

    handleDel(id) {
        console.log(id);
    }
}

export default Home;
