import React from 'react'
import './cport.css'
import Journey from '../../assets/Untitled.mp4'
import Snake from '../../assets/snake.png'
import Admin from '../../assets/Admin.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Cport = () => {
  return (
    <section id="cport-header">

      <h2>Coding Portfolio</h2>

      <Swiper modules={[Pagination, Navigation]} className="container cports__container"
      pagination={{ clickable: true}} >

        <SwiperSlide autoHeight={false} className="cport">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
            <video src={Journey} controls width="100%" height="auto"></video>
            </div>
            <h3>Journey Joiner Dissertation Project</h3>
            <p>Journey Joiner stands as the pinnacle project for my master's studies at the University of Glasgow, serving as a testament to 
                the skills I honed throughout the course. While much of the program emphasized Java, I was eager to pivot towards web 
                application development for my dissertation, aiming to diversify my skill set. This venture allowed me to refine my proficiency 
                in React and delve deeper into Django for backend integration. Crafting this app was an exhilarating experience! It's conceived 
                to assist individuals in locating travel buddies, addressing the challenges posed by mismatched schedules and budgetary constraints</p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/ctestwuide/Journey-Joiner' className='btn btn-primary' target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>
        </article>
        </SwiperSlide>

        <SwiperSlide autoHeight={false} className="cport">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
            <img src={Snake} alt="Snake game" />
            </div>
            <h3>Classic Snake Game (Java)</h3>
            <p>In my journey of studying Java, I looked for a project that would juxtapose the academic rigidity of my coursework. 
                This led me to revive the nostalgic Snake game using Java. It was an interesting and fun experience, especially with Java Swing and 
                exploring other new libraries. While the project might not align directly with conventional industry needs, it underscored the 
                significance of passion in programming and reminded me of the joy in creation.</p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/ctestwuide/Java_Snake' className='btn btn-primary' target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>
        </article>
        </SwiperSlide>

        <SwiperSlide autoHeight={false} className="cport">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
            <img src={Admin} alt="Software Engineering Admin Assignment" />
            </div>
            <h3>Designing Part of a Course Admin System</h3>
            <p>In my Software Engineering course, I developed an app designed to function as a university database for tracking 
                instructors. The system allows Course Directors to list teaching vacancies, specify educational 
                prerequisites for professors, and enables administrators to fill these roles. Instead of interfacing with a live database, 
                the program interacts with CSV files that simulate real-world database functionality. I got an 'A' in case you were wondering! </p>
            <div className="portfolio__item-cta">
            <a href='https://github.com/ctestwuide/AE2-Software-Engineering' className='btn btn-primary' target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>
        </article>
        </SwiperSlide>



      </Swiper>



    </section>
  )
}

export default Cport