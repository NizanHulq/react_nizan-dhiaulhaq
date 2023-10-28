import '../src/styles/App.css'
import Navbar from '../src/components/navbar'
import Welcome from '../src/components/welcome'
import AboutUs from '../src/components/aboutUs'
import ContactUs from '../src/components/contactUs'
import Footer from '../src/components/footer'

function App() {

  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Welcome Section */}
      <section
        className="welcome-section text-center py-5 d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <Welcome />
      </section>
      {/* About Section */}
      <section className='about-section' id='about'>
        <AboutUs />
      </section>
      {/* Contact Section */}
      <section className='contact-section' id='contact'>
        <ContactUs />
      </section>
      {/* footer */}
      <Footer />
    </>
  )
}

export default App
