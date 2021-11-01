import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Header from '../common/header.jsx';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/left_style.scss';

class Menu extends React.Component {
    ShowLocation = () => {
        const location = useLocation();
    }
    render() {
        const head = new Header(this.props);
        return (
            <div className={css.left_content}>
            <ul onLoad={this.ShowLocation}>
                <li className={location.pathname == '/chartview/home/dashboard' ? css.menu_select : ''}>
                    <Link to='/chartview/home/dashboard' >ダッシュボード</Link>
                </li>
                <li className={location.pathname == '/chartview/home/new/project' ? css.menu_select : ''}>
                    <Link to='/chartview/home/new/project' >プロジェクト作成</Link>
                </li>
                <li className={location.pathname == '/chartview/home/tasklist' ? css.menu_select : ''}>
                    <Link to='/chartview/home/tasklist'>タスク一覧</Link>
                </li>
                <li className={location.pathname == '/chartview/home/backlog' ? css.menu_select : ''}>
                    <Link to="/chartview/home/backlog">バックログ</Link>
                </li>
                <li className={location.pathname == '/chartview/home/settings' ? css.menu_select : ''}>
                    <Link to="/chartview/home/settings">設定</Link>
                </li>
            </ul>
        </div>
        );
    }
}
export default Menu