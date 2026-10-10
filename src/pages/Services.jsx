

import servicesData from "../data/servicesData";
import ServicesItem from "../components/ServicesItem";
export default function Services() {
  return (
      <section className="services " id="services">
    <div className="container">
      <div className="heading ">
        <span className="text-uppercase">service</span>
        <h2 className="">What i do!</h2>
      </div>
      <div className="service-icon">
        <div className="row text-center">
          {servicesData.map((service)=>(
              <ServicesItem ImgSER={service.image} title={service.title} description={service.description}/>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
