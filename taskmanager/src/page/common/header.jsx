import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import ApiService from '../../common/api/ApiService.jsx';
import InputCheck from './inputcheck.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    /* ログイン時チェック */
    login = (state) => {
        console.log(state.userid);
        console.log(this.props);
        if (!InputCheck.checkAlphaNumber(state.userid)) {
            alert('ユーザIDは半角英数で入力してください。');
            return;
        }
        if (!InputCheck.checkNumberScope(state.userid.length, 4, 10)) {
            alert('ユーザIDは4桁から10桁で入力してください。');
            return;
        }
        if (!InputCheck.checkAlphaNumberSymbol(state.pass) || !InputCheck.checkNumberScope(state.pass.length, 4, 12)) {
            alert('パスワードに誤りがあります。');
            return;
        }
        ApiService.doLoginCheck(state.userid,state.pass)
        .then(usercheck => {
            console.log(usercheck);
            if (!usercheck.data.check) {
                alert('ユーザIDまたはパスワードが一致しません。');
                return;
            }
            ApiService.getproject(usercheck.data.userdata).then(projectret => {
                console.log(projectret);
                this.props.history.push({
                    pathname: '/chartview/home/dashboard',
                    state: { 
                        project: projectret.data, 
                        userMng: usercheck.data.userdata,
                        groupoption: usercheck.data.groupoption
                    }
                });
            });
        });
    }
    create = () => {
        this.props.history.push('/chartview/create');
    }
    userResults = (state) => {
        let errMsg = '';
        if (!InputCheck.checkRequired(state.familyName)) {
            errMsg = errMsg + '名前（氏）が入力されていません。\n';
        }
        if (!InputCheck.checkRequired(state.firstName)) {
            errMsg = errMsg + '名前（名）が入力されていません。\n';
        }
        if (!InputCheck.checkRequired(state.email)) {
            errMsg = errMsg + 'メールアドレスが入力されていません。\n';
        }
        if (!InputCheck.checkRequired(state.userId)) {
            errMsg = errMsg + 'ユーザIDが入力されていません。\n';
        }
        let passReq = true;
        if (!InputCheck.checkRequired(state.pass)) {
            errMsg = errMsg + 'パスワードが入力されていません。\n';
            passReq = false;
        } 
        if (!InputCheck.checkRequired(state.passconf)) {
            errMsg = errMsg + 'パスワードが入力されていません。\n';
            passReq = false;
        }
        if (passReq) {
            if (state.pass != state.passconf) {
                errMsg = errMsg + 'パスワードとパスワード確認用が一致しません。\n';
            }
        }
        ApiService.createUser(state)
        .then(res => {
            console.log(res);
            if (res.data == 1) {
                alert('このユーザIDは使用されています。');
                return;
            } else if (res.data == 2) {
                alert('ユーザ登録に失敗しました。');
                return;
            }
            this.props.history.push('/chartview/userresult');
        });
    }
    dashboard = () => {
        ApiService.getproject(state).then(res => {
            this.props.history.push({
                pathname: '/chartview/home/dashboard',
                state: { project: res.data }
            });
        });
    }
    projectResults = (state, data) => {
        console.log('projectResults')
        console.log(this.props);
        console.log(data)
        console.log(state)
        ApiService.createProject(state, data.userMng).then(projectret => {
            console.log(projectret);
            this.props.history.push({
                pathname: '/chartview/home/dashboard',
                state: { 
                    project: projectret.data, 
                    userMng: data.userMng,
                    groupoption: data.groupoption
                }
            });
        });
    }
}
export default Header