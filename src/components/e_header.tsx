import React from 'react';
// get our fontawesome imports
import { faSignOutAlt,faGifts } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const E_header = () => {
    return (
        <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-white">
                                        Follow on Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        Like on Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white">
                                        Email me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">

                        <div>
                            <FontAwesomeIcon icon={faGifts}/>
                        </div>
                        <text>Sample Gifts Prototype App</text>
                    </a>
                </div>
            </div>
        </header>
    );
};