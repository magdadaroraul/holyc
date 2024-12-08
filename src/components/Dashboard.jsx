import React from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import Sidebar from '../components/Sidebar';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="about-section-container">
        {/* Hero Section */}
        <section
          className="hero-wrap hero-wrap-2"
          style={{ backgroundImage: "url('images/bg_2.jpg')" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate mb-5 text-center">
                <p className="breadcrumbs mb-0">
                  <span className="mr-2">
                    <Link to="/">
                      Home <i className="fa fa-chevron-right"></i>
                    </Link>
                  </span>{" "}
                  <span>
                    About us <i className="fa fa-chevron-right"></i>
                  </span>
                </p>
                <h2 className="mb-0 bread">About Us</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="ftco-intro">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-4 d-flex">
                <div className="intro d-lg-flex w-100 ftco-animate">
                  <div className="icon">
                    <span className="flaticon-support"></span>
                  </div>
                  <div className="text">
                    <h2>Online Support 24/7</h2>
                    <p>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="intro color-1 d-lg-flex w-100 ftco-animate">
                  <div className="icon">
                    <span className="flaticon-cashback"></span>
                  </div>
                  <div className="text">
                    <h2>Money Back Guarantee</h2>
                    <p>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="intro color-2 d-lg-flex w-100 ftco-animate">
                  <div className="icon">
                    <span className="flaticon-free-delivery"></span>
                  </div>
                  <div className="text">
                    <h2>Free Shipping &amp; Return</h2>
                    <p>
                      A small river named Duden flows by their place and supplies it
                      with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
