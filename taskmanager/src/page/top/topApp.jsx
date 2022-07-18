import React from 'react';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/top_style.scss';
import LoginUser from './loginUserApp.jsx';

class Top extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={css.top}>
                <span className={css.top_icon_image}>
                    <LoginUser userName={`${this.props.user.family_name} ${this.props.user.first_name}`} />
                </span>
            </div>
        );
    }
}
export default Top