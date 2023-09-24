import React, { Component } from "react"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomNum: null,
        }
    }

    generateRandomNum = () => {
        const RANDOM_NUM = Math.floor(Math.random() * 100)
        this.setState({ randomNum: RANDOM_NUM }, () => console.log("Angka acak bro: " + this.state.randomNum))
    }

    render() {
        const { changeLang, currentLang } = this.props
        const lang = currentLang == 'en' ? 'id' : 'en'
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
                                    <button className="btn btn-primary" onClick={this.generateRandomNum}>Random Num</button>
                                    <button className="btn btn-primary" onClick={() => changeLang(lang)}>{lang}</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Header

