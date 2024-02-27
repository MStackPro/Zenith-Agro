import React from 'react'
import Project1Image from '../assets/project1.png'
import Project2Image from '../assets/project2.png'

const OurProjects = () => {
  return (
    <section className='my-8'>
      <main className='container projects-container'>
        <h4 className='text-3xl font-semibold my-8'>Our Projects</h4>
        <div className="projects flex flex-col gap-8">

          <div className="project grid grid-cols-2 gap-12">
            <img src={Project1Image} alt="project image" />
            <div className="project-desc">
              <h5 className='font-semibold underline'>The Soya Project</h5>
              <p className='text-ColorDark w-80 my-4'>
                We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November.
              </p>
              <button className='btn my-4'>Learn More</button>
            </div>
          </div>

          <div className="project grid grid-cols-2 gap-12">
            <img src={Project2Image} alt="project image" />
            <div className="project-desc">
              <h5 className='underline font-semibold'>The Goat Farm Project</h5>
              <p className='text-ColorDark w-80 my-4'>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. We made 10% profit from this project. The project lasted from July to November. We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it and we realized 29 bags of soya beans. 
              </p>
              <button className='btn my-4'>Learn More</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default OurProjects