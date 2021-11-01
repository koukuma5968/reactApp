import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import SideMenu from '../side/menuApp.jsx';
import Project from '../project/projectApp.jsx';
import CreateProject from '../new/project/createProjectApp.jsx';
import Top from '../top/topApp.jsx';
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/main_style.scss';

class Home extends React.Component {

    constructor(props){
        super(props)
	}

    render() {
        return (
            <div>
                <Top />
                <div className={css.main}>
                    <SideMenu />
                    <Switch>
                        <Route exact path="/chartview/home/dashboard" component={Project} />
                        <Route exact path="/chartview/home/new/project" component={CreateProject} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Home