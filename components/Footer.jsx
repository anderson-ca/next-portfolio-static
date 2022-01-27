import Link from 'next/link';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { BsMailbox } from 'react-icons/bs';
import footerStyles from '../styles/components/footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <h2>Anderson Cardoso &middot; Web Developer</h2>
            <ul>
                <li>
                    <Link href='#' passHref>
                        <a>
                            <span><FaLinkedin /></span>
                            <span className='sr-only'>LinkedIn</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <a>
                        <span><FaGithub /></span>
                        <span className='sr-only'>Github</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span><BsMailbox /></span>
                        <span className='sr-only'>Email</span>
                    </a>
                </li>
            </ul>
            <p><small>&copy; 2021 Anderson Cardoso. All rights reserved.</small></p>
        </div>
    );
};

export default Footer;
