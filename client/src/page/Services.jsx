import { useAuth } from "../store/auth";
import "./Services.scss";

const Services = () => {
    const { services } = useAuth();
    //console.log(services);
    document.title = "Services | Davion";

    return (
        <section className="main">
            <h1 className="main-heading">Services</h1>
            <div className="grid-three-col">
                {services.map((curr, index) => {
                    return (
                        <div key={index} className="box">
                            <img src="/images/design.png" width={200} alt="Design" />
                            <div className="info">
                                <div className="rows">
                                    <div className="provider">
                                    {curr.provider}
                                    </div>
                                    <div className="price">
                                        {curr.price}
                                    </div>
                                </div>
                                <h1>{curr.service}</h1>
                                <p>{curr.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
