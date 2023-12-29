import { NavLink } from 'react-router-dom';
const About=()=>
{
    document.title = "About | Davion";
    return(
        <section className="main">
            <h1 className="main-heading">About</h1>
            <div className="twocols">
                <div className="intro">
                    <p>Welcome To Davion</p>
                    <h1>Why Choose Us?</h1>
                    <p> <b>Expertise:</b>
                        Our team consist of experienced IT professionals who are passionate about
                        staying up-to-date with the latest industry trends.
                    </p>
                    <p> <b>Customization:</b>
                        We understand that every business is unique. That's why we create solutions 
                        that are tailored to your specific needs and goals.
                    </p>
                    <p> <b>Customer-centric :</b>
                        We prioritize your satisfaction and provide top-notch support to address your IT 
                        concerns. 
                    </p>
                    <p> <b>Affordability:</b>
                        We offer competitive pricing without compromisingon the quality of our services.
                    </p>
                    <p> <b>Reliablity:</b>
                        Count on us to be there when you need us. We're committed to ensuring your IT enviroment
                        is reliable and available 24/7.
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
        </section>
    )
}

export default About;