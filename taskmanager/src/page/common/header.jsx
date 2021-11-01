import React from 'react';
import ReactDOM from 'react-dom';
import InputCheck from './inputcheck.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    /* ログイン時チェック */
    login = (state) => {
        console.log(state.userid);
        const check = new InputCheck();
        if (!check.checkAlphaNumber(state.userid)) {
            alert('ユーザIDは半角英数で入力してください。');
            return;
        }
        if (!check.checkNumberScope(state.userid.length, 4, 10)) {
            alert('ユーザIDは4桁から10桁で入力してください。');
            return;
        }
        if (!check.checkAlphaNumberSymbol(state.pass) || !check.checkNumberScope(state.pass.length, 4, 12)) {
            alert('パスワードに誤りがあります。');
            return;
        }
        this.props.history.push('/chartview/home/dashboard');
    }
    create = () => {
        this.props.history.push('/chartview/create');
    }
    userResults = () => {
        this.props.history.push('/chartview/userresult');
    }
    dashboard = () => {
        this.props.history.push('/chartview/home/dashboard');
    }
    createProject = () => {
        this.props.history.push('/chartview/home/new/project');
    }
    projectResults = (state) => {
        this.props.history.push('/chartview/home/dashboard');
    }
}
export default Header