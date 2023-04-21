import logo from './logo.svg';
import './App.css';
import NavbarHeader from './components/NavbarHeader';
import SectionBanner from './components/SectionBanner';
import AboutSection from './components/AboutSection';
import OurMenuSection from './components/OurMenuSection';
import BookTable from './components/BookTable';
import TestimonialSection from './components/TestimonialSection';
import ItemSection from './components/ItemSection';
import { BlogSection } from './components/BlogSection';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App w-100">
      <div className="App-header w-100">
        <Loading />
        <NavbarHeader />
        <SectionBanner />
        <AboutSection />
        <OurMenuSection />
        <BookTable />
        <ItemSection />
        <TestimonialSection />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
