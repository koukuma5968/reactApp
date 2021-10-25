import React from 'react';
import ReactDOM from 'react-dom';
import SideMenu from '../side/menuApp.jsx'

class Home extends React.Component {

    constructor(props){
        super(props)
		this.state = {
            page: this.props.location.state
        };
	}

    render() {
        return (
            <div className="home">
                <SideMenu />
                <span>ホーム</span>
            </div>
        );
    }
}
export default Home