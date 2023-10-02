import '@/styles/style-home.css'

import heroImg from "@/assets/hero-img.png"
import Footer from "@/components/footer"
import Header from "@/components/header"

const Home = () => {
    return (
        <>
            <Header />
            <div className="container-style" id="hero">
                <div className="row-style" style={{ width: "100%" }}>
                    <div
                        className="column"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <div style={{ padding: "0 30px" }}>
                            <h1 style={{ color: "#fff", fontSize: 48 }}>
                                Better Solutions For Your Business
                            </h1>
                            <p style={{ color: "rgba(255, 255, 255, 0.60)", fontSize: 24 }}>
                                We are team of talented designers making websites with Bootstrap
                            </p>
                            <div className="row-style" style={{ display: "flex" }}>
                                <button
                                    className="btn-style"
                                    style={{
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                        marginRight: 54
                                    }}
                                >
                                    Get Started
                                </button>
                                <p
                                    style={{ color: "#fff", marginTop: "auto", marginBottom: "auto" }}
                                >
                                    Watch Video
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{ textAlign: "end" }}>
                        <img src={heroImg} width="500px" alt="" srcSet="" />
                    </div>
                </div>
            </div>
            <div className="container-style" style={{ backgroundColor: "#F3F5FA" }}>
                <div style={{ textAlign: "center" }}>
                    <h3 className="title-style">Join Our Newsletter</h3>
                    <p style={{ color: "#444" }}>
                        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                    </p>
                    <form
                        action=""
                        style={{
                            width: 600,
                            marginLeft: "auto",
                            marginRight: "auto",
                            position: "relative"
                        }}
                    >
                        <input type="text" className='search' />
                        <button
                            type="submit"
                            className="btn-style"
                            style={{
                                position: "absolute",
                                right: 0,
                                margin: "8px 0 !important",
                                height: 48
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="container-style">
                <div className="row-style">
                    <div className="column">
                        <span style={{ color: "#37517E", fontSize: 28, fontWeight: 600 }}>
                            ARSHA
                        </span>
                        <p style={{ fontSize: 14 }}>
                            A108 Adam Street <br />
                            New York, NY 535022 <br />
                            United States <br />
                            <br />
                            Phone: +1 5589 55488 55 <br />
                            Email: info@example.com
                        </p>
                    </div>
                    <div className="column">
                        <p
                            style={{
                                color: "#37517E",
                                fontSize: 16,
                                fontStyle: "normal",
                                fontWeight: 700
                            }}
                        >
                            Useful Links
                        </p>
                        <ul>
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <p>About Us</p>
                            </li>
                            <li>
                                <p>Service</p>
                            </li>
                            <li>
                                <p>Terms of service</p>
                            </li>
                            <li>
                                <p>Privacy policy</p>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <p
                            style={{
                                color: "#37517E",
                                fontSize: 16,
                                fontStyle: "normal",
                                fontWeight: 700
                            }}
                        >
                            Our Services
                        </p>
                        <ul>
                            <li>
                                <p>Web Design</p>
                            </li>
                            <li>
                                <p>Web Development</p>
                            </li>
                            <li>
                                <p>Product Development</p>
                            </li>
                            <li>
                                <p>Marketing</p>
                            </li>
                            <li>
                                <p>Graphic Design</p>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <p
                            style={{
                                color: "#37517E",
                                fontSize: 16,
                                fontStyle: "normal",
                                fontWeight: 700
                            }}
                        >
                            Our Social Network
                        </p>
                        <p style={{ color: "#444" }}>
                            Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                            valies
                        </p>
                        <div style={{ display: "flex" }}>
                            <a href="" className="dot" />
                            <a href="" className="dot" />
                            <a href="" className="dot" />
                            <a href="" className="dot" />
                            <a href="" className="dot" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Home