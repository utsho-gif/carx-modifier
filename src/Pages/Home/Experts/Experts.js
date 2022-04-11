import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expart from "../Expart/Expart";

const Experts = () => {
  const experts = [
    { id: 1, name: "Stuart Lee", img: expert1 },
    { id: 2, name: "Don Joe", img: expert2 },
    { id: 3, name: "Fris Bee", img: expert3 },
    { id: 4, name: "Sam Lee", img: expert4 },
    { id: 5, name: "William Smith", img: expert5 },
    { id: 6, name: "Hennessa Lee", img: expert6 }
  ];
  return (
    <div className="container">
      <h2 className="mt-5 services-title">Our Experts</h2>
      <div className="row">
          {
              experts.map(expert => <Expart key={expert.id} expert={expert}></Expart>)
          }
      </div>
    </div>
  );
};

export default Experts;
