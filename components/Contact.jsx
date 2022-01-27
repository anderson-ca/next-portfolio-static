import Link from 'next/link';
import contactStyles from '../styles/components/contact.module.css';

const Contact = () => {
    return (
        <div className={contactStyles.gradient}>
            <div className={contactStyles.sectionPlum}>
                <div className={contactStyles.section} id={contactStyles.contact}>
                    <h2>Contact Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias nulla quo vero, hic labore maxime aliquam consequatur illum facere facilis? Necessitatibus, alias blanditiis. Tempore fugiat non mollitia praesentium doloremque?
                    </p>
                    <p>
                    <Link href="ander:card@example.com" passHref>
                        <a className={contactStyles.button}>Email me</a>
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
