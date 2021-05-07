import React from 'react';
import { Link } from "react-router-dom";
import cartoon from "../images/414.jpg";

const CallToAction = () => {
    return (
        <div>
            <div className="container mt-5 call-to-action">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img src={cartoon} className="cartoon"></img>
                    </div>
                    <div className="col-md-6 col-12 call-container action-text text-center">
                        <h2 className="call-text">Ready To Get Started ?</h2>
                        <Link className="btn btn-lg header-btn mt-2" to="/signup">Signup Now !</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
