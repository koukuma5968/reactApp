import React from 'react';
import ReactDOM from 'react-dom';
import Downchart from './downchart.jsx';
import Home from '../home/homeApp.jsx'
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/main_style.scss';

class Project extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projectlist: this.props.location.state.projectlist,
            userMng: this.props.location.state.userMng,
            groupdata: this.props.location.state.groupdata
        }
        console.log('project')
        console.log(this.props)
        console.log(this.props.location.state.projectlist)
        console.log(this.props.location.state.userMng)
        console.log(this.props.location.state.groupdata)
    }

    render() {
        const projectdata = React.Children.toArray(
            this.state.projectlist.map(project => 
                <div className={css.project_item}>
                    <input id={'acd_check' + project.id} className={c_css.acd_check} type="checkbox" />
                    <label className={c_css.acd_label} htmlFor={'acd_check' + project.id}>{project.name}</label>
                    <div className={c_css.acd_content}>
                        <hr />
                        <div className={css.project_ditail}>
                            <div className={`${c_css.p_t10} ${c_css.p_l10}`}>
                                <span>期限： {project.startDay} ～ {project.endDay}</span>
                                {/*
                                <span className={`${c_css.flot_r} ${c_css.p_r30}`}>メンバ:{this.state.userMng.userId}</span>
                                */}
                            </div>
                            <div className={`${c_css.p_t10} ${c_css.p_l10}`}>
                                <span className={c_css.p_r20}>タスク総数：{project.task_count}</span>
                                <span className={c_css.p_r20}>タスク残数：{project.task_remain_count}</span>
                                <span>進捗率：0%</span>
                            </div>
                            {/*
                            <div className={`${css.downchart_container} ${c_css.p_t30}`}>
                                <Downchart />
                            </div>
                            */}
                        </div>
                    </div>
                </div>
            )
        );

        return (
            <div className={css.main_content}>
                <div className={css.title}>
                    <span>プロジェクト</span>
                </div>
                { 
                    (projectdata != null && projectdata.length != 0) ? 
                    <div>   
                        {projectdata}
                    </div>
                    : 
                    <div className={css.project_item}>   
                        <span>プロジェクトがありません。</span>
                    </div>
                }
            </div>
        );
    }
}
export default Project