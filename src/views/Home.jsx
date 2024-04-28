import Hero from "../components/Hero";
import heroImg from "../assets/hero.jpg";
import Destinations from "../components/Destinations";
import Foods from "../components/Foods";
// import About from "../components/About ";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div id="home">
            <Hero
            cName="hero-mid"
            heroImg={heroImg}
            title="Your Journey Your Story"
            text="Discover the Beauty of Ilocos Sur"
            // buttonText="Explore Now"
            // url="/"
            // btnClass="show"
            />
            <Destinations />
            <Foods />
            <Footer />
        </div>
    )
}

export default Home;
