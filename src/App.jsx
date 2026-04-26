import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import NewestProducts from './components/NewestProducts'
import Specials from './components/Specials'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-950">
      <Navbar />
      <main>
        <Hero />

        <ProductCategories />
        <SectionDivider variant="white-to-gray" />

        <NewestProducts />
        <SectionDivider variant="gray-to-white" />

        <Specials />

        <HowItWorks />
        <SectionDivider variant="white-to-gray" />

        <WhyChoose />
        <SectionDivider variant="gray-to-white" />

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
    </div>
  )
}
