import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../images/jeshoots-com-LtNvQHdKkmw-unsplash_11zon.jpg";
import doctor from "../images/national-cancer-institute-cQ8FfVNvbew-unsplash_11zon.jpg";
import CallToAction from "./CallToAction";
import Navbar from '../Screen/Navbar'
import Footer from '../Screen/Footer'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";

const Home = (props) => {
  if (localStorage.getItem("token") !== null) {
    props.history.push('/favourite')
}

  return (
    <div>
      <Navbar/>
      <div className="home-header">
        <div>
          <h3 className="header-line">
            All in one interactive, patient catered resource for all your
            perioperative anaesthesia needs.
          </h3>
          <Link className="btn btn-lg header-btn mt-2" to="/signup">
            Start A Case
          </Link>
        </div>
      </div>
      <div className="container-fluid about-us mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-12 bg-grey mt-2">
            <h1 className="text-left about-heading ml-3 mt-5">About Us</h1>
            <div className="bottom-bor"></div>
            <p className="about-text text-left m-3 pt-3">
              The ultimate mission of Anesthesia One is to serve as the one
              interactive, patient catered resource for all your perioperative
              anaesthesia needs. Multiple medical websites and mobile apps
              currently exist, each with their individual strengths to help with
              the practice of medicine. Few of these websites and mobile apps
              are specifically designed for anesthesiologists. Of these few,
              they are typically designed with one purpose in mind such as
              calculating doses of medications, calculating specific risk scores
              or acting as an electronic reference book for anaesthesia
              management considerations.{" "}
            </p>
          </div>
          <div className="col-md-6 col-12 mt-5 mb-5">
            <img className="header-img" src={headerImg}></img>
          </div>
        </div>
      </div>
      <div className="container-fluid why-us mt-1">
        <div className="row">
          <div className="col-md-6 col-12 mt-2">
            <img className="why-img" src={doctor}></img>
          </div>
          <div className="col-md-6 col-12 bg-grey mt-2">
            <h1 className="text-left ml-3 why-heading mt-5">Why Us ?</h1>
            <div className="bottom-bor"></div>
            <p className="text-left about-text m-3 pt-3">
              Anaesthesia One is unique in its creation of cross-platform
              (Android, iOS and website based) experience that:
            </p>
            <ul>
              <li>
                Consolidates the functions of multiple applications into one,
              </li>
              <li>
                Has the ability to craete a patient case where data can be
                shared among these multiple built in apps to minimize rebundant
                inputs
              </li>
              <li>
                view a patient case summary with outputs that pulls data from
                the multiple built-in apps, and{" "}
              </li>
              <li>
                will have the ability to save and share anonymized patient case
                summarieses and maacros in an online community anaesthesia
                professionals.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="showcase mt-5 mb-5">
        <div className="text-center">
          <h1 className="font-weight-bold feature-heading mb-3">Our Features</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="extra-div col-lg-4 col-md-12 col-12">
              <a href=""><i className="fas fa-user-md fa-3x"></i></a>
              <h2 className="mt-2">Easy To Use</h2>
              <ul>
                <li>Built in Applications</li>
                <li>Multiple Filters Including</li>
                <li>Crisis Management Tool</li>
                <li>Surgery-based & Patient Comorbidity-based</li>
                <li>Insert Images</li>
                <li>Easy Handling</li>
                <li>Fluids & Transfusions</li>
                <li>Emergency Drugs</li>
                <li>Antibiotics</li>

              </ul>
            </div>
            <div className="extra-div col-lg-4 col-md-12 col-12">
              <a href=""><i className="fas fa-syringe fa-3x"></i></a>
              <h2 className="mt-2">Scores & Calculations</h2>
              <ul>
                <li>Preoperative Evaluation Tools</li>
                <li>Medication Dose Calculator</li>
                <li>Airways & Equipment Size Calculator</li>
                <li>Medication Dose Calculator</li>
                <li>Physiology Calculators</li>
                <li>Regional & Neuraxial Anaesthesia Reference Guide</li>
                <li>Maximus Local Anesthetic Dose Calculator</li>
                <li>Perioperative Risk Score Calculator</li>

              </ul>
            </div>
            <div className="extra-div col-lg-4 col-md-12 col-12">
              <a href=""><i className="fas fa-briefcase-medical fa-2x"></i></a>
              <h2 className="mt-2">Case Management</h2>
              <ul>
                <li>Insert Case Notes</li>
                <li>Case Tips</li>
                <li>Additional Features</li>
                <li>Favourites (shortcut to Actions)</li>
                <li>Save A Case Summary - Printable, not an editable format</li>
                <li>Save A Case Memo - Editable</li>
                <li>Share A Case Summary - Printable, not an editable format</li>
                <li>Share A Case Macro - Upload and edit by other users </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer/>
    </div>
  );
};

export default Home;
