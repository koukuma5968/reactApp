import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../../common/submitform.jsx';
import c_css from '../../../common/css/common_style.scss';
import css from '../../../common/css/new_style.scss';

class CreateUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            familyName: '',
            firstName: '',
            email: '',
            userId: '',
            pass: '',
            passconf: '',
        }
    }
    render() {
        const form = new Form(this.props);
        return (
            <div className={css.user}>
                <div className={css.user_content}>
                    <label>ユーザ新規作成</label>

                    <span className={c_css.p_t20}></span>
                    <hr />
                    <span className={c_css.p_t20}></span>

                    <label>名前<span className={c_css.text_red}> ※</span></label>
                    <div className={css.user_name_div}>
                        <input className={css.user_name_item} type="text" value={this.familyName} 
                            onChange={event => this.setState({familyName: event.target.value})} placeholder="氏" />
                        <input className={`${css.user_name_item} ${c_css.flot_r}`} type="text" value={this.firstName} 
                            onChange={event => this.setState({firstName: event.target.value})} placeholder="名" />
                    </div>

                    <span className={c_css.p_t20}></span>

                    <label>Eメールアドレス<span className={c_css.text_red}> ※</span></label>
                    <input className={css.user_item} type="email" value={this.email} 
                        onChange={event => this.setState({email: event.target.value})} placeholder="@gmail.com or @alhinc.jp" />
                    <span className={c_css.p_t20}></span>

                    <label>ユーザID<span className={c_css.text_red}> ※</span></label>
                    <input className={css.user_item} type="text" value={this.userId} 
                        onChange={event => this.setState({userId: event.target.value})} placeholder="半角英数4～10桁" />

                    <span className={c_css.p_t20}></span>

                    <label>パスワード<span className={c_css.text_red}> ※</span></label>
                    <input className={css.user_item} type="password" value={this.pass} 
                        onChange={event => this.setState({pass: event.target.value})} placeholder="半角英数4～12桁" />

                    <span className={c_css.p_t20}></span>

                    <label>パスワード確認用<span className={c_css.text_red}> ※</span></label>
                    <input className={css.user_item} type="password" value={this.passconf} 
                        onChange={event => this.setState({passconf: event.target.value})} placeholder="半角英数4～12桁" />

                    <span className={c_css.p_t20}></span>

                    <div>
                        <input className={`${css.user_create_bt} ${c_css.flot_r} ${c_css.bt_color}`} type="button" value="登録" onClick={() => form.userResults(this.state)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateUser