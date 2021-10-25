import React from 'react';
import ReactDOM from 'react-dom';

class Project extends React.Component {

    constructor(props){
        super(props)
		this.state = {
            page: this.props.location.state
        };
	}

    render() {
        return (
        <div className="project">
        </div>
        );
    }
}
export default Project