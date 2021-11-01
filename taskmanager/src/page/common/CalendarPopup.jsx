import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import '../../../node_modules/react-calendar/dist/Calendar.css';
import c_css from '../../common/css/common_style.scss';

class CalendarPopup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            targetday: new Date(),
        }
    }
    render() {
        return (
            <div className={c_css.calendr_pop}>
                <Calendar locale="ja-jp" calendarType="US" value={this.state.targetday} className={c_css.calendr_pop}
                    onClickDay={(value, e) => this.props.selectDay(value)}>
                </Calendar>
            </div>
        );
    }
}
export default CalendarPopup