import React from 'react';
import SkillsBox from './SkillsBox';
import './skills.css';

function Skills() {

    let programmingLanguages = [
        'C#',
        'C++',
        'Java',
        'Javascript',
        'Python',
        'PHP',
        'Dart',
        'Swift',
        'Kotlin',
        'HTML',
        'CSS',
        'X++'
    ];
    let frameworks = [
        'ASP .NET',
        'Spring',
        'Hibernate',
        'React',
        'Laravel',
        'Flutter',
        'Android',
        'IOS'
    ];
    let other = [
        'Wordpress',
        'Linux',
        'Cisco Networking',
        'Dynamics 365',
        'Docker',
        'Power BI',
        'Power Automate',
        'FireBase'
    ];
    let office365 = [
        'Word',
        'Powerpoint',
        'Outlook',
        'Excel',
        'OneNote',
        'Sharepoint'
    ];
    return (
        <section id='skills'>
            <h5>Functional & technical skills</h5>
            <h1>Skills</h1>

            <div>

                <div className='skillsSections'>
                    <SkillsBox
                        title='Programming Languages (Markup, Query, etc...)'
                        skills={programmingLanguages}
                        id={'programmingLanguages'}/>
                    <SkillsBox title='Frameworks' skills={frameworks} id={'frameworks'}/>
                </div>
                <div className='skillsSections row2'>
                    <SkillsBox title='Office 365' skills={office365} id={'office365'}/>
                    <SkillsBox title='Other' skills={other} id={'other'}/>
                </div>
            </div>
        </section>
    )
}

export default Skills