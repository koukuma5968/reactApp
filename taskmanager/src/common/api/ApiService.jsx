import Httpheder from "./httpheder.jsx";

const LOGIN_PATH = 'login';
const CREATE_USER = 'createuser';
const GET_PROJECT = 'getproject';
const CREATE_PROJECT = 'createproject';
const CREATE_TASK = 'createtask';

class ApiService {
    
    doLoginCheck (userid,pass) {
        let userMng = {
            user_id: userid,
            pass_enc: pass
        }
        console.log(userMng);
        return Httpheder.post(LOGIN_PATH, userMng);
    }
    createUser (state) {
        let userMng = {
            user_id: state.userId,
            email_add: state.email,
            family_name: state.familyName,
            first_name: state.firstName,
            pass_enc: state.pass
        }
        console.log(userMng);
        return Httpheder.post(CREATE_USER, userMng);
    }

    getproject (userMng) {
        return Httpheder.post(GET_PROJECT, userMng);
    }

    createProject (state, userMng) {
        let projectMng = {
            name: state.projectName,
            startDay: state.startDay,
            endDay: state.endDay,
            group_id: state.groupsel
        }
        let updateparam = {
            projectMng: projectMng,
            userMng: userMng
        }
        console.log('createProject post');
        return Httpheder.post(CREATE_PROJECT, updateparam);
    }

    createTask (state, userMng) {
        let taskMng = {
            name: state.taskName,
            startDay: state.startDay,
            endDay: state.endDay,
            project_id: state.projectsel,
            procsel: state.procsel
        }
        let updateparam = {
            taskMng: taskMng,
            userMng: userMng
        }
        console.log('createTask post');
        return Httpheder.post(CREATE_TASK, updateparam);
    }
}

export default new ApiService;