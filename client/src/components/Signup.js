import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from '../components/Create/index';
import { auth } from '../firebase';
import { Consumer } from './AppProvider';
const Signup = props => <Consumer>
  {({ state, ...context }) => (
    <div>
      <Form
        action="createUser"
        title="Create account"
        onSuccess={() => auth.logout().then(() => {
          context.destroySession();
          context.clearMessage();
          props.history.push('/accountCreated');
        })}
        onError={({ message }) => context.setMessage(`Error occured: ${message}`)}
      />
    </div>
  )}
</Consumer>;
export default withRouter(Signup);