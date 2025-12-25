import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Footer from "../Components/Footer";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default Home;