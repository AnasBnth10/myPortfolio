import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import ContactBox from './ContactBox';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {IoShareSocialSharp} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import Socials from '../socials/Socials';
import validation from './validation';

import './contact.css';

function Contact() {

    const [values,setValues] = useState({
        'name':'',
        'firstName':'',
        'email':'',
        'subject':'',
        'message':'',
    })

    const [dataIsCorrect,setDataIsCorrect] = useState(false);
    const [formSubmitted,setFormSubmitted] = useState(false);

    const [errors,setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:event.target.value
        }
        )
    }

    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setErrors(validation(values));

        if(Object.keys(errors).length === 0)
    {
        setDataIsCorrect(true);
    }

    if(dataIsCorrect)
    {
        
        emailjs.sendForm('service_kyrnafi', 'template_3i03ye6', form.current, 'user_GfFYdwckCKTcz5nj46W9F')
          .then((result) => {
            e.target.reset();
            setFormSubmitted(true);
            setValues({
                'name':'',
                'firstName':'',
                'email':'',
                'subject':'',
                'message':'',
            });
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          
    }

        
        
          
    };

    return (
        <section id='contact'>
            <h5>Contact me</h5>
            <h1>Contact</h1>
            <div id='contactBoxes'>
                <ContactBox
                    title={'Phone number'}
                    icon={< BsFillTelephoneFill size = {
                    50
                }
                className = 'contactBoxIcon' />}>
                    <p>GSM - 0489233653</p>
                    <p>Whatsapp - 0489233653
                    </p>
                </ContactBox >
                <ContactBox
                    title={'Mail'}
                    icon={< GrMail size = {
                    50
                }
                className = 'contactBoxIcon' />}>
                    <a href='mailto:anasbnth@gmail.com'>anasbnth@gmail.com</a>
                    <br/>
                    <a href='mailto:bentahera@delawareconsulting.com'>bentahera@delawareconsulting.com</a>
                </ContactBox >
                <ContactBox
                    title={'Social Media'}
                    icon={< IoShareSocialSharp size = {
                    50
                }
                className = 'contactBoxIcon' />}>
                    <Socials/>
                </ContactBox>
            </div>
            <br/>
            <br/>
            <br/>
            <h1>Have a question or want to discuss a project? Contact me anytime.</h1>
            <br/>

            <form ref={form} onSubmit={sendEmail} id='contactForm'>
                
                    
                    {formSubmitted && <label className='succesMessage'>Your message has been received</label>}
                    <br/>
                    <br/>
                    
                    <label>Name</label>
                    <input name='name' type={'text'} placeholder='Name...' value={values.name}  onChange={handleChange} ></input>
                    
                    {errors.name && <p className='errorMessage'>{errors.name}</p> }
                    <br/>
                    <br/>
                    <label >First Name</label>
                    <input name='firstName' type={'text'} placeholder='First Name...' value={values.firstName}  onChange={handleChange} ></input>
                    {errors.firstName && <p className='errorMessage'>{errors.firstName}</p> }
                    <br/>
                    <br/>
                    <label >Email</label>
                    <input name='email' type={'email'} placeholder='Email...' value={values.email} onChange={handleChange} ></input>
                    {errors.email && <p className='errorMessage'>{errors.email}</p> }
                    <br/>
                    <br/>
                    <label >Subject</label>
                    <input name='subject' type={'text'} placeholder='Subject...' value={values.subject}  onChange={handleChange} ></input>
                    {errors.subject && <p className='errorMessage'>{errors.subject}</p> }
                    <br/>
                    <br/>
                    <label >Message</label>
                    <textarea name='message' placeholder='Message...' value={values.message}  onChange={handleChange} ></textarea>
                    {errors.message && <p className='errorMessage'>{errors.message}</p> }
                

                <button className='contactFormBtn' type='submit'>Send Message</button>
            </form>

        </section>
    )
}

export default Contact