import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specials from './components/Specials'
import ProductCategories from './components/ProductCategories'
import NewestProducts from './components/NewestProducts'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'
import BackToTop from './components/BackToTop'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-950">
      <Navbar />
      <main>
        <Hero />
        <Specials />
        <SectionDivider variant="white-to-gray" />
        <ProductCategories />
        <SectionDivider variant="gray-to-white" />
        <NewestProducts />
        <SectionDivider variant="white-to-gray" />
        <HowItWorks />
        <SectionDivider variant="gray-to-white" />
        <WhyChoose />
        <SectionDivider variant="white-to-gray" />
        <Services />
        <About />
        <SectionDivider variant="white-to-navy" />
        <Testimonials />
        <SectionDivider variant="navy-to-white" />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
      <BackToTop />
    </div>
  )
}
