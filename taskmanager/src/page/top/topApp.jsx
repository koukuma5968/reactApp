import React from 'react';
import ReactDOM from 'react-dom';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/top_style.scss';
import LoginUser from './loginUserApp.jsx';

class Top extends React.Component {

    render() {
        return (
            <div className={css.top}>
                <span className={css.top_icon_image}><LoginUser /></span>
            </div>
        );
    }
}
export default Top