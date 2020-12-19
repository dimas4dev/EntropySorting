import React, { useEffect, useState } from "react";
import "../../assets/styles/JobCard/JobCard.scss";
import Relojito from "../../assets/images/clock.svg";
import IconJobsito from "../../assets/images/jobs.svg";
import Locacioncita from "../../assets/images/marcador-de-posicion.svg";

const JobCard = () => {
  const [jobCards, setJobCards] = useState([]);
  const [Query, setQuery] = useState("");
  // const { title } = variable;
  useEffect(() => {
    // fetch("http://localhost:3000/areas")
    //   .then((response) => response.json())
    //   .then((data) => setJobCards(data[0]));
    fetch("https://lootvoid.xyz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
    {
      getVacants(carrer: Frontend, page: 1) {
        link,
        title
      }
    }`,
      }),
    })
      .then((res) => res.json())
      .then((data) => setJobCards(data.data.getVacants));
  });
  return (
    <article className="Card">
      <div className="Card__date">
        <img src={Relojito} alt="" />
        <p>
          {jobCards.length > 0
            ? jobCards.map(() => {
                jobCards[0].link;
              })
            : "none"}
        </p>
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
