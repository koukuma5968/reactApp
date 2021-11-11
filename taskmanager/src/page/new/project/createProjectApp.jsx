import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { format } from "date-fns";
import Select from 'react-select';
import Header from '../../common/header.jsx';
import CalendarPopup from '../../common/CalendarPopup.jsx';
import c_css from '../../../common/css/common_style.scss';
import css from '../../../common/css/new_style.scss';

class CreateProject extends React.Component {
    constructor(props){
        super(props);
        console.log('projectcreate');
        console.log(props);
        this.startPopup = this.startPopup.bind(this);
        this.endPopup = this.endPopup.bind(this);
        this.setStartDay = this.setStartDay.bind(this);
        this.setEndDay = this.setEndDay.bind(this);
        this.state = {
            isStartPop: false,
            isEndPop: false,
            projectName: '',
            startDay: '',
            endDay: '',
            groupdata: ''
        }
    }
    startPopup() {
        this.setState({isStartPop: true});
    }
    endPopup() {
        this.setState({isEndPop: true});
    }
    setStartDay = (defaultValue) => {
        this.setState({isStartPop: false});
        this.setState({
            startDay: format(defaultValue, "yyyy/MM/dd"),
        });
    }
    setEndDay = (defaultValue) => {
        this.setState({isEndPop: false});
        this.setState({
            endDay: format(defaultValue, "yyyy/MM/dd"),
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
                        <label className={css.project_item}>グループ選択</label>
                        <Select className={css.project_item} options={this.props.location.state.data.groupoption} 
                        onChange={event => this.setState({groupdata: event.value})} />
                    </div>

                    <div className={css.project_div}>
                        <input className={`${c_css.calender_image}`} type="button" onClick={this.startPopup} />
                        { this.state.isStartPop ?
                            <CalendarPopup selectDay={this.setStartDay} />
                        : false}
                        <input className={`${css.project_item} ${c_css.m_l30}`} type="text" defaultValue={this.state.startDay} placeholder="開始日"/>
                    </div>
                    <div className={css.project_div}>
                        <input className={`${c_css.calender_image}`} type="button" onClick={this.endPopup} />
                        { this.state.isEndPop ?
                            <CalendarPopup selectDay={this.setEndDay} />
                        : false}
                        <input className={`${css.project_item} ${c_css.m_l30}`} type="text" defaultValue={this.state.endDay} placeholder="終了日"/>
                    </div>

                    <div className={css.project_div}>
                        <input className={`${css.project_bt} ${c_css.flot_r} ${c_css.bt_color}`} type="button" value="登録" 
                        onClick={() => head.projectResults(this.state,this.props.location.state.data)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateProject