import React from 'react';
import ReactDOM from 'react-dom';
import DispatchRouter from '../common/DispatchRouter.jsx';

class Login extends React.Component {
    render() {
        <DispatchRouter />
        const btnClick = () => {
            this.props.history.push('/home');
        }
        return (
        <div className="login">
            <span>ログイン</span>
            <input type="text" />
            <input type="button" value="ログイン" onClick={btnClick} />
        </div>
        );
    }
}
export default Login