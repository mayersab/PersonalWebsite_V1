import React from 'react';
import ContactStyles from '../styles/Contact.module.css'
const Contact = () => {
    return (
        <div className={ContactStyles.wrapper}>
            <div className={ContactStyles.contactme}>
                <div className={ContactStyles.heading}>
                    <h2>Wanna Get In Contact?</h2>
                </div>
                <div className={ContactStyles.excerpt}>
                    <p>Have an exciting project you need help with? I'm always looking for new opportunities. Send me an email! My inbox is always open.</p>
                </div>
                <div>
                    <a href="mailto:mayersz01@outlook.com"><button className={ContactStyles.contactbtn}>Contact</button></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
