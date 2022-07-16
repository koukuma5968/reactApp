import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import SubmitForm from '../common/submitform.jsx';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/left_style.scss';

class Menu extends React.Component {
    constructor(props){
        super(props);
        console.log("menu");
        console.log(props.data);
    }
    ShowLocation = () => {
        const location = useLocation();
    }
    render() {
        const form = new SubmitForm(this.props);
        return (
            <div className={css.left_content}>
            <ul onLoad={this.ShowLocation}>
                <li className={location.pathname == '/task/home/dashboard' ? css.menu_select : ''}>
                    <Link to={{pathname: '/task/home/dashboard', 
                    state: { 
                        projectlist: this.props.data.projectlist,
                        projectoption: this.props.data.projectoption,
                        userMng: this.props.data.userMng,
                        groupoption: this.props.data.groupoption
                    }}}>ダッシュボード</Link>
                </li>
                <li className={location.pathname == '/task/home/new/project' ? css.menu_select : ''}>
                    <Link to={{pathname: '/task/home/new/project', 
                    state: { 
                        projectlist: this.props.data.projectlist,
                        projectoption: this.props.data.projectoption,
                        userMng: this.props.data.userMng,
                        groupoption: this.props.data.groupoption
                    }}} >プロジェクト作成</Link>
                </li>
                <li className={location.pathname == '/task/home/new/task' ? css.menu_select : ''}>
                    <Link to={{pathname: '/task/home/new/task', 
                    state: { 
                        projectlist: this.props.data.projectlist,
                        projectoption: this.props.data.projectoption,
                        userMng: this.props.data.userMng,
                        groupoption: this.props.data.groupoption
                    }}} >タスク作成</Link>
                </li>
                <li className={location.pathname == '/task/home/tasklist' ? css.menu_select : ''}>
                    <Link to={{pathname: '/task/home/tasklist', 
                    state: { 
                        projectlist: this.props.data.projectlist,
                        projectoption: this.props.data.projectoption,
                        userMng: this.props.data.userMng,
                        groupoption: this.props.data.groupoption
                    }}} >タスク一覧</Link>
                </li>
                {/* <li className={location.pathname == '/chartview/home/backlog' ? css.menu_select : ''}>
                    <Link to="/chartview/home/backlog">バックログ</Link>
                </li>
                <li className={location.pathname == '/chartview/home/settings' ? css.menu_select : ''}>
                    <Link to="/chartview/home/settings">設定</Link>
                </li> */}
            </ul>
        </div>
        );
    }
}
export default Menu