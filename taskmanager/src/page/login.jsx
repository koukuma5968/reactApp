import React from 'react';
import ReactDOM from 'react-dom';
import Form from './common/submitform.jsx';
import c_css from '../common/css/common_style.scss';
import css from '../common/css/login_style.scss';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userid: '',
            pass: '',
        }
    }
    upUserid(event) {
        this.setState ({
            userid : event.target.value
        });
    }
    upPass(event) {
        this.setState ({
            pass : event.target.value
        });
    }
    render() {
        const form = new Form(this.props);
        return (
        <div className={css.login}>
            <div className={css.login_content}>
                <label>ログイン</label>
                <input className={`${css.login_item} ${css.login_id_image}`} type="text" id="userid" value={this.userid} 
                    maxLength="10" onChange={event => this.upUserid(event)} placeholder="ユーザID" />
                <input className={`${css.login_item} ${css.login_pass_image}`} type="password" id="password" value={this.pass} 
                    maxLength="12" onChange={event => this.upPass(event)} placeholder="パスワード" />
                <div>
                    <input className={`${css.login_item_bt} ${c_css.bt_color}`} type="button" value="ログイン" onClick={() => form.login(this.state)} />
                </div>
                <div>
                    <a className={css.login_item_anc} href="">パスワードを忘れた場合</a>
                </div>
                <span className={c_css.p_t20}></span>
                <div className={css.line}>
                    <hr className={css.line_l} />or<hr className={css.line_r} />
                </div>
                <span className={c_css.p_t20}></span>
                <input className={`${css.create_bt} ${c_css.bt_color}`} type="button" value="新規ユーザ登録" onClick={form.create} />
            </div>
        </div>
        );
    }
}
export default Login