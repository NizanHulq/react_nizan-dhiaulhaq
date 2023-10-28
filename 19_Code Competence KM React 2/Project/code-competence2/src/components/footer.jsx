import facebookIcon from '../assets/icons8-facebook.svg'
import twitterIcon from '../assets/icons8-twitter.svg'
import instagramIcon from '../assets/icons8-instagram (1).svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="social-media">
                        <a href="https://www.facebook.com/nizan.dhiaulhaq/">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/nizanhulq">
                            <img src={twitterIcon} alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/nizanhulq/">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                    <div className="website-info">
                        <div className="website-name">
                            <p>Website Nizan</p>
                        </div>
                        <div className="contact-info">
                            <p>Nomor Telepon: 6281-2253-71638</p>
                            <p>Alamat: Tegalkamulyan, Cilacap Selatan, Cilacap</p>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2023 Website Nizan - Copyright by Nizan Dhiaulhaq</p>
                </div>
            </footer>
        </>
    )
}

export default Footer