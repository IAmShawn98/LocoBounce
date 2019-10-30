// Dependencies.
import React, {
  Component,
  createRef
} from 'react';

import { Link, withRouter } from 'react-router-dom';
import { Consumer } from '../AppProvider';
import PropTypes from 'prop-types';
import { auth } from '../../firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import './style.css';

// Mobile Breakpoints.
import './media/phone-320.css' // smartphones, iPhone, portrait 480x320 phones.
import './media/nook-482.css'; // portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.
import './media/tablets-642.css'; // portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones.
import './media/laptop-962.css' // tablet, landscape iPad, lo-res laptops ands desktops.

class Create extends Component {
  constructor(props) {
    super(props);

    this.email = createRef();
    this.password = createRef();
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSuccess() {
    this.resetForm();
    this.props.onSuccess && this.props.onSuccess();
  }

  handleErrors(reason) {
    this.props.onError && this.props.onError(reason);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      email,
      password,
      props: { action }
    } = this;

    auth.userSession(
      action,
      email.current.value,
      password.current.value
    ).then(this.handleSuccess).catch(this.handleErrors);
  }

  resetForm() {
    if (!this.email.current || !this.password.current) { return }
    const { email, password } = Create.defaultProps;
    this.email.current.value = email;
    this.password.current.value = password;
  }

