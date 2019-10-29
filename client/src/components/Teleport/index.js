import React from 'react';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
import './style.css';

export default function Teleport(props) {

    return (
        <div>
            <nav id="DashNav" class="navbar navbar-dark bg-dark flex-md-nowrap p-0">
                <Link to="/dashboard" class="navbar-brand col-sm-3 col-md-2 mr-0">
                    <h1 className="hvr-bounce-in ml-2">
                        <span id="loco">Loco</span>
                        <img class="animated bounce" id="locoBall" src="https://github.com/PWFollett/LocoBounce-/blob/master/client/src/assets/images/locoBall.png?raw=true" alt="locoBall.png" />
                        <span id="bounce">Bounce</span>
                    </h1>
                </Link>
                {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <a id="BtnSignOut" class="nav-link text-dark p-4" href="/"> <i class="fa fa-user" aria-hidden="true"> Sign Out</i></a>
                    </li>
                </ul>
            </nav>
            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-2 bg-light sidebar">
                        <div class="sidebar-sticky mt-4">
                            <ul class="nav flex-column text-center">
                                <li class="nav-item text-primary font-weight-bold">
                                    <h5>LocoBounce Toolbelt</h5>
                                    <hr className="bg-primary" />
                                </li>
                                {/* <input id="FilterWidgetData" type="text" placeholder="Search For Tools" /> */}
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="fa-filter-icon">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input id="FilterWidgetData" type="text" class="form-control" placeholder="Search For Tools" />
                                </div>
                                <table id="WidgetContainer">
                                    <tbody id="WidgetsTable">
                                        <tr className="hvr-bounce-in">
                                            <Link to="/Qaulity"><td><i class="fa fa-check text-success" aria-hidden="true"></i> Life Quality Score</td></Link>
                                        </tr>
                                        <tr className="text-white hvr-bounce-in">
                                            <Link to="/Cost"><td><i class="fa fa-home text-success" aria-hidden="true"></i> Cost of Living</td></Link>
                                        </tr>
                                        <tr className="text-white hvr-bounce-in">
                                            <Link to="/Salaries"><td><i class="fa fa-money text-success" aria-hidden="true"></i> Job Salary Calculator</td></Link>
                                        </tr>
                                        <tr className="text-white hvr-bounce-in">
                                            <Link to="/Safety"><td><i class="fa fa-lock text-success" aria-hidden="true"></i> City Safety</td></Link>
                                        </tr>
                                        <tr className="text-white hvr-bounce-in">
                                            <Link to="/Education"><td><i class="fa fa-graduation-cap text-success" aria-hidden="true"></i> Education</td></Link>
                                        </tr>
                                        <tr className="text-white hvr-bounce-in">
                                            <Link to="/Lgbt"><td><i class="fa fa-users text-success" aria-hidden="true"></i> LGBT Rights</td></Link>
                                        </tr>
                                        <tr className="text-white hvr-bounce-in">
                                            <Link to="/Startups"><td><i class="fa fa-building-o text-success" aria-hidden="true"></i> Startup Scene</td></Link>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>


                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1>City Relocation Statistics</h1>
                        </div>
                        <iframe id="iWidget" title={props.title} src={props.src}></iframe>
                    </main>

                </div>
            </div>


        </div>
    )
}