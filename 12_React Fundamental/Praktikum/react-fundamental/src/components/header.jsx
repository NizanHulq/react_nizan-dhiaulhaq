import React from "react";

function Header() {
    return (
        <>
            <header>
                <nav className="navbar  navbar-expand-lg shadow-sm px-5">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" style={{ fontWeight: 600 }}>
                            Simple header
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse ms-auto"
                            id="navbarNavAltMarkup"
                            style={{ flexGrow: "unset" }}
                        >
                            <div className="navbar-nav gap-4">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                                <a className="nav-link" href="#">
                                    FAQs
                                </a>
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

}

export default Header

