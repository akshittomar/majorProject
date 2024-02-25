import React from 'react';

function Navbar() {
    // Inline style for transparency
    const transparentStyle = { backgroundColor: 'rgba(0, 0, 0, 0)' };

    return (
        <nav className="navbar navbar-expand-lg " style={{ background: "transparent" }}>
            <div className="container-fluid">
                <p className="navbar-brand mx-5 my-2 fw-bold " >AgriAdvisor</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="navbar-brand mx-5 btn btn-light" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand mx-5 btn btn-light" href="/">CropGuide</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand mx-5 btn btn-light" href="/" tabIndex="-1" aria-disabled="true">AboutUs</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand mx-5 btn btn-light" href="/" tabIndex="-1" aria-disabled="true">Login</a>
                        </li>
                        <li className="nav-item d-none">
                            <a className="navbar-brand mx-5 btn btn-light" href="/" tabIndex="-1" aria-disabled="true">Support</a>
                        </li>
                    </ul>

                   

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
