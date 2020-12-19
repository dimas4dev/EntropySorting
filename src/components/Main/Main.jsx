import React, { useEffect, useState } from "react";
import "../../assets/styles/Main/Main.scss";
import JobCard from "../JobCard/JobCard";

const Main = () => {
  return (
    <section className="main">
      <h2 className="main__title">Job Vacancies</h2>

      <div className="main__areas">Frontend</div>
      <JobCard />
      <div className="main__areas">Backend</div>
      <JobCard />
      <div className="main__areas">Data Science</div>
      <JobCard />
      <div className="main__areas">Others</div>
      <JobCard />
    </section>
  );
};

export default Main;
