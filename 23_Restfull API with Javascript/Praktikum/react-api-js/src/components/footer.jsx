const Footer = () => {
    return (
        <footer>
            <div
                className="container-style"
                style={{ backgroundColor: "#37517E", paddingTop: 15, paddingBottom: 15 }}
            >
                <div
                    className="row-style"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <p style={{ color: "#fff" }}>
                        © Copyright <strong>Arsha</strong>. All Rights Reserved
                    </p>
                    <p style={{ color: "#fff" }}>
                        Designed by{" "}
                        <a href="" style={{ textDecoration: "none", color: "#47B2E4" }}>
                            BootstrapMade
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer