import React from 'react';
import ReactDOM from 'react-dom';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/top_style.scss';

class LoginUser extends React.Component {

    render() {
        return (
            <span className={`${css.login_user} ${c_css.flot_r}`}>ユーザ名</span>
        );
    }
}
export default LoginUser