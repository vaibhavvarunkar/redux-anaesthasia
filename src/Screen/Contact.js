import React from "react";
import Navbar from '../Screen/Navbar'
import Footer from '../Screen/Footer'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <div className="container headings text-center mt-5">
                    <h1 className="font-weight-bold">Contact Us</h1>
                    <h5 className="mt-3 mb-5">We Are Here To Help And Find You The Best Solution For Your Health Problem And Help You Stay Healthy... </h5>
                </div>
                <div className="form-section container col-lg-8 col-md-8 col-10 mb-5">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name" required autocomplete="off" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required autocomplete="off" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPhone">Contact Number</label>
                            <input type="tel" className="form-control" id="exampleInputPhone" aria-describedby="telHelp" placeholder="Enter Contact Number" required autocomplete="off" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Your Query</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Ask Us Anything..." rows="5" required autocomplete="off"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary form-btn header-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-fluid">
                <h4 className="text-center mt-5 mb-5  font-weight-bold">
                    Trouble Finding Us ? Navigate With The Map Below..
                </h4>
            </div>
            <div class="container google-m">
                <div class="map-responsive">
                <iframe className="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.875821318987!2d-76.67107268464918!3d40.25629097938417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8bc99e701e1c1%3A0xb5a3da6c6cddbcf0!2s664%20Heiden%20Dr%2C%20Hummelstown%2C%20PA%2017036%2C%20USA!5e0!3m2!1sen!2sin!4v1617024593811!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;
