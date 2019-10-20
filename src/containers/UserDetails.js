import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';

export class UserDetails extends Component {
    render() {
        if (!this.props.user) {
            return (
                <div>
                    No users selected
                </div>
            )
        }
        return (
            <div>
                <ul>
                    <p>Email:{this.props.user.email}</p>
                    <p>Gender:{this.props.user.gender}</p>

                </ul>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetails);
