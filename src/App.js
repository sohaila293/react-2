import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/Header';
import APPHero from './components/Hero';
import AppAbout from './components/About';
import AppServices from './components/Services';
import AppWorks from './components/Works';
import AppTeams from './components/teams';
import AppTestimonials from './components/Testimonials';
import AppPricing from './components/Pricing';
import AppBlog from './components/Blog';
import AppContact from './components/Contact';
import AppFooter from './components/Footer';
function App() {
  return (
    <div className="App">
       <header id="header">
        <AppHeader />
        </header>   
        <main>
          <APPHero />
          <AppAbout />
          <AppServices />
          <AppWorks />
          <AppTeams />
          <AppTestimonials />
          <AppPricing />
          <AppBlog />
          <AppContact />
          <AppFooter />
          </main> 
    </div>
  );
}

export default App;
