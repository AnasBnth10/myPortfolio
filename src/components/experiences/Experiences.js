import React from 'react';
import infrabelLogo from '../../assets/Infrabel_logo.png';
import delawareLogo from '../../assets/delaware-logo.png';
import partyCornerDecoLogo from '../../assets/partycornerdeco-logo.png';

import ExperienceImage from './ExperienceImage';

import './experiences.css';

function Experiences() {
    return (
        <section id='experiences'>

            <h5>All my experiences</h5>
            <h1>Experiences</h1>
            <br/>
            <br/>
            <br/>
            <div className='slides'>
                <div className='slide'>
                    <ExperienceImage path={infrabelLogo}/>
                    <h3 className="legend">UPM Java Developer</h3>
                    <h4 className="experienceDate">14/02/22 - 9/05/22</h4>

                    <br/>
                    <p>I completed a three-month internship at Infrabel in Anderlecht as a developer
                        in the Unified Planning Modules team. My role was to participate in the design,
                        development, and validation of new services and tools, as well as preparing the
                        application for planning train traffic using UPM.</p>

                    <br/>
                    <br/>
                    <p>During my internship, I worked with the following technologies and tools:
                        Java 8, Maven, MBeans, Spring, Thymeleaf, HTML/CSS, iText Core, iText Dito, and
                        iText pdf2HTML. I also found it very interesting to learn more about how train
                        planning is developed and implemented. It was my first professional experience,
                        and I learned a lot from it.
                    </p>
                </div>
                <div className='slide slide2'>
                    <ExperienceImage path={delawareLogo}/>

                    <h3 className="legend">Microsoft Dynamics 365 F&O developer</h3>
                    <h4 className="experienceDate">Started at 9 september 2022</h4>
                    <br/>
                    <p>I am currently working as a Technical Consultant in Dynamics 365 F&O at
                        Delaware. I underwent a one-month training program specifically for Dynamics,
                        and have acquired multiple certifications such as the MB-300 and MB-500. As part
                        of the AMS team, I have been involved in resolving changes, bugs, and
                        development for various clients, including La Croix Rouge, Nicols Eurvest,
                        Yusen, and many others. My expertise in Dynamics has allowed me to deliver
                        effective solutions that meet the unique needs of each client.</p>

                    <br/>
                    <br/>
                    <p>
                        I am dedicated to providing top-notch service to all clients, and take pride in
                        my ability to effectively communicate complex technical issues to non-technical
                        stakeholders. I am constantly looking to expand my skills and stay up-to-date
                        with the latest trends and developments in the field of Dynamics 365 F&O.</p>
                    <br/>
                    <br/>
                    <p>I worked with the X++ programming language in Dynamics 365, and I've utilized several
                        tools for Dynamics 365 such as Lifecycle Services, Azure DevOps, Omnitracker,
                        and more.In addition to that, I have also learned to work with Power Platform
                        tools such as Power BI for data analysis and Power Apps for creating low-code
                        applications.
                    </p>
                </div>
                <div className='slide'>
                    <ExperienceImage path={partyCornerDecoLogo}/>
                    <h3 className="legend">Wordpress Full-stack developer</h3>
                    <h4 className="experienceDate">Launched in 2023</h4>
                    <br/>
                    <p>I created the website PartyCornerDeco for someone and I was the only
                        developer for this website. I built this site using WordPress, which I learned
                        in my free time. The purpose of the website is to sell party decorations and
                        catering. It was launched in 2023 and it's live on the following link:
                        <a href='https://www.partycornerdeco.nl'>partycornerdeco</a>
                    </p>

                    <br/>
                    <br/>
                    <p>Creating PartyCornerDeco was a fun and challenging project for me. As the
                        sole developer, I had the freedom to design and implement the website according
                        to my client's specifications. I worked hard to ensure that the website was easy
                        to navigate and visually appealing, using vibrant colors and beautiful images
                        from my client.</p>
                </div>

            </div>

        </section>
    )
}

export default Experiences