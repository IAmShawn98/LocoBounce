// Dependencies.
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class HomePage extends React.Component {
    render() {
        return (
            <div id="AccountCreatedCard">
                <div class="container card border-primary p-0">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="https://media.giphy.com/media/WQN2jcxMedRl1WV0Iv/giphy.gif" class="card-img" alt="WelcomeGif.gif" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title text-info">Account Created!</h1>
                                <p class="card-text text-primary">
                                    Thank you for joining LocoBounce, you are now part of a community of
                                    travelers looking to take their next big adventure! You now have
                                    complete access to all of our relocating services and can start
                                    immediately. Simply click on the 'Continue' button below
                                    to get started.
                                </p>

                                <Link className="btn btn-info" to="/dashboard">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}