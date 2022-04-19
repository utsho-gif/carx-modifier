import React, { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Service from "../Service/Service";
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className='container'>
      <h1 className="m-5 services-title">Things You Get from Us</h1>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
