import React from "react";
import "../../assets/styles/JobCard/JobCard.scss";
import Relojito from "../../assets/images/clock.svg";
import IconJobsito from "../../assets/images/jobs.svg";
import Locacioncita from "../../assets/images/marcador-de-posicion.svg";

const JobCard = () => {
  return (
    <article className="Card">
      <div className="Card__date">
        <img src={Relojito} alt="" />
        <p>17/06/2020</p>
      </div>
      <div className="Card__jobname">
        <img src={IconJobsito} alt="" />
        <p>Principal Frontend Enginner, Prodigious</p>
      </div>
      <div className="Card__jobcity">
        <img src={Locacioncita} alt="" />
        <p>Colombia, English Required</p>
      </div>
      <div className="Card__button">
        <div>Apply Now</div>
      </div>
    </article>
  );
};

export default JobCard;
