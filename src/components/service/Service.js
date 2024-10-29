import "./Service.css";
import ServiceItem from "./ServiceItem";
function Service() {
  let services = [
    {
      serviceIcon: "bi bi-briefcase",
      serviceTitle: "WEB DESIGN",
      serviceInfo:
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      serviceIcon: "bi bi-file-earmark-code",
      serviceTitle: "WEB DEVELOPMENT",
      serviceInfo:
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      serviceIcon: "bi bi-camera",
      serviceTitle: "PHOTOGRAPHY",
      serviceInfo:
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      serviceIcon: "bi bi-bezier",
      serviceTitle: "RESPONSIVE DESIGN",
      serviceInfo:
        "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      serviceIcon: "bi bi-app-indicator",
      serviceTitle: "GRAPHIC DESIGN",
      serviceInfo:
        "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      serviceIcon: "bi bi-binoculars",
      serviceTitle: "MARKETING SERVICES",
      serviceInfo:
        "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
  ];
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {/* <ServiceItem {...services[0]} />
          <ServiceItem {...services[1]} />
          <ServiceItem {...services[2]} />
          <ServiceItem {...services[3]} />
          <ServiceItem {...services[4]} />
          <ServiceItem {...services[5]} /> */}

          {
            services.map(service => < ServiceItem {...service} />)
          }
          
        </div>
      </div>
    </section>
  );
}
export default Service;