  render() {
    const handleLogout = context => {
      auth.logout();
      context.destroySession();
      // context.history.push('/signedOut');
    };

    auth.logout();

    return <Consumer>
      {({ state, ...context }) => (
        state.currentUser ?
          <p className="lead">
            The login session has ended, please click <a className="text-primary" onClick={() => handleLogout(context)}>here</a> to log back in.
          </p>
          :
          <div className="container">
            {/* Half Image Half Form: */}
            <div id="ImageSlide">
              <div class="bd-example">
                <div id="carouselExampleFade" class="carousel slide carousel-fade pointer-event" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="cityScape img-fluid" src="https://i.gifer.com/LF0p.gif" alt="phillyImg" />
                      <div class="carousel-caption d-md-block">
                        <blockquote id="aboutLocoBounce" class="blockquote text-center">
                          <h1 className="display-4"><span id="Loco">Loco</span> <img className="animated bounce" id="LocoBall" src="https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true" alt="locoBall.png" /> <span id="Bounce">Bounce</span></h1>
                          <p><span className="mr-2" id="relocating">Relocating</span>  <span id="easy">Made Easy</span></p>
                          <h2 id="appDescribe">
                            LocoBounce is an app for people looking to relocate to any city all around the world.
                            We have a dataset including a wide variety of tools and statistics that are essential
                            to know before taking your next big trip. Whether you need to know the cost of living
                             your city of interest, or the average cost of a hotel or apartment, LocoBounce is an
                             all-in-one solution to assist you in your next big adventure!
                           </h2>
                        </blockquote>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="img-fluid" src="https://media0.giphy.com/media/SbakXQ2r4TiieHIifY/giphy.gif" alt="pittImg" />
                      <div class="carousel-caption d-md-block">
                        <blockquote id="aboutLocoBounce" class="blockquote text-center">
                          <h1 className="display-4"><span id="Loco">Loco</span> <img className="animated bounce" id="LocoBall" src="https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true" alt="locoBall.png" /> <span id="Bounce">Bounce</span></h1>
                          <p><span className="mr-2" id="relocating">Relocating</span>  <span id="easy">Made Easy</span></p>
                          <h2 id="appDescribe">
                            LocoBounce is an app for people looking to relocate to any city all around the world.
                              We have a dataset including a wide variety of tools and statistics that are essential
                              to know before taking your next big trip. Whether you need to know the cost of living
                               your city of interest, or the average cost of a hotel or apartment, LocoBounce is an
                               all-in-one solution to assist you in your next big adventure!
                           </h2>
                        </blockquote>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img class="cityScape img-fluid" src="https://media.giphy.com/media/kgZfaOsDLCqTlWthCW/giphy.gif" alt="pittImg" />
                      <div class="carousel-caption d-md-block">
                        <blockquote id="aboutLocoBounce" class="blockquote text-center">
                          <h1 className="display-4"><span id="Loco">Loco</span> <img className="animated bounce" id="LocoBall" src="https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true" alt="locoBall.png" /> <span id="Bounce">Bounce</span></h1>
                          <p><span className="mr-2" id="relocating">Relocating</span>  <span id="easy">Made Easy</span></p>
                          <h2 id="appDescribe">
                            LocoBounce is an app for people looking to relocate to any city all around the world.
                              We have a dataset including a wide variety of tools and statistics that are essential
                              to know before taking your next big trip. Whether you need to know the cost of living
                               your city of interest, or the average cost of a hotel or apartment, LocoBounce is an
                               all-in-one solution to assist you in your next big adventure!
                           </h2>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="CreateForm">
              <div className="container" id="AccountForm">
                <div className="col-md-8">
                  <div className="container">
                    <div className="row">
                    </div>
                  </div>
                  <div class="card border-primary mb-3">
                    {/* <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <Link class="nav-link active" href="#" to="/login"><i class="fa fa-key" aria-hidden="true"></i> Sign In</Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" href="#" to="/signup"><i class="fa fa-users" aria-hidden="true"></i> Register An Account</Link>
                      </li>
                    </ul> */}
                    <Tabs>
                      <TabList>
                        <Tab>
                          <Link class="nav-link" href="#" to="/login"><i class="fa fa-key" aria-hidden="true"></i> Sign In</Link>
                        </Tab>
                        <Tab>
                          <Link class="nav-link" href="#" to="/signup"><i class="fa fa-users" aria-hidden="true"></i> Register An Account</Link>
                        </Tab>
                      </TabList>
                      <TabPanel>
                        <div class="tab-pane fade show active">
                          <div class="card-body text-primary">
                            <form onSubmit={this.handleSubmit}>
                              <div class="form-group">
                                <div class="input-group input-group-lg mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text text-white bg-primary"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                  </div>
                                  <input name="name" type="email" ref={this.email} class="form-control" placeholder="example@email.com" />
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="input-group input-group-lg mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text text-white bg-primary"><i class="fa fa-key" aria-hidden="true"></i></span>
                                  </div>
                                  <input type="password" autoComplete="none" ref={this.password} class="form-control" placeholder="••••••••••••••" />
                                </div>
                              </div>
                              <div class="form-group form-check">
                                <button type="submit" class="btn btn-primary btn-block float-right mb-3 p-2">Sign In</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div class="tab-pane fade show active">
                          <div class="card-body text-primary">
                            <form onSubmit={this.handleSubmit}>
                              <div class="form-group">
                                <div class="input-group input-group-lg mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text text-white bg-primary"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                  </div>
                                  <input name="name" type="email" ref={this.email} class="form-control" placeholder="example@email.com" />
                                </div>
                              </div>
                              <div class="form-group">
                                <div class="input-group input-group-lg mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text text-white bg-primary"><i class="fa fa-key" aria-hidden="true"></i></span>
                                  </div>
                                  <input type="password" autoComplete="none" ref={this.password} class="form-control" placeholder="••••••••••••••" />
                                </div>
                              </div>
                              <div class="tab-content">
                                <div class="form-group form-check">
                                  <button type="submit" class="btn btn-primary btn-block float-right mb-3 p-2">Register New Account</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
                <div id="footer" className="container text-center border-top">
                  <div class="mt-5">
                    <p><u>Shawn Luther</u> | <u>Patrick Follett</u> | <u>Gayah Karmo</u></p>
                    <a class="github-button" href="https://github.com/PWFollett/locoBounce-" data-icon="octicon-star" data-size="large" data-show-count="true">Star This Project</a></div>
                </div>
              </div>
            </div>
          </div>
      )}
    </Consumer>
  }
}

Create.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
}

Create.defaultProps = {
  errors: '',
  email: '',
  password: ''
}

export default withRouter(Create);