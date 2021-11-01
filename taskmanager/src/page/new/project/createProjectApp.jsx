import React from 'react';
import ReactDOM from 'react-dom';
import Popout from 'react-popout';
import { format } from "date-fns";
import Header from '../../common/header.jsx';
import CalendarPopup from '../../common/CalendarPopup.jsx';
import c_css from '../../../common/css/common_style.scss';
import css from '../../../common/css/new_style.scss';

class CreateProject extends React.Component {
    constructor(props){
        super(props);
        this.startPopup = this.startPopup.bind(this);
        this.endPopup = this.endPopup.bind(this);
        this.setStartDay = this.setStartDay.bind(this);
        this.setEndDay = this.setEndDay.bind(this);
        this.state = {
            projectName: '',
            starday: '',
            endday: '',
            isStartPop: false,
            isEndPop: false,
        }
    }
    startPopup() {
        this.setState({isStartPop: true});
    }
    endPopup() {
        this.setState({isEndPop: true});
    }
    setStartDay = (defaultValue) => {
        console.log(format(defaultValue, "yyyyMMdd"));
        this.setState({
            isStartPop: false,
            starday: format(defaultValue, "yyyyMMdd"),
        });
    }
    setEndDay = (defaultValue) => {
        console.log(format(defaultValue, "yyyyMMdd"));
        this.setState({
            isEndPop: false,
            endday: format(defaultValue, "yyyyMMdd"),
        });
    }
    render() {
        const head = new Header(this.props);
        return (
            <div className={css.project_main_content}>
                <div className={css.project_content}>
                    <label>プロジェクト新規作成</label>

                    <hr />

                    <div className={css.project_div}>
                        <input className={css.project_item} type="text" value={this.projectName} placeholder="プロジェクト名"
                            onChange={event => this.setState({projectName: event.target.value})} />
                    </div>

                    <div className={css.project_div}>
                        <input className={`${c_css.calender_image}`} type="button" onClick={this.startPopup} />
                        { this.state.isStartPop ?
                            <CalendarPopup selectDay={this.setStartDay} />
                        : false}
                        <input className={`${css.project_item} ${c_css.m_l30}`} type="text" defaultValue={this.state.starday} placeholder="開始日"/>
                    </div>
                    <div className={css.project_div}>
                        <input className={`${c_css.calender_image}`} type="button" onClick={this.endPopup} />
                        { this.state.isEndPop ?
                            <CalendarPopup selectDay={this.setEndDay} />
                        : false}
                        <input className={`${css.project_item} ${c_css.m_l30}`} type="text" defaultValue={this.state.endday} placeholder="終了日"/>
                    </div>

                    <div className={css.project_div}>
                        <input className={`${css.project_bt} ${c_css.flot_r} ${c_css.bt_color}`} type="button" value="登録" onClick={() => head.projectResults(this.state)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateProject