import React from 'react';
import ReactDOM from 'react-dom';
import Downchart from './downchart.jsx';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/main_style.scss';

class Project extends React.Component {

    render() {
        return (
        <div className={css.main_content}>
            <div className={css.title}>
                <span>プロジェクト</span>
            </div>
            <div className={css.project_item}>
                <input id="acd_check1" className={c_css.acd_check} type="checkbox" />
                <label className={c_css.acd_label} htmlFor="acd_check1">Aプロジェクト</label>
                <div className={c_css.acd_content}>
                    <hr />
                    <div className={css.project_ditail}>
                        <div className={`${c_css.p_t10} ${c_css.p_l10}`}>
                            <span>期限：開始日　終了日</span>
                            <span className={`${c_css.flot_r} ${c_css.p_r30}`}>メンバ；A、B</span>
                        </div>
                        <div className={`${c_css.p_t10} ${c_css.p_l10}`}>
                            <span className={c_css.p_r20}>タスク総数：100</span>
                            <span className={c_css.p_r20}>タスク残数：100</span>
                            <span>進捗率：0%</span>
                        </div>
                        <div className={`${css.downchart_container} ${c_css.p_t30}`}>
                            <Downchart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Project