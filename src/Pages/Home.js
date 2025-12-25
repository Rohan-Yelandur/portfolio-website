import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
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