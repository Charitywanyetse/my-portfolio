import "./Hero.css";
import profile from "../src/charity.jpg"; 



const Hero = () => {
  return (
    <section className="hero">
      {/* Left Text Section */}
      <div className="hero-text">
        <h2>Hello, It's Me</h2>
        <h1>WANYETSE   CHARITY</h1>
        <h3>
          And I'm a <span>Frontend , Backend Developer and a graphics designer</span>
        </h3>
        <p>
    I'm a passionate Web and App Developer with 1 year of hands-on experience. 
I specialize in creating and designing websites, building both frontend and backend 
solutions, and crafting intuitive user experiences. Alongside development, I also 
enjoy graphics design, combining creativity and technology to deliver modern, 
user-friendly digital products.

        </p>

        {/* Social Links */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/your-username" target="_blank" 
            rel="noopener noreferrer"></a>
          <a href="https://x.com/WanyetseC97596" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.facebook.com/profile.php?id=61567009384790" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hero-image">
        <div className="glow-circle">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  )
}


export default Hero


