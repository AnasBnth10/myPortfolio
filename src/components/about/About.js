import React from 'react';
import './about.css';
import AboutBox from './AboutBox';

import {FaGraduationCap, FaLanguage} from 'react-icons/fa';
import {CgWorkAlt} from 'react-icons/cg';

function About() {
    return (
        <section id='about'>
            <h5>Last update</h5>
            <h1>About Me</h1>

            <div className='aboutMeSections'>
                <div className='aboutMeSection'>

                    <div className='aboutMeBoxSection'>
                        <AboutBox
                            title={'Actual Situation'}
                            subTitle={'Dynamics 365 technical consultant at Delaware Belgium'}
                            icon={< CgWorkAlt className = 'contactBoxIcon' />}/>
                    </div>
                    <div className='studiesSectionText'>
                        <p>Since September 2022, I have been working as a Technical Consultant in
                            Dynamics 365, specializing in the field of Finance and Operations. My role
                            involves providing expert guidance on the implementation and configuration of
                            Dynamics 365 solutions to meet the unique needs of our clients in the finance
                            and operations industry.</p>

                        <br/>
                        <br/>
                        <p>
                            As a consultant, I work closely with cross-functional teams to design, develop,
                            and deploy solutions that streamline business processes and improve operational
                            efficiency.
                        </p>
                    </div>
                </div>

                <div className='aboutMeSection studiesSection'>
                    <div className='studiesSectionText' id='textStudiesSection'>
                        <p>I studied at Erasmus Hogeschool Brussels in Anderlecht from 2019 to 2022,
                            where I obtained a Bachelor's degree in Applied Informatics. I specialized in
                            programming and gained extensive knowledge and experience in the field. As a
                            result, I earned the title of Software Engineer upon completion of my degree.</p>
                    </div>
                    <div className='aboutMeBoxSection'>
                        <AboutBox
                            title={'Studies'}
                            subTitle={'Bachelor Applied Informatics - Software Engineer'}
                            icon={< FaGraduationCap className = 'contactBoxIcon' />}/>
                    </div>
                </div>
                <div className='aboutMeSection'>
                    <div className='aboutMeBoxSection'>
                        <AboutBox
                            title={'Languages'}
                            subTitle={'French,Dutch and English'}
                            icon={< FaLanguage className = 'contactBoxIcon' />}/>
                    </div>
                    <div className='studiesSectionText'>
                        <p>I am trilingual and fluent in English, French, and Dutch. French is my mother
                            tongue, and I have completed all of my studies in Dutch. From primary school to
                            university, I have learned and studied in a Dutch-speaking environment.
                        </p>
                        <br/>
                        <br/>

                        <p>
                            Being able to speak multiple languages has allowed me to communicate with a wide
                            range of people and has opened up many opportunities for me both personally and
                            professionally. I am grateful for the ability to express myself in different
                            languages and to understand and appreciate different cultures.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About