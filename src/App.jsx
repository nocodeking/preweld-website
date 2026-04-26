import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import NewestProducts from './components/NewestProducts'
import Specials from './components/Specials'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-950">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <NewestProducts />
        <Specials />
        <WhyChoose />
        <Services />
        <About />
        <Testimonials />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
