import React from 'react';
import CallToAction from './CallToAction';
import Navbar from '../Screen/Navbar'
import Footer from '../Screen/Footer'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid about-pg-landing mt-5 mb-5">
                <h1 className="text-white"><span className="font-weight-bold">Anesthesia<span className="font-weight-bold text-danger"> O</span>ne</span><span className="font-weight-bold text-danger">+</span></h1>
            </div>
            <div className="container text-left text-black mb-5 font-weight-bold">
                <h1 className="font-weight-bold">Our Mission</h1>
                <div className="bottom-bor-2 mb-4"></div>
                <p className="font-weight-bold para"> The ultimate mission of Anesthesia One is to serve as the one interactive, patient catered
                resource for all your perioperative anaesthesia needs. Multiple medical websites and mobile
                apps currently exist, each with their individual strengths to help with the practice of medicine.
                Few of these websites and mobile apps are specifically designed for anesthesiologists. Of these
                few, they are typically designed with one purpose in mind such as calculating doses of
                medications, calculating specific risk scores or acting as an electronic reference book for
                anaesthesia management considerations. Anesthesia One is unique in its creation of a
                cross-platform (Android, iOS and website-based) experience that: <br /> <br /> (1) consolidates the functions
                of multiple applications into one,  <br /> (2) has the ability to create a patient case where data can be
                shared among these multiple built-in apps to minimize redundant inputs  <br /> (3) view a patient case
                summary with outputs that pulls data from the multiple built-in apps, and  <br />(4) will have the ability
                to save and share anonymized patient case summaries and macros in an online community</p>
            </div>
            <CallToAction />
            <Footer/>
        </div>
    )
}

export default About
