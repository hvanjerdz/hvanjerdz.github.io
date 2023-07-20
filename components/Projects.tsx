import React from "react";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

import Archmoured from "../public/img/Archmoured.png";
import Puntoarchivos from "../public/img/Puntoarchivos.png";
import Estruct from "../public/img/Estruct-progra.png"
import Basedatos from "../public/img/Basedatos.png";
import Teenytwos from "../public/img/under-construction.png"
import Portfolio from "../public/img/Portfolio.png";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        <ProjectCard
          img={Archmoured.src}
          title="Archmoured"
          link="https://archmoured.neocities.org"
        />
        <ProjectCard
          img={Puntoarchivos.src}
          title="Puntoarchivos"
          link="https://github.com/hvanjerdz/puntoarchivos"
        />
        <ProjectCard
          img={Estruct.src}
          title="Estruct-progra"
          link="https://github.com/hvanjerdz/estruct-progra"
        />
        <ProjectCard
          img={Basedatos.src}
          title="Basedatos"
          link="https://github.com/hvanjerdz/basedatos"
        />
        <ProjectCard
          img={Teenytwos.src}
          title="Teenytwos"
          link="https://github.com/hvanjerdz/teenytwos"
        />
        <ProjectCard
          img={Portfolio.src}
          title="My personal portfolio (this site)"
          link="https://github.com/hvanjerdz/hvanjerdz.github.io"
        />
      </div>
    </div>
  );
};

export default Projects;