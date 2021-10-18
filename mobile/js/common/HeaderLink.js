import React from "react";
import HeaderListService from '../api/HeaderListService';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class HeaderLink extends React.Component {

    constructor(props){
        super(props)
        this.headersubmit = this.headersubmit.bind(this);
        this.state = {
            headlist: []
        };
    }

    componentWillMount() {
		HeaderListService.getHeaders().then((response) => {
			this.setState({
                headlist: response.data.headlist,
            });
        });
	}

    headersubmit(link){
        this.props.history.push({
            pathname: '/blog/'
        });
    }

    render() {

        const propTypes = {
            match: PropTypes.object.isRequired,
            location: PropTypes.object.isRequired,
            history: PropTypes.object.isRequired
        };
        const headers = React.Children.toArray(
            this.state.headlist.map(head => 
                <h3><a onClick={() => this.headersubmit(head.link)} >{head.title}</a></h3>
            ),
        );
        return (
            <div className="Toptitle">
                <div className="new-entry">
                    <div className="new-title">
                        {headers}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(HeaderLink);