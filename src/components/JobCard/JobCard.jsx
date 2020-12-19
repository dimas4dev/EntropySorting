import React, { useEffect, useState } from "react";
import "../../assets/styles/JobCard/JobCard.scss";
import Relojito from "../../assets/images/clock.svg";
import IconJobsito from "../../assets/images/jobs.svg";
import Locacioncita from "../../assets/images/marcador-de-posicion.svg";

const JobCard = () => {
  const [jobCards, setJobCards] = useState([]);
  const [quere, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/areas")
      .then((response) => response.json())
      .then((data) => setJobCards(data[0].DS[0]));
  });
  return (
    <article className="Card">
      <div className="Card__date">
        <img src={Relojito} alt="" />
        <p>{jobCards.fecha}</p>
      </div>
      <div className="Card__jobname">
        <img src={IconJobsito} alt="" />
        <p>{jobCards.nombres}</p>
      </div>
      <div className="Card__jobcity">
        <img src={Locacioncita} alt="" />
        <p>{jobCards.ciudad}</p>
      </div>
      <div className="Card__button">
        <div>Apply Now</div>
      </div>
    </article>
  );
};

export default JobCard;
