import { Link, useNavigate, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const { name, price, description, img } = service;

  return (
    <div>
      <h2>Welcome to detail</h2>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>{price}</h2>
      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-outline-dark">Check Out</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
