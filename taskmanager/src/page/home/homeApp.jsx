import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import SideMenu from '../side/menuApp.jsx';
import Project from '../project/projectApp.jsx';
import CreateProject from '../new/project/createProjectApp.jsx';
import CreateTask from '../new/task/createTaskApp.jsx';
import TaskList from '../task/taskListApp.jsx';
import Top from '../top/topApp.jsx';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/main_style.scss';

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            projectlist: this.props.location.state.projectlist,
            projectoption: this.props.location.state.projectoption,
            userMng: this.props.location.state.userMng,
            groupoption: this.props.location.state.groupoption,
        }
    }

    render() {
        return (
            <div>
                <Top user={this.state.userMng}/>
                <div className={css.main}>
                    <SideMenu data={this.state}/>
                    <Switch>
                        <Route exact path="/chartview/home/dashboard" component={Project} />
                        <Route exact path="/chartview/home/new/project" component={CreateProject} />
                        <Route exact path="/chartview/home/new/task" component={CreateTask} />
                        <Route exact path="/chartview/home/tasklist" component={TaskList} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Home