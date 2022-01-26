import Link from 'next/link';
import Image from 'next/image';
import githubIcon from '../public/github.png';
import linkedInIcon from '../public/linkedin-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navbarStyles from '../styles/components/navbar.module.css';
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className={navbarStyles.nav}>
            <ul>
                <li>
                    <h1>
                        <span className={navbarStyles.social}>
                            <Link href='/' passHref>
                                <FontAwesomeIcon icon={faCode} />
                            </Link>
                        </span>
                        <span>Anderson Cardoso</span>
                    </h1>
                </li>
                <li>
                    <Link href='/'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href='/' passHref>
                        <Image className={navbarStyles.soc} src={linkedInIcon} alt='linkedin icon' aria-hidden="true" />
                    </Link>
                </li>
                <li>
                    <span className={navbarStyles.social}>
                        <Link href='/' passHref>
                            <Image className={navbarStyles.soc} src={githubIcon} alt='github icon' aria-hidden="true" />
                        </Link>
                    </span>
                    <span className='sr-only'>LinkedIn</span>
                </li>
                <li className={navbarStyles.button}>
                    <Link href='/' passHref>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
