import { NavLink } from 'react-router-dom';
import './Home.scss';
const Home = () => {


    document.title = "Home | Davion";
    return (
        <section className="main">
            <h1 className="main-heading">Home</h1>
            <div className="twocols">
                <div className="intro">
                    <p>The Fastest Freelancing Works</p>
                    <h1>Welcome To DEVION</h1>
                    <p>Are you ready to take your business to the next level with cutting-edge
                        IT-Solutions ? No worries, we have got you converd ! <br />
                        At Devion, we specialized in providing innovative IT services and solutions
                        tailored to meed your unique requirements.
                    </p>
                    <div className="btns">
                        <NavLink to="/contact" className="submitBtn">Contact Now</NavLink>
                        <div className="secondBtn">
                            Learn More
                        </div>
                    </div>
                </div>
                <img src="/images/home.png" width={350} alt="" />
            </div>
            <div className="home-about">
                <div className="box">
                    <h1>50+</h1>
                    <p>Registered Companies</p>
                </div>
                <div className="box">
                    <h1>1,000+</h1>
                    <p>Happy Clients</p>
                </div>
                <div className="box">
                    <h1>500+</h1>
                    <p>Well Known Developers</p>
                </div>
                <div className="box">
                    <h1>24/7</h1>
                    <p>Services</p>
                </div>
            </div>

            <div className="twocols">
                <img src="/images/design.png" width={350} alt="" />
                <div className="intro">
                    <p>We are here to help you!</p>
                    <h1>Get Started Today </h1>
                    <p>Ready to take your first step towards a more efficent and secure IT solutions?
                    </p>
                    <div className="btns">
                        <NavLink to="/contact" className="submitBtn">Contact Now</NavLink>
                        <div className="secondBtn">
                            Learn More
                        </div>
                    </div>
                </div>
            </div>
            </section>
    )
}

export default Home;