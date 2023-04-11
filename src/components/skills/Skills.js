import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkillsBox from './SkillsBox';
import './skills.css';

function Skills() {

    const [programmingLanguagesCategory,setprogrammingLanguagesCategory] = useState({
        "name":"",
        "skills":[]
    });
    const [frameworksCategory,setframeworksCategory] = useState({
        "name":"",
        "skills":[]
    });
    const [office365Category,setoffice365Category] = useState({
        "name":"",
        "skills":[]
    });
    const [otherCategory,setotherCategory] = useState({
        "name":"",
        "skills":[]
    });

    const getSkills = () => {
        axios
            .get('https://anasbentaher-portfolio.azurewebsites.net/api/SkillCategory')
            .then(function (response) {
                // handle success

                
                

                for(var skillCategory of response.data)
                {
                    if(skillCategory.name == "Programming Languages")
                    {
                        setprogrammingLanguagesCategory({
                            "name":skillCategory.description,
                            "skills":skillCategory.skills
                        });
                    }

                    if(skillCategory.name == "Frameworks")
                    {
                        setframeworksCategory({
                            "name":skillCategory.description,
                            "skills":skillCategory.skills
                        });
                    }

                    if(skillCategory.name == "Office 365")
                    {
                        setoffice365Category({
                            "name":skillCategory.description,
                            "skills":skillCategory.skills
                        });
                    }

                    if(skillCategory.name == "Other")
                    {
                        setotherCategory({
                            "name":skillCategory.description,
                            "skills":skillCategory.skills
                        });
                    }
                }
            });

    }

    useEffect(()=>{
        
        getSkills();
    },[])

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
            <h1 onClick={getSkills}>Skills</h1>

            <div>

                <div className='skillsSections'>
                    <SkillsBox
                        title={programmingLanguagesCategory.name}
                        skills={programmingLanguagesCategory.skills}
                        id={'programmingLanguages'}/>
                    <SkillsBox title={frameworksCategory.name} skills={frameworksCategory.skills} id={'frameworks'}/>
                </div>
                <div className='skillsSections row2'>
                    <SkillsBox title={office365Category.name} skills={office365Category.skills} id={'office365'}/>
                    <SkillsBox title={otherCategory.name} skills={otherCategory.skills} id={'other'}/>
                </div>
            </div>
        </section>
    )
}

export default Skills