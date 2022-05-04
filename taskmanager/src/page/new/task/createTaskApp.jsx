import React from 'react';
import ReactDOM from 'react-dom';
import { format } from "date-fns";
import Select from 'react-select';
import SubmitForm from '../../common/submitform.jsx';
import CalendarPopup from '../../common/CalendarPopup.jsx';
import c_css from '../../../common/css/common_style.scss';
import css from '../../../common/css/new_style.scss';

class CreateTask extends React.Component {
    constructor(props){
        super(props);
        this.startPopup = this.startPopup.bind(this);
        this.endPopup = this.endPopup.bind(this);
        this.setStartDay = this.setStartDay.bind(this);
        this.setEndDay = this.setEndDay.bind(this);
        this.state = {
            taskName: '',
            isStartPop: false,
            isEndPop: false,
            startDay: '',
            endDay: '',
            projectsel:'',
            procsel:'',
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
        const procoptions = [
            { value: '0', label: '高' },
            { value: '1', label: '中' },
            { value: '2', label: '低' },
            { value: '9', label: 'なし' },
        ]
        const form = new SubmitForm(this.props);
        return (
            <div className={css.project_main_content}>
                <div className={css.project_content}>
                    <label>タスク追加</label>

                    <hr />

                    <div className={css.project_div}>
                        <label className={css.project_item}>プロジェクト選択</label>
                        <Select className={css.project_item} options={this.props.location.state.projectoption} 
                        onChange={event => this.setState({projectsel: event.value})} />
                    </div>

                    <div className={css.project_div}>
                        <input className={css.project_item} type="text" value={this.taskName} placeholder="タスク名"
                            onChange={event => this.setState({taskName: event.target.value})} />
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
                        <label className={css.project_item}>優先度</label>
                        <Select className={css.project_item} options={procoptions}
                        onChange={event => this.setState({procsel: event.value})} />
                    </div>
                    <div className={css.project_div}>
                        <input className={`${css.project_bt} ${c_css.flot_r} ${c_css.bt_color}`} type="button" value="登録" 
                        onClick={() => form.taskResults(this.state,this.props.location.state)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateTask