import collage from "../images/Group 77.png"

function Hero(){
    return(
        <section className="hero">
        <img src={collage} alt="" className="hero--photo"/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero;