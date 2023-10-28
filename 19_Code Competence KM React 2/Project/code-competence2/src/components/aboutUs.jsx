import aboutImg from '../assets/aboutUs.jpg'

const AboutUs = () => {
    return (
        <>
            <div className="about-container">
                <h1 className='mb-4'>Tentang Kami</h1>
                <img className="about-img" src={aboutImg} alt="Tentang Kami" />
                <div className='mt-4'>
                    <p>
                        Selamat datang di halaman tentang kami! Kami adalah tim yang berdedikasi untuk memberikan solusi terbaik
                        untuk kebutuhan Anda. Dengan pengalaman yang luas dan semangat inovasi, kami bertekad untuk memberikan layanan
                        terbaik kepada pelanggan kami.
                    </p>
                    <p>
                        Kami percaya bahwa kolaborasi adalah kunci keberhasilan. Bersama-sama, kami bekerja keras untuk mencapai
                        tujuan bersama dan memberikan pengalaman luar biasa kepada pelanggan kami. Kami menghargai setiap individu
                        dalam tim kami dan berkomitmen untuk menciptakan lingkungan kerja yang positif dan inklusif.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs