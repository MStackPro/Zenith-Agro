import React from "react";
import ProjectImage1 from "../../assets/project3.png";
import ProjectImage2 from "../../assets/project4.png";
import ProjectImage3 from "../../assets/project5.png";
import ProjectImage4 from "../../assets/project6.png";
import ProjectImage5 from "../../assets/project7.png";
import ProjectImage6 from "../../assets/project8.png";
import ProjectImage7 from "../../assets/project9.png";

const Projects = () => {
  return (
    <section>
      <main className="flex flex-col space-y-8 py-8">
        <div className="project-hero mt-48 mb-4 p-4 text-center text-white bg-ColorSecondary">
          <h2 className="font-semibold">Our Projects</h2>
        </div>
        <div className="projects-container container flex flex-col gap-8 pb-4">
          <h2 className="text-center">The Soya Project - Kaduna State</h2>
          <div className="first-image">
            <img src={ProjectImage1} alt="project image" className="" />
          </div>
          <div className="second flex gap-8">
            <img src={ProjectImage2} alt="project image" />
            <img src={ProjectImage3} alt="project image" />
          </div>

          <div className="project-desc flex flex-col gap-4">
            <p>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
              and we realized 29 bags of soya beans. We made 10% profit from
              this project. The project lasted from July to November. We got 5
              hectares of farm land in Kaduna, Nigeria. Cultivated it and we
              realized 29 bags of soya beans.
            </p>
            <p>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
              and we realized 29 bags of soya beans. We made 10% profit from
              this project. The project lasted from July to November. We got 5
              hectares of farm land in Kaduna, Nigeria. Cultivated it and we
              realized 29 bags of soya beans.
            </p>
          </div>
        </div>

        <div className="projects-container container flex flex-col gap-8 pb-4">
          <h2 className="text-center">The Goat Farm Project - Niger State</h2>
          <div className="first-image">
            <img src={ProjectImage4} alt="project image" className="" />
          </div>
          <div className="second flex gap-8">
            <img src={ProjectImage5} alt="project image" />
            <img src={ProjectImage6} alt="project image" />
          </div>

          <div className="project-desc flex flex-col gap-4">
            <p>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
              and we realized 29 bags of soya beans. We made 10% profit from
              this project. The project lasted from July to November. We got 5
              hectares of farm land in Kaduna, Nigeria. Cultivated it and we
              realized 29 bags of soya beans.
            </p>
            <p>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
              and we realized 29 bags of soya beans. We made 10% profit from
              this project. The project lasted from July to November. We got 5
              hectares of farm land in Kaduna, Nigeria. Cultivated it and we
              realized 29 bags of soya beans.
            </p>
          </div>
        </div>

        <div className="projects-container container flex flex-col gap-8 pb-8">
          <h2 className="text-center">The Maize Project - Plateau State</h2>
          <div className="first-image">
            <img src={ProjectImage7} alt="project image" className="" />
          </div>

          <div className="project-desc flex flex-col gap-4">
            <p>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
              and we realized 29 bags of soya beans. We made 10% profit from
              this project. The project lasted from July to November. We got 5
              hectares of farm land in Kaduna, Nigeria. Cultivated it and we
              realized 29 bags of soya beans.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
