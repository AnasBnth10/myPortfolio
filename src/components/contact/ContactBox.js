import React from 'react';

function ContactBox(props) {

    return (
        <div className='contactBox'>
            {props.icon}
            <br/>
            <br/>
            <h3>{props.title}</h3>
            <br/>
            <br/>
           

            <div id='contactBoxContent'>
                {props.children}
            </div>

        </div>
    )
}

export default ContactBox;