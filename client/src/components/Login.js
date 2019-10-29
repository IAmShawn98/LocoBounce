// Dependencies.
import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../components/Create/index';
import { Consumer } from './AppProvider';

const Login = props => <Consumer>
    {({ state, ...context }) => (
        <div id="tSignIn">
            <div>
                <Form
                    action="signIn"
                    onSuccess={() => props.history.push('/dashboard')}
                    onError={({ message }) => context.setMessage(`Login failed: ${message}`)}
                />
            </div>
        </div>
    )}
</Consumer>;

// Do Export.
export default withRouter(Login);