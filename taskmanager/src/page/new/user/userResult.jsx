import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../../common/submitform.jsx';
import c_css from '../../../common/css/common_style.scss';
import css from '../../../common/css/new_style.scss';

class UserResult extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const form = new Form(this.props);
        return (
            <div className={css.user}>
                <div className={css.user_result_content}>
                    <span className={css.user_result_item}>ユーザ登録完了</span>
                    <span className={c_css.p_t20}></span>
                    <div className={css.user_result_item} >
                        <input className={`${css.user_result_bt} ${c_css.bt_color}`} type="button" value="ログイン画面へ" onClick={() => this.props.history.push('/')} />
                    </div>
                </div>
            </div>
        );
    }
}
export default UserResult